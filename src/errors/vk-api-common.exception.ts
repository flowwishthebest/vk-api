export class VkApiCommonException extends Error {
    public readonly message: any;

    constructor(
        private readonly response: string | object,
        private readonly code: any,
        private readonly data: any,
        private readonly recommendation?: string
    ) {
        super();
        this.message = response;
    }
}