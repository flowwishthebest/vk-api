import {EVkApiErrorCodes, VkApiCommonException} from "./vk-api-common.exception";

export class UserAuthorizationFailedException extends VkApiCommonException {
    constructor(errorMessage: string, errorRequestParams: object) {
        super(EVkApiErrorCodes.USER_AUTHORIZATION_FAILED, errorMessage, errorRequestParams);
    }
}