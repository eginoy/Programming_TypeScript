import {EventEmitter} from 'events'

interface SafeEmitter<
    Events extends Record<PropertyKey,unknown[]>
>{
    emit<K extends keyof Events>(
        channel: K,
        ...data: Events[K]
    ): boolean
    on<K extends keyof Events>(
        channel: K,
        listener: (...data: Events[K]) => void
    ): this
    on(
        channel: never,
        listener: (...data: unknown[]) => void
    ): this
}

onmessage = e => {
    console.log(e.data) //'some data' と表示される
    postMessage(`Ack: "${e.data}"`)
}

type Message = string
type ThreadID = number
type UserID = number
type Participants = UserID[]

type Commands = {
    sendMessageToThread: [ThreadID, Message]
    createThread: [Participants]
    addUserToThread: [ThreadID,UserID]
    removeUserFromThread: [ThreadID,UserID]
}

type Events = {
    receivedMessage: [ThreadID,UserID,Message]
    createdThread: [ThreadID]
    addUserToThread: [ThreadID,UserID]
    removedUserFromThread: [ThreadID,UserID]
}

//メインスレッドから送られてくるイベントをリッスンする
let commandEmitter: SafeEmitter<Commands> = new EventEmitter()

//メインスレッドに対してイベントを発行する
let eventEmitter: SafeEmitter<Events> = new EventEmitter()

//型安全なイベントエミッターを使って、メインスレッドからの入力コマンドをラップします。
onmessage = command => {
    commandEmitter.emit(
        command.data.type,
        ...command.data.data
    )
}

//workerによって発行されたイベントをリッスンし、それらをメインスレッドに送信します。
eventEmitter.on('receivedMessage',data => 
    postMessage({type: 'receivedMessage',data})
)
//その他のイベントも同様

//メインスレッドからのsendMessageToThreadコマンドに応答します
commandEmitter.on('sendMessageToThread',(threadID,message) => 
    console.log(`OK I wil send amessage to threadID ${threadID}`)
)

//メインスレッドにイベントを送り返します
eventEmitter.emit('createdThread',123,[456,789])


function processCommandFromMainThread(
    command: Command
){
    switch(command.type){
        case 'sendMessageToThread':
            let [threadID, message] = command.data
            console.log(message)
            //...
    }
}