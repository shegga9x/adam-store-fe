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
import type { ProductVariantResponse } from './product-variant-response';

/**
 * 
 * @export
 * @interface ProductResponse
 */
export interface ProductResponse {
    /**
     * 
     * @type {number}
     * @memberof ProductResponse
     */
    'id'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ProductResponse
     */
    'isAvailable'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductResponse
     */
    'averageRating'?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductResponse
     */
    'soldQuantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductResponse
     */
    'totalReviews'?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    'status'?: ProductResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ProductResponse
     */
    'createdAt'?: string;
    /**
     * 
     * @type {Array<ImageBasic>}
     * @memberof ProductResponse
     */
    'images'?: Array<ImageBasic>;
    /**
     * 
     * @type {Array<ProductVariantResponse>}
     * @memberof ProductResponse
     */
    'variants'?: Array<ProductVariantResponse>;
}

export const ProductResponseStatusEnum = {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE'
} as const;

export type ProductResponseStatusEnum = typeof ProductResponseStatusEnum[keyof typeof ProductResponseStatusEnum];


