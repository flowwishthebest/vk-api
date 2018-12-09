export enum EVkApiMethod {
    m_getLongPollServer = 'messages.getLongPollServer',
    g_getLongPollServer = 'groups.getLongPollServer'
}

export interface IGetLongPollServerOptions {
    readonly needPts: boolean;
    readonly groupId: number;
    readonly lpVersion: number;
}

export interface IGetLongPollServerResponse {
    readonly ts: string;
    readonly server: string;
    readonly key: string;
}

export interface VkApiWrapperConstructor {
    readonly accessToken: string;
    readonly apiVersion: number;
}
