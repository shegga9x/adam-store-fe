"use client";

import { signUpAction } from "@/actions/authActions";
import Loader from "@/components/modules/Loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { notoSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/stores/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(4),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const signIn = useAuthStore((state) => state.signIn);

  const router = useRouter();

  const { toast } = useToast();

  async function formSubmitHandler(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("username", values.username);
    formData.append("password", values.password);
    formData.append("confirmPassword", values.confirmPassword);

    const res = await signUpAction(formData);

    setIsLoading(false);
    if (res.code === 200) {
      router.push("/");

      signIn(res.user);

      return toast({
        description: "sign up successfully",
      });
    }
    if (res.code === 201) {
      // router.push("/");
      // signIn(res.user);
      return toast({
        description: res.message,
      });
    }

    // server error
    return toast({
      variant: "destructive",
      title: "Something went wrong",
      description: res.message,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(formSubmitHandler)}
        className="w-80 space-y-7 rounded-xl border border-secondary px-7 py-7 font-extrabold shadow-md dark:border-secondary-dark dark:bg-primary-dark dark:shadow-none">
        <h1 className={cn("text-center text-2xl", notoSans.className)}>
          Sign Up
        </h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-normal text-gray-700 dark:text-gray-300">
                Name :{" "}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="name"
                  {...field}
                  className="h-11 border-secondary bg-white shadow-none dark:border-secondary-dark dark:bg-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-normal text-gray-700 dark:text-gray-300">
                Username :{" "}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="username"
                  {...field}
                  className="h-11 border-secondary bg-white shadow-none dark:border-secondary-dark dark:bg-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-normal text-gray-700 dark:text-gray-300">
                Password :{" "}
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  {...field}
                  className="h-11 border-secondary bg-white shadow-none dark:border-secondary-dark dark:bg-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-md font-normal text-gray-700 dark:text-gray-300">
                Confirm Password :{" "}
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="confirm password"
                  {...field}
                  className="h-11 border-secondary bg-white shadow-none dark:border-secondary-dark dark:bg-transparent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            type="submit"
            disabled={isLoading}
            className="h-10 w-full border border-secondary bg-primary-dark font-medium text-white shadow-none disabled:opacity-70 dark:border-secondary-dark">
            {isLoading ? <Loader /> : "Submit"}
          </Button>
          <p className="mt-3 text-center text-sm font-normal text-gray-700 dark:text-gray-300">
            Do you have an account?
            <Link
              className="font-medium text-black underline dark:text-white"
              href="./sign-in">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
export default SignUpForm;
