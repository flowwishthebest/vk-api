import { VkApiWrapper } from "./vk-api-wrapper";

async function run() {
    const api = new VkApiWrapper({accessToken: '', apiVersion: 5.92});

    const longPollServer = await api.getLongPollServerUser({
        groupId: 1,
        lpVersion: 3,
        needPts: false
    });
}

run()
    .then(() => {
        console.log(`OK`);
    })
    .catch((err) => {
        console.log(err);
    });

