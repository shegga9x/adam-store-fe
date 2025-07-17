import { CartControllerApi } from "@/api-client";
import { getAuthConfiguration } from "@/api-client/init-auth-config";
import type { CartItemResponse } from "@/api-client/models";
import { TCartItem } from "@/types";

// Define your app's cart item type


/**
 * Helper to get an instance of CartControllerApi with auth config.
 */
function getCartController() {
    return new CartControllerApi(getAuthConfiguration());
}

/**
 * Transform API CartItemResponse to TCartItem.
 */

export function transformCartItemResponseToTCartItem(apiCartItem: CartItemResponse): TCartItem {
    const variant = apiCartItem.productVariantBasic;
    const product = variant?.product;

    return {
        id: apiCartItem.id?.toString() ?? "",
        quantity: apiCartItem.quantity ?? 0,
        // price: apiCartItem.price ?? 0,
        createdAt: new Date(), // Replace with actual date if available
        updatedAt: new Date(), // Replace with actual date if available
        color: variant?.color?.name ?? "",
        size: variant?.size?.id ?? 0, // Assuming size is represented by ID
        productId: product?.id?.toString() ?? "",
        Product: {
            id: variant?.product?.id?.toString() ?? "",
            title: variant?.product?.name ?? "",
            price: apiCartItem.price + "", // Placeholder, replace if available in another response
            description: "",
            colors: [],
            sizes: [],
            quantity: 0,
            mainImage: "",
            images: [],
            gender: "",
            sales: null,
            categoryId: "",
            createdAt: new Date(),
            updatedAt: new Date(),
            Category: {
                id: "",
                title: "",
                image: ""
            },
        },

        userId: "", // Replace with actual user ID if available from context
    };
}



/**
 * Fetch all cart items for current user (paginated).
 */
export async function fetchCartItemsApi(page?: number, size?: number, sort?: string[]): Promise<TCartItem[]> {
    const api = getCartController();
    const response = await api.getCartItemsOfCurrentUser({ page, size, sort });
    // You may want to check response.data.code if your API uses it
    const items = response.data.result?.items ?? [];
    return items.map(transformCartItemResponseToTCartItem);
}
