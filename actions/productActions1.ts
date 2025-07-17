"use server";

import {
  createProductApi,
  updateProductApi,
  deleteProductApi,
  fetchAllProductsApi,
  fetchProductDetailByIdApi,
} from "@/lib/data/product";
import type { ActionResponse } from "@/lib/types/actions";
import type { ProductRequest, ProductUpdateRequest, ProductResponse } from "@/api-client/models";
import { extractErrorMessage } from "@/lib/utils";
import type { TProduct } from "@/types";
import {
  productVariantSchema,
  productCreateSchema,
  productUpdateSchema,
} from "@/actions/schema/productSchema";

// --- Actions ---

/**
 * Create a new product (admin).
 */
export async function createProductAction(data: ProductRequest): Promise<ActionResponse<TProduct>> {
  const validated = productCreateSchema.safeParse(data);
  if (!validated.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validated.error.flatten().fieldErrors,
    };
  }
  try {
    const res = await createProductApi(validated.data);
    return { success: true, message: "Product created successfully.", data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to create product.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}

/**
 * Update a product (admin).
 */
export async function updateProductAction(id: number, data: ProductUpdateRequest): Promise<ActionResponse<TProduct>> {
  const validated = productUpdateSchema.safeParse(data);
  if (!validated.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validated.error.flatten().fieldErrors,
    };
  }
  try {
    const res = await updateProductApi(id, validated.data);
    return { success: true, message: "Product updated successfully.", data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to update product.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}

/**
 * Delete a product (admin, soft delete).
 */
export async function deleteProductAction(id: number): Promise<ActionResponse<TProduct>> {
  try {
    const res = await deleteProductApi(id);
    return { success: true, message: "Product deleted successfully.", data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to delete product.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}

/**
 * Fetch all products (public).
 */
export async function fetchAllProductsAction(page?: number, size?: number, sort?: string[]) {
  try {
    const res = await fetchAllProductsApi(page, size, sort);
    return { success: true, data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to fetch products.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}

/**
 * Fetch product detail by id (public).
 */
export async function fetchProductDetailByIdAction(id: number) {
  try {
    const res = await fetchProductDetailByIdApi(id);
    return { success: true, data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to fetch product detail.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}