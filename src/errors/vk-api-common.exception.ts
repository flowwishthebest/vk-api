export enum EVkApiErrorCodes {
    USER_AUTHORIZATION_FAILED = 5
}

export class VkApiCommonException extends Error {
    protected readonly code = EVkApiErrorCodes.USER_AUTHORIZATION_FAILED;

    constructor(
        private readonly errorCode: number,
        private readonly errorMessage: string,
        private readonly requestParams: object,
        private readonly recommendation?: string
    ) {
        super(errorMessage);
    }

    get getErrorCode() {
        return this.errorCode
    }

    get getErrorMessage() {
        return this.errorMessage;
    }
}