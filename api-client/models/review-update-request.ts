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



/**
 * 
 * @export
 * @interface ReviewUpdateRequest
 */
export interface ReviewUpdateRequest {
    /**
     * 
     * @type {number}
     * @memberof ReviewUpdateRequest
     */
    'rating'?: number;
    /**
     * 
     * @type {string}
     * @memberof ReviewUpdateRequest
     */
    'comment'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReviewUpdateRequest
     */
    'imageUrls'?: Array<string>;
}

