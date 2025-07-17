"use server";

import {
  createCategoryApi,
  updateCategoryApi,
  deleteCategoryApi,
  restoreCategoryApi,
  fetchAllCategoriesApi,
  fetchAllCategoriesForAdminApi,
} from "@/lib/data/category";
import type { TCategory } from "@/types";
import type { ActionResponse } from "@/lib/types/actions";
import { extractErrorMessage } from "@/lib/utils";

// Import schemas from new schema file
import { categorySchema, categoryUpdateSchema } from './schema/categorySchema';

// --- Actions ---

/**
 * Create a new category (admin).
 */
export async function createCategoryAction(data: any): Promise<ActionResponse<TCategory>> {
  const validated = categorySchema.safeParse(data);
  if (!validated.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await createCategoryApi(validated.data);
    return { success: true, message: "Category created successfully.", data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to create category.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}

/**
 * Update a category (admin).
 */
export async function updateCategoryAction(id: number, data: any): Promise<ActionResponse<TCategory>> {
  const validated = categoryUpdateSchema.safeParse(data);
  if (!validated.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await updateCategoryApi(id, validated.data);
    return { success: true, message: "Category updated successfully.", data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to update category.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}

/**
 * Soft delete a category.
 */
export async function deleteCategoryAction(id: number): Promise<ActionResponse<TCategory>> {
  try {
    const res = await deleteCategoryApi(id);
    return { success: true, message: "Category deleted successfully.", data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to delete category.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}

/**
 * Restore a soft-deleted category.
 */
export async function restoreCategoryAction(id: number): Promise<ActionResponse<TCategory>> {
  try {
    const res = await restoreCategoryApi(id);
    return { success: true, message: "Category restored successfully.", data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to restore category.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}

/**
 * Fetch all categories (public).
 */
export async function fetchAllCategoriesAction(page?: number, size?: number, sort?: string[]) {
  try {
    const res = await fetchAllCategoriesApi(page, size, sort);
    return { success: true, data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to fetch categories.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}

/**
 * Fetch all categories for admin.
 */
export async function fetchAllCategoriesForAdminAction(page?: number, size?: number, sort?: string[]) {
  try {
    const res = await fetchAllCategoriesForAdminApi(page, size, sort);
    return { success: true, data: res };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to fetch admin categories.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}
