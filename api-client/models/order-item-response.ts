/* tslint:disable */
/* eslint-disable */
/**
 * Spring-Adam-Store
 * Api Service
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ImageBasic } from './image-basic';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductVariantBasic } from './product-variant-basic';

/**
 * 
 * @export
 * @interface OrderItemResponse
 */
export interface OrderItemResponse {
    /**
     * 
     * @type {number}
     * @memberof OrderItemResponse
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderItemResponse
     */
    'unitPrice'?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderItemResponse
     */
    'quantity'?: number;
    /**
     * 
     * @type {ImageBasic}
     * @memberof OrderItemResponse
     */
    'image'?: ImageBasic;
    /**
     * 
     * @type {ProductVariantBasic}
     * @memberof OrderItemResponse
     */
    'productVariant'?: ProductVariantBasic;
}

