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
 * @interface AddressRequest
 */
export interface AddressRequest {
    /**
     * 
     * @type {boolean}
     * @memberof AddressRequest
     */
    'isDefault': boolean;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    'phone': string;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    'streetDetail': string;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    'wardCode': string;
    /**
     * 
     * @type {number}
     * @memberof AddressRequest
     */
    'districtId': number;
    /**
     * 
     * @type {number}
     * @memberof AddressRequest
     */
    'provinceId': number;
}

