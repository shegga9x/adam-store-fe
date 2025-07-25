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
 * @interface UserUpdateRequest
 */
export interface UserUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    'dob': string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequest
     */
    'gender': UserUpdateRequestGenderEnum;
    /**
     * 
     * @type {Set<number>}
     * @memberof UserUpdateRequest
     */
    'roleIds'?: Set<number>;
}

export const UserUpdateRequestGenderEnum = {
    Female: 'FEMALE',
    Male: 'MALE',
    Other: 'OTHER'
} as const;

export type UserUpdateRequestGenderEnum = typeof UserUpdateRequestGenderEnum[keyof typeof UserUpdateRequestGenderEnum];


