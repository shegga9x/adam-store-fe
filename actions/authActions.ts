"use server";
import { ApiErrorResponse } from './../api-client/models/api-error-response';
import { extractErrorMessage } from '../utils/api-error';

import { cookies } from "next/headers";
import { z } from "zod";
import { AuthControllerApi } from "@/api-client";
import type { ApiResponseUserResponse, UserResponse } from "../api-client/models"; // <-- add this import if not present
import { getAuthConfiguration } from '@/api-client/init-auth-config';
const token = cookies().get("token")?.value;
const authControllerApi = new AuthControllerApi(getAuthConfiguration());
const authControllerApiNoHeader = new AuthControllerApi(getAuthConfiguration());

const schema = z.object({
  username: z
    .string()
    .min(4, {
      message: "Username must be at least 5 characters.",
    })
  ,
  password: z
    .string()
    .min(4, {
      message: "Password must be at least 4 characters",
    })

});
type GetMeResult = {
  isLogin: boolean
  user?: UserResponse
  error?: ApiErrorResponse
}

/**
 * Extracts a user-friendly error message from an error object.
 */

export async function signUpAction(formData: FormData): Promise<any | ApiErrorResponse> {
  const validatedFields = schema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    name: formData.get("name"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const name: string = formData.get("name") as string;
    const username: string = formData.get("username") as string;
    const password: string = formData.get("password") as string;
    const confirmPassword: string = formData.get("confirmPassword") as string;

    // Use AuthControllerApi to register with all required fields
    const response = await authControllerApiNoHeader.register({
      registerRequest: {
        name,
        email: username,
        password,
        confirmPassword,
      },
    });

    const result = response.data;

    // If registration fails, return the error as is
    if (!result || result.code !== 200) {
      console.log("Registration failed:", result);
      return result;
    }

    // After registration, login to get tokens
    const loginResponse = await authControllerApiNoHeader.login({
      loginRequest: {
        email: username,
        password: password,
      },
    });
    const loginResult = loginResponse.data;

    if (loginResult && loginResult.code === 200 && loginResult.result?.accessToken && loginResult.result?.refreshToken) {
      cookies().set({
        name: "token",
        value: loginResult.result.accessToken,
        httpOnly: true,
        path: "/",
      });
      cookies().set({
        name: "refreshToken",
        value: loginResult.result.refreshToken,
        httpOnly: true,
        path: "/",
      });
    }

    return loginResult;
  } catch (error) {
    // console.log("Error during sign-up:", error);
    return extractErrorMessage(error, "An error occurred during sign-up");
  }
}
export async function signInAction(formData: FormData): Promise<any | ApiErrorResponse> {
  const validatedFields = schema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // Use AuthControllerApi to login
    const response = await authControllerApiNoHeader.login({
      loginRequest: {
        email: username,
        password: password,
      },
    });

    // Handle API response (assuming OpenAPI generator returns .data)
    const result = response.data;

    // If login fails, return the error as is
    if (!result || result.code !== 200 || !result.result?.accessToken) {
      return result;
    }
    console.log(result);

    // Set token cookie if login is successful
    if (result.result?.accessToken) {
      cookies().set({
        name: "token",
        value: result.result.accessToken,
        httpOnly: true,
        path: "/",
      });
    }
    if (result.result?.refreshToken) {
      cookies().set({
        name: "refreshToken",
        value: result.result.refreshToken,
        httpOnly: true,
        path: "/",
      });
    }
    return result;
  } catch (error) {
    return extractErrorMessage(error, "An error occurred during sign-in");
  }
}


export async function getMeAction(): Promise<GetMeResult> {
  try {
    const token = cookies().get("token")?.value;

    if (!token) {
      return {
        isLogin: false,
        error: {
          message: "Token not found",
          code: 404,
        },
      };
    }

    try {
      const response = await authControllerApi.getMyInfo();
      return {
        isLogin: true,
        user: response.data.result,
      };
    } catch (error) {
      return {
        isLogin: false,
        error: extractErrorMessage(error, "Failed to get user info"),
      };
    }

  } catch (error) {
    return {
      isLogin: false,
      error: extractErrorMessage(error, "Unexpected error while getting user info"),
    };
  }
}

export async function logoutAction(): Promise<any | ApiErrorResponse> {
  try {
    const token = cookies().get("token")?.value;
    const refreshToken = cookies().get("refreshToken")?.value;

    if (!token && !refreshToken) {
      return JSON.parse(
        JSON.stringify({
          message: "you are not login",
          status: 401,
        }),
      );
    }

    // Use AuthControllerApi to logout if refreshToken exists
    if (token) {
      try {
        await authControllerApi.logout({
          tokenRequest: {
            accessToken: token
          },
        });
      } catch (e) {
        // ignore API errors for logout
      }
    }

    cookies().delete("token");
    cookies().delete("refreshToken");

    return JSON.parse(
      JSON.stringify({
        message: "logout successfully",
        status: 200,
      }),
    );
  } catch (error) {
    return extractErrorMessage(error, "server error");
  }
}
