import * as got from 'got';
import {EVkApiErrorCodes, VkApiCommonException} from "../errors/vk-api-common.exception";
import {UserAuthorizationFailedException} from "../errors/user-authorization-failed.exception";

export class AbstractApiWrapper {
    protected _baseUrl;
    protected _accessToken;
    protected _apiVersion;


    protected async call<T>(methodName: string, params: object): Promise<T> {
        let result;

        try {
            const query = Object.assign({ access_token: this._accessToken, v: this._apiVersion }, params);
            result = await got(methodName, { baseUrl: this._baseUrl, query });
        } catch (err) {
            throw new Error('ERROR ON `GOT` REQUEST');
        }

        const {response, error} = JSON.parse(result.body);

        if (response) {
           return response;
        }

        const {error_code: errorCode, error_msg: errorMessage, request_params: errorParams} = error;

        switch (errorCode) {
            case EVkApiErrorCodes.USER_AUTHORIZATION_FAILED:
                throw new UserAuthorizationFailedException(errorMessage, errorParams);
            default:
                throw new VkApiCommonException(0, 'IDK WHATS WRONG', [], 'KYS');
        }
    }
}