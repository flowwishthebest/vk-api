import EEventType = Vk.EEventType;

namespace Vk {
    export enum EEventType {
        // TODO: Add more events
        // TODO: add event descriptions
        REPLACE_MESSAGE_FLAGS = 1,
        NEW_MESSAGE = 4,
        EDIT_MESSAGE = 5,


        /**
         * Install dialog flags $peer_id. Corresponds to the operation (PEER_FLAGS|= $flags).
         * An event is returned only for community messages.
         */
        INSTALL_DIALOG_FLAGS = 12,


        /**
         * Deletings all messages in $peer_id dialogs with IDs up to $local_id.
         */
        MESSAGES_DELETED = 13,


        /**
         * One of the parameters (content, topic) of the conversation $chat_id was changed.
         * $self — 1 or 0 (whether the change was caused by the user).
         */
        PARAMETR_CHANGED = 51,


        /**
         * User $user_id began typing in the dialog.
         * The event should happen once in ~5 seconds during continuous typing. $flags = 1.
         */
        TYPE_TO_DIALOG = 61,
        /**
         * User $user_id began typing in the conversation $chat_id.
         * extra
         * $user_id  (integer)
         * $chat_id (integer)
         */
        TYPE_TO_CONVERSATION = 62,

        /**
         * User $user_id completed a call with the ID $call_id.
         * extra
         * $user_id  (integer)
         * $call_id (integer)
         */
        COMPLETED_CALL = 70,

        /**
         * New unread messages counter in the left menu equals $count.
         */
        MESSAGE_COUNT_CHANGED = 80,

        /**
         * Notification settings changed where $peer_id is a chat/user’s ID, \
         * $sound is either 1 (sound notifications on) or 0 (sound notifications off), \
         * $disabled_until shows notifications disabled for a certain period \
         * (-1: forever, 0: enabled, other: timestamp for when it should be switched on).
         *
         * extra
         *  $peer_id  (integer)
         *  $sound  (integer)
         *  $disabled_until  (integer)
         */
        NOTIFICATION_SETTINGS_CHANGED = 114
    }

    export enum EMessageFlag {

        /**
         * Each message has a flag, which is a value received by summing up any of the following parameters.
         */

        /**
         * Message is unread
         */
        UNREAD = 2 ** 0,

        /**
         * Message is outgoing
         */
        OUTBOX = 2 ** 1,

        /**
         * Message was answered
         */
        REPLIED = 2 ** 2,

        /**
         * Message is marked as important
         */
        IMPORTANT = 2 ** 3,

        /**
         * 	Message sent via chat
         */
        CHAT = 2 ** 4,

        /**
         * Message sent by a friend
         */
        FRIENDS = 2 ** 5,

        /**
         * Message marked as "Spam"
         */
        SPAM = 2 ** 6,

        /**
         * Message was deleted
         */
        DELETED = 2 ** 7,

        /**
         * 	Message was user-checked for spam
         */
        FIXED = 2 ** 8,

        /**
         * Message has media content
         */
        MEDIA = 2 ** 9,

        /**
         * 	Greeting message from a community.
         * 	A dialog with such message should not be raisen in the list \
         * 	(show it only when a dialog has been opened directly).
         * 	Flag is unavailable for versions < 2.
         */
        HIDDEN = 2 ** 16,
    }

    export enum EDialogFlag {

        /**
         * Each dialog has flags, which are values received by summing up any of the following parameters.
         * Flags are set only for community dialogs. Flags are set only for community dialogs.
         */

        /**
         * 	Important dialog
         */
        IMPORTANT = 1,

        /**
         * Dialog without a community reply.
         * Note that for versions <2 flag is inverted and corresponds to an unanswered dialog.
         */
        UNANSWERED = 2
    }

    export enum EPlatformType {

        /**
         * If mode contains flag 64, then in messages with code 8 (friend is offline), \
         * extra data $extra will return in the third field.
         * From this you can get the platform ID $platform_id = $extra & 0xFF ( = $extra % 256), \
         * from which the user got online. This ID can be used, for example, \
         * to determine whether the online status was updated from a mobile device (IDs 1 - 5).
         */

        /**
         * Mobile website version or unidentified mobile app
         */
        MOBILE = 1,

        /**
         * Official app for iPhone
         */
        IPHONE = 2,

        /**
         * Official app for iPad
         */
        IPAD = 3,

        /**
         * android	Official app for Android
         */
        ANDROID = 4,

        /**
         * Official app for Windows Phone
         */
        WPHONE = 5,

        /**
         * Official app for Windows 8
         */
        WINDOWS = 6,

        /**
         * Full website version or unidentified apps
         */
        WEB = 7
    }
}

class VkLongPoll {

    constructor(
        private readonly _server: string,
        private readonly _key: string,
        private readonly _ts: string
    ) {}

    poll() {

    }

    *start() {
        while (true) {
            yield this.poll();
        }
    }
}

class VkLongPollServiceBuilder {
    private readonly _watchingEvents: EEventType[];

    constructor() {
        this._watchingEvents = [];
    }

    watchEvent(event: EEventType): this {
        if (this._watchingEvents.indexOf(event) === -1) {
            this._watchingEvents.push(event);
        }

        return this;
    }

    build(): any {
        return new VkLongPoll(
            '', '', ''
        );
    }
}

import * as got from 'got';

const params = {
    client_id: 1,
    redirect_uri: '',
    scope: '',
    v: 5,
};
const url = 'https://oauth.vk.com/authorize';
https://oauth.vk.com/authorize?client_id=6776587&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=messages&response_type=code&v=5.92
got(`https://oauth.vk.com/authorize?client_id=6776587&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=messages&response_type=code&v=5.92`, {method: 'GET'})
    .then((response) => {
        console.log(
            `GOT RESPONSE: ${JSON.stringify(response)}`
        );
    })
    .catch((err) => console.log(err));
