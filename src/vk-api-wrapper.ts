import { AbstractApiWrapper } from "./common/abstract-api-wrapper";
import {
    VkApiWrapperConstructor,
    IGetLongPollServerOptions,
    IGetLongPollServerResponse,
    EVkApiMethod
} from "./interfaces/vk-api-wrapper.interface";

const { m_getLongPollServer, g_getLongPollServer } = EVkApiMethod;

export class VkApiWrapper extends AbstractApiWrapper{

    protected readonly _baseUrl: string = `https://api.vk.com/method/`;

    private readonly _accessToken: string;
    private readonly _apiVersion: number;

    constructor(params: VkApiWrapperConstructor) {
        super();

        this._accessToken = params.accessToken;
        this._apiVersion = params.apiVersion;
    }

    public async getLongPollServerUser(params: IGetLongPollServerOptions): Promise<IGetLongPollServerResponse> {
        return await this.call(m_getLongPollServer, params);
    }

    public async getLongPollServerBot(params: IGetLongPollServerOptions): Promise<IGetLongPollServerResponse> {
        return await this.call(g_getLongPollServer, params);
    }
}