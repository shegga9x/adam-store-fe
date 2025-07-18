import { CartItemControllerApi } from "@/api-client";
import { getAuthConfiguration } from "@/api-client/init-auth-config";
import type { CartItemResponse } from "@/api-client/models";
import { TCartItem } from "@/types";
import { fetchProductDetailByIdApi } from "./product";

/**
 * Helper to get an instance of CartItemControllerApi with auth config.
 */
function getCartItemController() {
    return new CartItemControllerApi(getAuthConfiguration());
}

/**
 * Transform API CartItemResponse to TCartItem.
 * Prevent infinite recursion by not calling fetchProductDetailByIdApi if already called.
 */
export async function transformCartItemResponseToTCartItem(apiCartItem: CartItemResponse, productOverride?: any): Promise<TCartItem> {
    const variant = apiCartItem.productVariantBasic;
    // Only fetch product if not provided (prevents recursion)
    const product = productOverride ?? (variant?.product?.id ? await fetchProductDetailByIdApi(variant.product.id) : null);

    return {
        id: apiCartItem.id?.toString() ?? "",
        quantity: apiCartItem.quantity ?? 0,
        // price: apiCartItem.price ?? 0,
        createdAt: new Date(), // Replace with actual date if available
        updatedAt: new Date(), // Replace with actual date if available
        color: variant?.color?.name ?? "",
        size: variant?.size?.id ?? 0,
        productId: product?.id?.toString() ?? "",
        Product: product,
        userId: "", // Replace with actual user ID if available from context
    };
}

/**
 * Fetch a cart item by its ID.
 */
export async function fetchCartItemByIdApi(id: number): Promise<TCartItem | null> {
    const api = getCartItemController();
    const response = await api.fetchById6({ id });
    const item = response.data.result;
    if (!item) return null;
    // Pass product to avoid recursion if already fetched
    const variant = item.productVariantBasic;
    const product = variant?.product ?? null;
    return transformCartItemResponseToTCartItem(item, product);
}

/**
 * Add a new cart item.
 */
export async function createCartItemApi(cartItemRequest: any): Promise<TCartItem | null> {
    const api = getCartItemController();
    const response = await api.create2(cartItemRequest);
    const item = response.data.result;
    if (!item) return null;
    return transformCartItemResponseToTCartItem(item);
}

/**
 * Update a cart item by its ID.
 */
export async function updateCartItemApi(id: number, cartItemUpdateRequest: any): Promise<TCartItem | null> {
    const api = getCartItemController();
    const response = await api.update2({ id, cartItemUpdateRequest });
    const item = response.data.result;
    if (!item) return null;
    return transformCartItemResponseToTCartItem(item);
}

/**
 * Delete a cart item by its ID.
 */
export async function deleteCartItemApi(id: number): Promise<boolean> {
    const api = getCartItemController();
    const response = await api.delete1({ id });
    return response.data.code === 0;
}
