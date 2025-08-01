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
import type { VariantRequest } from './variant-request';

/**
 * 
 * @export
 * @interface ProductRequest
 */
export interface ProductRequest {
    /**
     * 
     * @type {string}
     * @memberof ProductRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ProductRequest
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof ProductRequest
     */
    'categoryId': number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ProductRequest
     */
    'imageIds': Array<number>;
    /**
     * 
     * @type {Array<VariantRequest>}
     * @memberof ProductRequest
     */
    'variants': Array<VariantRequest>;
}

