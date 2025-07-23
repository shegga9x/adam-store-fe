import { OrderControllerApi, OrderControllerApiCalculateShippingFeeRequest, OrderControllerApiCreate1Request, OrderControllerApiPayCallbackHandlerRequest, OrderControllerApiUpdateAddressRequest } from "@/api-client"; // Adjust path as needed
import { getAuthConfiguration } from "@/api-client/init-auth-config"; // Adjust path as needed
import type {
    OrderResponse,
    OrderItemResponse,
    ProductVariantBasic,
    // Import all necessary request and response types from your API client
    ApiResponseShippingFeeResponse,
    ApiResponseOrderResponse,
    // Assuming these are also generated or available
    // RawAxiosRequestConfig // You might need this if using axios directly
} from "@/api-client/models"; // Adjust path as needed for models
import { fetchProductDetailByIdApi } from "../product";
import { ORDER_STATUS } from "@/enums";
import { TOrderItem, TOrder } from "@/types";
import type { ApiResponseVNPayResponse } from "@/api-client/models"; // Add this import if not already present

// Assuming you have a product fetching function

/**
 * Helper to get an instance of OrderControllerApi with auth config.
 */
function getOrderController() {
    return new OrderControllerApi(getAuthConfiguration());
}






/**
 * Transforms API ProductVariantBasic to a simplified product object for TOrderItem.
 * This function likely needs to fetch full product details.
 */
async function transformProductVariantBasicToProduct(variant: ProductVariantBasic): Promise<TOrderItem['Product']> {
    const productId = variant?.product?.id ?? 0;
    const productDetail = await fetchProductDetailByIdApi(productId); // Fetches a more detailed product

    return {
        id: productDetail?.id?.toString() ?? "",
        title: productDetail?.title ?? "Unknown Product",
        price: productDetail?.price?.toString() ?? "0",
        description: productDetail?.description ?? "",
        colors: productDetail?.colors ?? [],
        sizes: productDetail?.sizes ?? [],
        quantity: productDetail?.quantity ?? 0,
        mainImage: productDetail?.mainImage ?? "",
        images: productDetail?.images ?? [],
        gender: productDetail?.gender ?? "",
        categoryId: productDetail?.categoryId?.toString?.() ?? "",
        createdAt: productDetail?.createdAt ? new Date(productDetail.createdAt) : new Date(0),
        updatedAt: productDetail?.updatedAt ? new Date(productDetail.updatedAt) : new Date(0),
    };
}

/**
 * Transforms API OrderItemResponse to TOrderItem.
 */
export async function transformOrderItemResponseToTOrderItem(apiOrderItem: OrderItemResponse): Promise<TOrderItem> {
    const productVariant = apiOrderItem.productVariant;
    const productData = productVariant ? await transformProductVariantBasicToProduct(productVariant) : null;

    return {
        id: apiOrderItem.id?.toString() ?? "",
        orderId: "", // This will be set when transforming the full order
        quantity: apiOrderItem.quantity ?? 0,
        // unitPrice: apiOrderItem.unitPrice ?? 0,
        color: productVariant?.color?.name ?? "N/A",
        size: productVariant?.size?.id ?? 0,
        productId: productData?.id ?? "",
        Product: productData || {
            id: "",
            title: "N/A",
            price: "0",
            description: "",
            colors: [],
            sizes: [],
            quantity: 0,
            mainImage: "",
            images: [],
            gender: "",
            categoryId: "",
            createdAt: new Date(0),
            updatedAt: new Date(0),
        },
    };
}

/**
 * Transforms API OrderResponse to TOrder.
 */
export async function transformOrderResponseToTOrder(apiOrder: OrderResponse): Promise<TOrder> {
    const orderItemsPromises = (apiOrder.orderItems ?? []).map(transformOrderItemResponseToTOrderItem);
    const transformedOrderItems = await Promise.all(orderItemsPromises);

    // Update orderId for each item after transformation
    transformedOrderItems.forEach(item => {
        item.orderId = apiOrder.id?.toString() ?? "";
    });

    const address = apiOrder.address;

    return {
        OrderItems: transformedOrderItems,
        id: apiOrder.id?.toString() ?? "",
        createdAt: apiOrder.orderDate ? new Date(apiOrder.orderDate) : new Date(),
        updatedAt: apiOrder.orderDate ? new Date(apiOrder.orderDate) : new Date(),
        status: apiOrder.orderStatus ? (apiOrder.orderStatus as unknown as ORDER_STATUS) : ORDER_STATUS.PROGRESS, // Cast to your enum, provide default
        // customerName: apiOrder.customerName ?? "Guest",
        address: [
            address?.streetDetail,
            address?.ward?.name,
            address?.district?.name,
            address?.province?.name
        ].filter(Boolean).join(", "),
        totalPrice: (apiOrder.totalPrice?.toString() ?? "0"),
        userId: "", // Populate from auth context or API if available
    };
}

/**
 * Calculate Shipping Fee for an order.
 */
export async function calculateShippingFeeApi(
    request: OrderControllerApiCalculateShippingFeeRequest
): Promise<ApiResponseShippingFeeResponse> {
    const api = getOrderController();
    const response = await api.calculateShippingFee(request);
    return response.data;
}

/**
 * Cancel an order by ID.
 */
export async function cancelOrderApi(orderId: number): Promise<void> {
    const api = getOrderController();
    await api.cancelOrder({ orderId });
}

/**
 * Create a new order.
 */
export async function createOrderApi(
    request: OrderControllerApiCreate1Request
): Promise<TOrder> {
    const api = getOrderController();
    const response = await api.create1(request);
    if (response.data.result) {
        return transformOrderResponseToTOrder(response.data.result);
    }
    throw new Error(response.data.message || "Failed to create order");
}

/**
 * Admin: Delete an order by ID.
 */
export async function deleteOrderForAdminApi(id: number): Promise<void> {
    const api = getOrderController();
    await api.delete7({ id });
}

/**
 * Fetch all orders (typically for admin) with pagination.
 */
export async function fetchAllOrdersApi(
    page?: number,
    size?: number,
    sort?: string[]
): Promise<TOrder[]> {
    const api = getOrderController();
    const response = await api.fetchAll11({ page, size, sort });
    const items = response.data.result?.items ?? [];
    return Promise.all(items.map(transformOrderResponseToTOrder));
}

/**
 * Fetch a single order detail by ID.
 */
export async function fetchOrderDetailByIdApi(id: number): Promise<TOrder | null> {
    const api = getOrderController();
    const response = await api.fetchDetailById1({ id });
    if (response.data.result) {
        return transformOrderResponseToTOrder(response.data.result);
    }
    return null;
}

/**
 * Initiate payment for an order.
 */

export async function payForOrderApi(orderId: number): Promise<ApiResponseVNPayResponse> {
    const api = getOrderController();
    const response = await api.pay({ orderId });
    return response.data;
}

/**
 * Handle payment callback.
 */
export async function paymentCallbackHandlerApi(
    request: OrderControllerApiPayCallbackHandlerRequest
): Promise<ApiResponseOrderResponse> {
    const api = getOrderController();
    const response = await api.payCallbackHandler(request);
    return response.data;
}

/**
 * Retry payment for an order.
 */
export async function retryPaymentApi(orderId: number): Promise<ApiResponseVNPayResponse> {
    const api = getOrderController();
    const response = await api.retryPayment({ orderId });
    return response.data;
}

/**
 * Search orders for current user or admin with pagination and search query.
 */
export async function searchOrdersApi(
    page?: number,
    size?: number,
    sort?: string[],
    search?: string[]
): Promise<TOrder[]> {
    const api = getOrderController();
    const response = await api.searchOrder({ page, size, sort, search });
    const items = response.data.result?.items ?? [];
    return Promise.all(items.map(transformOrderResponseToTOrder));
}

/**
 * Update shipping address for an order.
 */
export async function updateOrderAddressApi(
    orderId: number,
    addressRequest: OrderControllerApiUpdateAddressRequest['orderAddressRequest']
): Promise<TOrder> {
    const api = getOrderController();
    const response = await api.updateAddress({ orderId, orderAddressRequest: addressRequest });
    if (response.data.result) {
        return transformOrderResponseToTOrder(response.data.result);
    }
    throw new Error(response.data.message || "Failed to update order address");
}