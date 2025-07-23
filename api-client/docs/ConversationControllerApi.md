# ConversationControllerApi

All URIs are relative to *https://microservices.appf4.io.vn/adamstore*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createConversation**](#createconversation) | **POST** /v1/private/conversations/create | Create or retrieve a conversation|
|[**myConversations**](#myconversations) | **GET** /v1/private/conversations/my-conversations | Get conversations of current user|

# **createConversation**
> ApiResponseConversationResponse createConversation(conversationRequest)

API dùng để tạo mới một conversation nếu chưa tồn tại, hoặc lấy ra conversation đã tồn tại

### Example

```typescript
import {
    ConversationControllerApi,
    Configuration,
    ConversationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ConversationControllerApi(configuration);

let conversationRequest: ConversationRequest; //

const { status, data } = await apiInstance.createConversation(
    conversationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationRequest** | **ConversationRequest**|  | |


### Return type

**ApiResponseConversationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **myConversations**
> ApiResponseListConversationResponse myConversations()

Lấy danh sách các cuộc trò chuyện của người dùng hiện tại

### Example

```typescript
import {
    ConversationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConversationControllerApi(configuration);

const { status, data } = await apiInstance.myConversations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListConversationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

