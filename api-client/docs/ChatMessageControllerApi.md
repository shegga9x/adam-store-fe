# ChatMessageControllerApi

All URIs are relative to *http://localhost:8080/adamstore*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMessages**](#getmessages) | **GET** /v1/private/messages | Fetch all messages for conversationId|

# **getMessages**
> ApiResponseListChatMessageResponse getMessages()

Lấy danh sách tin nhắn  trong một cuộc trò chuyện

### Example

```typescript
import {
    ChatMessageControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatMessageControllerApi(configuration);

let conversationId: string; // (default to undefined)

const { status, data } = await apiInstance.getMessages(
    conversationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListChatMessageResponse**

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

