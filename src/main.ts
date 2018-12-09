import { VkApiWrapper } from "./vk-api-wrapper";
import {LongPollServer} from "./long-poll-server";

const api = new VkApiWrapper({
    accessToken: '',
    apiVersion: 5.92
});

async function run() {
    const api = new VkApiWrapper({
        accessToken: '',
        apiVersion: 5.92
    });

    const longPollServer = await api.getLongPollServer({
        groupId: 1,
        lpVersion: 3,
        needPts: false
    });

    const { server, ts, key } = longPollServer;

    const myLongPollServer = new LongPollServer({ server, key, ts });
}

const gotIt = api.getLongPollServer({ groupId: 1, lpVersion: 3, needPts: false });
