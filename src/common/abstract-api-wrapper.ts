import * as got from 'got';

export class AbstractApiWrapper {
    protected _baseUrl = '';

    protected async call(methodName: string, params: object): Promise<any> {
        let vkResponse;

        try {
            vkResponse = await got(
                methodName.endsWith('/') ? methodName : this.append(methodName, '/'),
                {
                    baseUrl: this._baseUrl,
                    query: Object.assign({
                        access_token: this._accessToken,
                        v: this._apiVersion
                    }, this.keysToSnakeCase(params))
                }
            );
        } catch (err) {
            throw new Error('ERROR ON `GOT` REQUEST');
        }

        const {response, error} = vkResponse;

        if (response) {
           return response;
        }

        throw new Error(error);
    }
}