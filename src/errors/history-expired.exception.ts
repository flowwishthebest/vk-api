import {VkApiCommonException} from "./vk-api-common.exception";

export class HistoryExpiredException extends VkApiCommonException {
    constructor(
        private readonly response: any,
        private readonly code: number,
    ) {
        super(
            response,
            1,
            response,
            'Your history expired. You need to get new event update info use ts from this error'
        );
    }
}