export enum ELongPullMode {
    'RECEIVE_ATTACHMENTS' = 2,
    'RECEIVE_EXTENDED_EVENT_SET' = 8,
    'RECEIVE_PTS' = 32,
    'RECEIVE_EXTRA_FIELDS' = 64,
    'RECEIVE_RANDOM_ID' = 128
}

export interface ILongPollServerConstructor {
    readonly server: string;
    readonly key: string;
    readonly ts: string;
    readonly wait?: number;
    readonly act?: string;
    readonly mode?: number;
    readonly version?: number;
}
