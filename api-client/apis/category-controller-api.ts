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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ApiResponseCategoryResponse } from '../models';
// @ts-ignore
import type { ApiResponsePageResponseCategoryResponse } from '../models';
// @ts-ignore
import type { ApiResponsePageResponseProductResponse } from '../models';
// @ts-ignore
import type { ApiResponseVoid } from '../models';
// @ts-ignore
import type { CategoryRequest } from '../models';
/**
 * CategoryControllerApi - axios parameter creator
 * @export
 */
export const CategoryControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CategoryRequest} categoryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create8: async (categoryRequest: CategoryRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryRequest' is not null or undefined
            assertParamExists('create8', 'categoryRequest', categoryRequest)
            const localVarPath = `/v1/admin/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(categoryRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Soft Delete Category
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete10: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('delete10', 'id', id)
            const localVarPath = `/v1/admin/categories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Api này để lấy tất cả Categories (ACTIVE) cho User
         * @summary Fetch All Categories For User
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAll3: async (page?: number, size?: number, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/public/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Api này để lấy tất cả Categories (cả ACTIVE và INACTIVE) cho Admin
         * @summary Fetch All Categories For Admin
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllCategoriesForAdmin: async (page?: number, size?: number, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/admin/categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * API dùng để lấy danh sách products của category cho user
         * @summary Fetch All Products By Category For User
         * @param {number} categoryId 
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchProductByCategory: async (categoryId: number, page?: number, size?: number, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryId' is not null or undefined
            assertParamExists('fetchProductByCategory', 'categoryId', categoryId)
            const localVarPath = `/v1/public/categories/{categoryId}/products`
                .replace(`{${"categoryId"}}`, encodeURIComponent(String(categoryId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Restore Category
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restore4: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('restore4', 'id', id)
            const localVarPath = `/v1/admin/categories/{id}/restore`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {CategoryRequest} categoryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update7: async (id: number, categoryRequest: CategoryRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update7', 'id', id)
            // verify required parameter 'categoryRequest' is not null or undefined
            assertParamExists('update7', 'categoryRequest', categoryRequest)
            const localVarPath = `/v1/admin/categories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(categoryRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CategoryControllerApi - functional programming interface
 * @export
 */
export const CategoryControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CategoryControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CategoryRequest} categoryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create8(categoryRequest: CategoryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponseCategoryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create8(categoryRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryControllerApi.create8']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Soft Delete Category
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete10(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponseVoid>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete10(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryControllerApi.delete10']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Api này để lấy tất cả Categories (ACTIVE) cho User
         * @summary Fetch All Categories For User
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAll3(page?: number, size?: number, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponsePageResponseCategoryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAll3(page, size, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryControllerApi.fetchAll3']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Api này để lấy tất cả Categories (cả ACTIVE và INACTIVE) cho Admin
         * @summary Fetch All Categories For Admin
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAllCategoriesForAdmin(page?: number, size?: number, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponsePageResponseCategoryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAllCategoriesForAdmin(page, size, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryControllerApi.fetchAllCategoriesForAdmin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * API dùng để lấy danh sách products của category cho user
         * @summary Fetch All Products By Category For User
         * @param {number} categoryId 
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchProductByCategory(categoryId: number, page?: number, size?: number, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponsePageResponseProductResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchProductByCategory(categoryId, page, size, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryControllerApi.fetchProductByCategory']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Restore Category
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async restore4(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponseCategoryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restore4(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryControllerApi.restore4']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {CategoryRequest} categoryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update7(id: number, categoryRequest: CategoryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponseCategoryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update7(id, categoryRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoryControllerApi.update7']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CategoryControllerApi - factory interface
 * @export
 */
export const CategoryControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CategoryControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {CategoryControllerApiCreate8Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create8(requestParameters: CategoryControllerApiCreate8Request, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponseCategoryResponse> {
            return localVarFp.create8(requestParameters.categoryRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Soft Delete Category
         * @param {CategoryControllerApiDelete10Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete10(requestParameters: CategoryControllerApiDelete10Request, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponseVoid> {
            return localVarFp.delete10(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Api này để lấy tất cả Categories (ACTIVE) cho User
         * @summary Fetch All Categories For User
         * @param {CategoryControllerApiFetchAll3Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAll3(requestParameters: CategoryControllerApiFetchAll3Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponsePageResponseCategoryResponse> {
            return localVarFp.fetchAll3(requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Api này để lấy tất cả Categories (cả ACTIVE và INACTIVE) cho Admin
         * @summary Fetch All Categories For Admin
         * @param {CategoryControllerApiFetchAllCategoriesForAdminRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllCategoriesForAdmin(requestParameters: CategoryControllerApiFetchAllCategoriesForAdminRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponsePageResponseCategoryResponse> {
            return localVarFp.fetchAllCategoriesForAdmin(requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * API dùng để lấy danh sách products của category cho user
         * @summary Fetch All Products By Category For User
         * @param {CategoryControllerApiFetchProductByCategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchProductByCategory(requestParameters: CategoryControllerApiFetchProductByCategoryRequest, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponsePageResponseProductResponse> {
            return localVarFp.fetchProductByCategory(requestParameters.categoryId, requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Restore Category
         * @param {CategoryControllerApiRestore4Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restore4(requestParameters: CategoryControllerApiRestore4Request, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponseCategoryResponse> {
            return localVarFp.restore4(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CategoryControllerApiUpdate7Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update7(requestParameters: CategoryControllerApiUpdate7Request, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponseCategoryResponse> {
            return localVarFp.update7(requestParameters.id, requestParameters.categoryRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create8 operation in CategoryControllerApi.
 * @export
 * @interface CategoryControllerApiCreate8Request
 */
export interface CategoryControllerApiCreate8Request {
    /**
     * 
     * @type {CategoryRequest}
     * @memberof CategoryControllerApiCreate8
     */
    readonly categoryRequest: CategoryRequest
}

/**
 * Request parameters for delete10 operation in CategoryControllerApi.
 * @export
 * @interface CategoryControllerApiDelete10Request
 */
export interface CategoryControllerApiDelete10Request {
    /**
     * 
     * @type {number}
     * @memberof CategoryControllerApiDelete10
     */
    readonly id: number
}

/**
 * Request parameters for fetchAll3 operation in CategoryControllerApi.
 * @export
 * @interface CategoryControllerApiFetchAll3Request
 */
export interface CategoryControllerApiFetchAll3Request {
    /**
     * Zero-based page index (0..N)
     * @type {number}
     * @memberof CategoryControllerApiFetchAll3
     */
    readonly page?: number

    /**
     * The size of the page to be returned
     * @type {number}
     * @memberof CategoryControllerApiFetchAll3
     */
    readonly size?: number

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof CategoryControllerApiFetchAll3
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for fetchAllCategoriesForAdmin operation in CategoryControllerApi.
 * @export
 * @interface CategoryControllerApiFetchAllCategoriesForAdminRequest
 */
export interface CategoryControllerApiFetchAllCategoriesForAdminRequest {
    /**
     * Zero-based page index (0..N)
     * @type {number}
     * @memberof CategoryControllerApiFetchAllCategoriesForAdmin
     */
    readonly page?: number

    /**
     * The size of the page to be returned
     * @type {number}
     * @memberof CategoryControllerApiFetchAllCategoriesForAdmin
     */
    readonly size?: number

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof CategoryControllerApiFetchAllCategoriesForAdmin
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for fetchProductByCategory operation in CategoryControllerApi.
 * @export
 * @interface CategoryControllerApiFetchProductByCategoryRequest
 */
export interface CategoryControllerApiFetchProductByCategoryRequest {
    /**
     * 
     * @type {number}
     * @memberof CategoryControllerApiFetchProductByCategory
     */
    readonly categoryId: number

    /**
     * Zero-based page index (0..N)
     * @type {number}
     * @memberof CategoryControllerApiFetchProductByCategory
     */
    readonly page?: number

    /**
     * The size of the page to be returned
     * @type {number}
     * @memberof CategoryControllerApiFetchProductByCategory
     */
    readonly size?: number

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof CategoryControllerApiFetchProductByCategory
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for restore4 operation in CategoryControllerApi.
 * @export
 * @interface CategoryControllerApiRestore4Request
 */
export interface CategoryControllerApiRestore4Request {
    /**
     * 
     * @type {number}
     * @memberof CategoryControllerApiRestore4
     */
    readonly id: number
}

/**
 * Request parameters for update7 operation in CategoryControllerApi.
 * @export
 * @interface CategoryControllerApiUpdate7Request
 */
export interface CategoryControllerApiUpdate7Request {
    /**
     * 
     * @type {number}
     * @memberof CategoryControllerApiUpdate7
     */
    readonly id: number

    /**
     * 
     * @type {CategoryRequest}
     * @memberof CategoryControllerApiUpdate7
     */
    readonly categoryRequest: CategoryRequest
}

/**
 * CategoryControllerApi - object-oriented interface
 * @export
 * @class CategoryControllerApi
 * @extends {BaseAPI}
 */
export class CategoryControllerApi extends BaseAPI {
    /**
     * 
     * @param {CategoryControllerApiCreate8Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllerApi
     */
    public create8(requestParameters: CategoryControllerApiCreate8Request, options?: RawAxiosRequestConfig) {
        return CategoryControllerApiFp(this.configuration).create8(requestParameters.categoryRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Soft Delete Category
     * @param {CategoryControllerApiDelete10Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllerApi
     */
    public delete10(requestParameters: CategoryControllerApiDelete10Request, options?: RawAxiosRequestConfig) {
        return CategoryControllerApiFp(this.configuration).delete10(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Api này để lấy tất cả Categories (ACTIVE) cho User
     * @summary Fetch All Categories For User
     * @param {CategoryControllerApiFetchAll3Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllerApi
     */
    public fetchAll3(requestParameters: CategoryControllerApiFetchAll3Request = {}, options?: RawAxiosRequestConfig) {
        return CategoryControllerApiFp(this.configuration).fetchAll3(requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Api này để lấy tất cả Categories (cả ACTIVE và INACTIVE) cho Admin
     * @summary Fetch All Categories For Admin
     * @param {CategoryControllerApiFetchAllCategoriesForAdminRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllerApi
     */
    public fetchAllCategoriesForAdmin(requestParameters: CategoryControllerApiFetchAllCategoriesForAdminRequest = {}, options?: RawAxiosRequestConfig) {
        return CategoryControllerApiFp(this.configuration).fetchAllCategoriesForAdmin(requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * API dùng để lấy danh sách products của category cho user
     * @summary Fetch All Products By Category For User
     * @param {CategoryControllerApiFetchProductByCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllerApi
     */
    public fetchProductByCategory(requestParameters: CategoryControllerApiFetchProductByCategoryRequest, options?: RawAxiosRequestConfig) {
        return CategoryControllerApiFp(this.configuration).fetchProductByCategory(requestParameters.categoryId, requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Restore Category
     * @param {CategoryControllerApiRestore4Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllerApi
     */
    public restore4(requestParameters: CategoryControllerApiRestore4Request, options?: RawAxiosRequestConfig) {
        return CategoryControllerApiFp(this.configuration).restore4(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CategoryControllerApiUpdate7Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllerApi
     */
    public update7(requestParameters: CategoryControllerApiUpdate7Request, options?: RawAxiosRequestConfig) {
        return CategoryControllerApiFp(this.configuration).update7(requestParameters.id, requestParameters.categoryRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

