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
import type { RevenueByMonthDTO } from './revenue-by-month-dto';

/**
 * 
 * @export
 * @interface ApiResponseListRevenueByMonthDTO
 */
export interface ApiResponseListRevenueByMonthDTO {
    /**
     * 
     * @type {number}
     * @memberof ApiResponseListRevenueByMonthDTO
     */
    'code'?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiResponseListRevenueByMonthDTO
     */
    'message'?: string;
    /**
     * 
     * @type {Array<RevenueByMonthDTO>}
     * @memberof ApiResponseListRevenueByMonthDTO
     */
    'result'?: Array<RevenueByMonthDTO>;
}

