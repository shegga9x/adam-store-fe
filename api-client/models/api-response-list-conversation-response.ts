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
import type { ConversationResponse } from './conversation-response';

/**
 * 
 * @export
 * @interface ApiResponseListConversationResponse
 */
export interface ApiResponseListConversationResponse {
    /**
     * 
     * @type {number}
     * @memberof ApiResponseListConversationResponse
     */
    'code'?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiResponseListConversationResponse
     */
    'message'?: string;
    /**
     * 
     * @type {Array<ConversationResponse>}
     * @memberof ApiResponseListConversationResponse
     */
    'result'?: Array<ConversationResponse>;
}

