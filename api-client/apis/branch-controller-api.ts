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
import type { ApiResponseBranchResponse } from '../models';
// @ts-ignore
import type { ApiResponsePageResponseBranchResponse } from '../models';
// @ts-ignore
import type { ApiResponseVoid } from '../models';
// @ts-ignore
import type { BranchRequest } from '../models';
// @ts-ignore
import type { BranchUpdateRequest } from '../models';
/**
 * BranchControllerApi - axios parameter creator
 * @export
 */
export const BranchControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {BranchRequest} branchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create9: async (branchRequest: BranchRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'branchRequest' is not null or undefined
            assertParamExists('create9', 'branchRequest', branchRequest)
            const localVarPath = `/v1/admin/branches`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(branchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Api này để soft delete branch
         * @summary Soft Delete Branch
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete11: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('delete11', 'id', id)
            const localVarPath = `/v1/admin/branches/{id}`
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
         * API để lấy tất cả Branch (ACTIVE) cho user
         * @summary Fetch All Branches For User
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAll4: async (page?: number, size?: number, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/public/branches`;
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
         * API này để lấy tất cả Branch (cả ACTIVE và INACTIVE) cho admin quản lý
         * @summary Fetch All Branches For Admin
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllBranchesForAdmin: async (page?: number, size?: number, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/admin/branches`;
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
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchById: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('fetchById', 'id', id)
            const localVarPath = `/v1/public/branches/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Api này để khôi phục Branch
         * @summary Restore Branch
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restore5: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('restore5', 'id', id)
            const localVarPath = `/v1/admin/branches/{id}/restore`
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
         * @param {BranchUpdateRequest} branchUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update8: async (id: number, branchUpdateRequest: BranchUpdateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update8', 'id', id)
            // verify required parameter 'branchUpdateRequest' is not null or undefined
            assertParamExists('update8', 'branchUpdateRequest', branchUpdateRequest)
            const localVarPath = `/v1/admin/branches/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(branchUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BranchControllerApi - functional programming interface
 * @export
 */
export const BranchControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BranchControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {BranchRequest} branchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create9(branchRequest: BranchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponseBranchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create9(branchRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BranchControllerApi.create9']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Api này để soft delete branch
         * @summary Soft Delete Branch
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete11(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponseVoid>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete11(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BranchControllerApi.delete11']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * API để lấy tất cả Branch (ACTIVE) cho user
         * @summary Fetch All Branches For User
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAll4(page?: number, size?: number, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponsePageResponseBranchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAll4(page, size, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BranchControllerApi.fetchAll4']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * API này để lấy tất cả Branch (cả ACTIVE và INACTIVE) cho admin quản lý
         * @summary Fetch All Branches For Admin
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchAllBranchesForAdmin(page?: number, size?: number, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponsePageResponseBranchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchAllBranchesForAdmin(page, size, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BranchControllerApi.fetchAllBranchesForAdmin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchById(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponseBranchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BranchControllerApi.fetchById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Api này để khôi phục Branch
         * @summary Restore Branch
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async restore5(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponseBranchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restore5(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BranchControllerApi.restore5']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {BranchUpdateRequest} branchUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update8(id: number, branchUpdateRequest: BranchUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponseBranchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update8(id, branchUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BranchControllerApi.update8']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BranchControllerApi - factory interface
 * @export
 */
export const BranchControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BranchControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {BranchControllerApiCreate9Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create9(requestParameters: BranchControllerApiCreate9Request, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponseBranchResponse> {
            return localVarFp.create9(requestParameters.branchRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Api này để soft delete branch
         * @summary Soft Delete Branch
         * @param {BranchControllerApiDelete11Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete11(requestParameters: BranchControllerApiDelete11Request, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponseVoid> {
            return localVarFp.delete11(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * API để lấy tất cả Branch (ACTIVE) cho user
         * @summary Fetch All Branches For User
         * @param {BranchControllerApiFetchAll4Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAll4(requestParameters: BranchControllerApiFetchAll4Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponsePageResponseBranchResponse> {
            return localVarFp.fetchAll4(requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * API này để lấy tất cả Branch (cả ACTIVE và INACTIVE) cho admin quản lý
         * @summary Fetch All Branches For Admin
         * @param {BranchControllerApiFetchAllBranchesForAdminRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchAllBranchesForAdmin(requestParameters: BranchControllerApiFetchAllBranchesForAdminRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponsePageResponseBranchResponse> {
            return localVarFp.fetchAllBranchesForAdmin(requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {BranchControllerApiFetchByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchById(requestParameters: BranchControllerApiFetchByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponseBranchResponse> {
            return localVarFp.fetchById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Api này để khôi phục Branch
         * @summary Restore Branch
         * @param {BranchControllerApiRestore5Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restore5(requestParameters: BranchControllerApiRestore5Request, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponseBranchResponse> {
            return localVarFp.restore5(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {BranchControllerApiUpdate8Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update8(requestParameters: BranchControllerApiUpdate8Request, options?: RawAxiosRequestConfig): AxiosPromise<ApiResponseBranchResponse> {
            return localVarFp.update8(requestParameters.id, requestParameters.branchUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create9 operation in BranchControllerApi.
 * @export
 * @interface BranchControllerApiCreate9Request
 */
export interface BranchControllerApiCreate9Request {
    /**
     * 
     * @type {BranchRequest}
     * @memberof BranchControllerApiCreate9
     */
    readonly branchRequest: BranchRequest
}

/**
 * Request parameters for delete11 operation in BranchControllerApi.
 * @export
 * @interface BranchControllerApiDelete11Request
 */
export interface BranchControllerApiDelete11Request {
    /**
     * 
     * @type {number}
     * @memberof BranchControllerApiDelete11
     */
    readonly id: number
}

/**
 * Request parameters for fetchAll4 operation in BranchControllerApi.
 * @export
 * @interface BranchControllerApiFetchAll4Request
 */
export interface BranchControllerApiFetchAll4Request {
    /**
     * Zero-based page index (0..N)
     * @type {number}
     * @memberof BranchControllerApiFetchAll4
     */
    readonly page?: number

    /**
     * The size of the page to be returned
     * @type {number}
     * @memberof BranchControllerApiFetchAll4
     */
    readonly size?: number

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof BranchControllerApiFetchAll4
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for fetchAllBranchesForAdmin operation in BranchControllerApi.
 * @export
 * @interface BranchControllerApiFetchAllBranchesForAdminRequest
 */
export interface BranchControllerApiFetchAllBranchesForAdminRequest {
    /**
     * Zero-based page index (0..N)
     * @type {number}
     * @memberof BranchControllerApiFetchAllBranchesForAdmin
     */
    readonly page?: number

    /**
     * The size of the page to be returned
     * @type {number}
     * @memberof BranchControllerApiFetchAllBranchesForAdmin
     */
    readonly size?: number

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof BranchControllerApiFetchAllBranchesForAdmin
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for fetchById operation in BranchControllerApi.
 * @export
 * @interface BranchControllerApiFetchByIdRequest
 */
export interface BranchControllerApiFetchByIdRequest {
    /**
     * 
     * @type {number}
     * @memberof BranchControllerApiFetchById
     */
    readonly id: number
}

/**
 * Request parameters for restore5 operation in BranchControllerApi.
 * @export
 * @interface BranchControllerApiRestore5Request
 */
export interface BranchControllerApiRestore5Request {
    /**
     * 
     * @type {number}
     * @memberof BranchControllerApiRestore5
     */
    readonly id: number
}

/**
 * Request parameters for update8 operation in BranchControllerApi.
 * @export
 * @interface BranchControllerApiUpdate8Request
 */
export interface BranchControllerApiUpdate8Request {
    /**
     * 
     * @type {number}
     * @memberof BranchControllerApiUpdate8
     */
    readonly id: number

    /**
     * 
     * @type {BranchUpdateRequest}
     * @memberof BranchControllerApiUpdate8
     */
    readonly branchUpdateRequest: BranchUpdateRequest
}

/**
 * BranchControllerApi - object-oriented interface
 * @export
 * @class BranchControllerApi
 * @extends {BaseAPI}
 */
export class BranchControllerApi extends BaseAPI {
    /**
     * 
     * @param {BranchControllerApiCreate9Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BranchControllerApi
     */
    public create9(requestParameters: BranchControllerApiCreate9Request, options?: RawAxiosRequestConfig) {
        return BranchControllerApiFp(this.configuration).create9(requestParameters.branchRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Api này để soft delete branch
     * @summary Soft Delete Branch
     * @param {BranchControllerApiDelete11Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BranchControllerApi
     */
    public delete11(requestParameters: BranchControllerApiDelete11Request, options?: RawAxiosRequestConfig) {
        return BranchControllerApiFp(this.configuration).delete11(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * API để lấy tất cả Branch (ACTIVE) cho user
     * @summary Fetch All Branches For User
     * @param {BranchControllerApiFetchAll4Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BranchControllerApi
     */
    public fetchAll4(requestParameters: BranchControllerApiFetchAll4Request = {}, options?: RawAxiosRequestConfig) {
        return BranchControllerApiFp(this.configuration).fetchAll4(requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * API này để lấy tất cả Branch (cả ACTIVE và INACTIVE) cho admin quản lý
     * @summary Fetch All Branches For Admin
     * @param {BranchControllerApiFetchAllBranchesForAdminRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BranchControllerApi
     */
    public fetchAllBranchesForAdmin(requestParameters: BranchControllerApiFetchAllBranchesForAdminRequest = {}, options?: RawAxiosRequestConfig) {
        return BranchControllerApiFp(this.configuration).fetchAllBranchesForAdmin(requestParameters.page, requestParameters.size, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {BranchControllerApiFetchByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BranchControllerApi
     */
    public fetchById(requestParameters: BranchControllerApiFetchByIdRequest, options?: RawAxiosRequestConfig) {
        return BranchControllerApiFp(this.configuration).fetchById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Api này để khôi phục Branch
     * @summary Restore Branch
     * @param {BranchControllerApiRestore5Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BranchControllerApi
     */
    public restore5(requestParameters: BranchControllerApiRestore5Request, options?: RawAxiosRequestConfig) {
        return BranchControllerApiFp(this.configuration).restore5(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {BranchControllerApiUpdate8Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BranchControllerApi
     */
    public update8(requestParameters: BranchControllerApiUpdate8Request, options?: RawAxiosRequestConfig) {
        return BranchControllerApiFp(this.configuration).update8(requestParameters.id, requestParameters.branchUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

