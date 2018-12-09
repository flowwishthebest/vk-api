import { ILongPollServerConstructor } from "./interfaces/vk-api-user-long-pull.interface";

export class LongPollServer {

    private readonly DEFAULT_WAIT: number = 25;
    private readonly DEFAULT_ACT: string = 'a_check';
    private readonly DEFAULT_MODE: number = 2;
    private readonly DEFAULT_VERSION: number = 2;

    private asd: string = `https://{$server}?act=a_check&key={$key}&ts={$ts}&wait=25&mode=2&version=2`;

    private _server: string;
    private _key: string;
    private _ts: string;
    private _wait: number;
    private _act: string;
    private _mode: number;
    private _version: number;

    constructor(options: ILongPollServerConstructor) {
        this._server = options.server;
        this._key = options.key;
        this._ts = options.ts;
        this._wait = options.wait || this.DEFAULT_WAIT;
        this._act = options.act || this.DEFAULT_ACT;
        this._mode = options.mode || this.DEFAULT_MODE;
        this._version = options.version || this.DEFAULT_VERSION;
    }

    public async start(): Promise<any> {

    }
}