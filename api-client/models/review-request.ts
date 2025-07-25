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
 * @interface ReviewRequest
 */
export interface ReviewRequest {
    /**
     * 
     * @type {number}
     * @memberof ReviewRequest
     */
    'rating': number;
    /**
     * 
     * @type {string}
     * @memberof ReviewRequest
     */
    'comment': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReviewRequest
     */
    'imageUrls'?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ReviewRequest
     */
    'productId': number;
}

