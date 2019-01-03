import * as got from 'got';

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const apiVersion = process.env.API_VERSION;

got(`https://oauth.vk.com/access_token?` +
    `client_id=${clientId}&` +
    `client_secret=${clientSecret}&` +
    `v=${apiVersion}&` +
    `grant_type=client_credentials`,
    { method: 'GET', json: true}
)
    .then((res) => {
        console.log(
                `RESPONSE: ${JSON.stringify(res.body)}`
        );
    })
    .catch((err) => console.log(err));

async function main(): Promise<void> {

    class ApiRequest {
        constructor() {}
    }

    class ApiRequestBuilder {
        private _url: string = null;

        constructor() {}

        setUrl(url: string): ApiRequestBuilder {
            this._url = url;

            return this;
        }

        build(): ApiRequest {
            return new ApiRequest();
        }
    }

    class VkApi {

        constructor(private readonly _accessToken: string) {}

        public async getLongPollServer(): Promise<{}> {
            const request = new ApiRequestBuilder().setUrl(``).build();

            return await VkApi._make(request);
        }

        public static async _make<T>(request: ApiRequest): Promise<T> {
            return;
        }
    }

    abstract class VkEvent {}

    enum VkEventType {
        NEW_MESSAGE = 4
    }

    class VkMessageEvent extends VkEvent {
        constructor(private readonly _raw: any) { super(); }
    }

    class VkEventFactory {
        constructor() {}

        create(eventType: VkEventType, raw: any): VkEvent {
            switch (eventType) {
                case VkEventType.NEW_MESSAGE: {
                   return new VkMessageEvent(raw);
                }
            }
        }
    }

    class VkLongPoll {

        constructor(
            private readonly _vkApi: any,
            private readonly _groupId: number
        ) {}

        private async _poll(): Promise<VkEvent[]> {
            const { failture, events } = await this._vkApi.make();

            if (!failture) {
                return events.map((rawEvent) => new VkEventFactory().create(rawEvent.type, rawEvent));
            } else {
                switch (failture.code) {

                }
            }
        }

        public async * start(): any {
            while (true) {
               yield this._poll();
            }
        }
    }

    const vkLongPoll = new VkLongPoll(
        new VkApi(process.env.TOKEN),
        +process.env.GROUP_ID
    );

    for (let events of vkLongPoll.start()) {
        console.log(JSON.stringify(events));
    }
}