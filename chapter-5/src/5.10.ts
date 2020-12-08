const chapter5_10 = () => {
    //クラスの拡張やメソッドのオーバーライドを制限する
    class MessageQueue{
        private constructor(private messages: string[]){}
    }
    class BadQueue extends MessageQueue{} //クラスの拡張を制限できている
    new MessageQueue([]) //インスタンス化まで制限してしまう

    class MessageQueue2{
        private constructor(private messages: string[]){}
        static create(messages: string[]){
            return new MessageQueue2(messages)
        }
    }
    class BadQueue2 extends MessageQueue2{} //クラスの拡張を制限できている
    MessageQueue2.create([]) //APIは変わるがインスタンス化が可能になった
}