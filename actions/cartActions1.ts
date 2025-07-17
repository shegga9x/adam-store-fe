"use server";

import { fetchCartItemsApi } from "@/lib/data/cart";
import type { ActionResponse } from "@/lib/types/actions";
import { extractErrorMessage } from "@/lib/utils";
import { TCartItem } from "@/types";

/**
 * Fetch all cart items for the current user (paginated).
 */
export async function fetchCartItemsAction(page?: number, size?: number, sort?: string[]): Promise<ActionResponse<TCartItem[]>> {
  try {
    const items = await fetchCartItemsApi(page, size, sort);
    return { success: true, data: items };
  } catch (error) {
    const extracted = extractErrorMessage(error, "Failed to fetch cart items.");
    return { success: false, message: extracted.message, apiError: extracted };
  }
}
