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
import type { DistrictResponse } from './district-response';

/**
 * 
 * @export
 * @interface PageResponseDistrictResponse
 */
export interface PageResponseDistrictResponse {
    /**
     * 
     * @type {number}
     * @memberof PageResponseDistrictResponse
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageResponseDistrictResponse
     */
    'size'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageResponseDistrictResponse
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageResponseDistrictResponse
     */
    'totalItems'?: number;
    /**
     * 
     * @type {Array<DistrictResponse>}
     * @memberof PageResponseDistrictResponse
     */
    'items'?: Array<DistrictResponse>;
}

