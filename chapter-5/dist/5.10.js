"use strict";
const chapter5_10 = () => {
    //クラスの拡張やメソッドのオーバーライドを制限する
    class MessageQueue {
        constructor(messages) {
            this.messages = messages;
        }
    }
    class BadQueue extends MessageQueue {
    } //クラスの拡張を制限できている
    new MessageQueue([]); //インスタンス化まで制限してしまう
    class MessageQueue2 {
        constructor(messages) {
            this.messages = messages;
        }
        static create(messages) {
            return new MessageQueue2(messages);
        }
    }
    class BadQueue2 extends MessageQueue2 {
    } //クラスの拡張を制限できている
    MessageQueue2.create([]); //APIは変わるがインスタンス化が可能になった
};
//# sourceMappingURL=5.10.js.map