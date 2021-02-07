import {EventEmitter} from 'events'
import { threadId } from 'worker_threads'
let worker =  new Worker('WorkerScript.js')

//worker側からのデータを受け取る。
worker.onmessage = e => {
    console.log(e.data) // 'Ack: "some data"' と表示される
}

//workerにデータを渡す。
worker.postMessage('some data')


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

let commandEmitter: SafeEmitter<Commands> = new EventEmitter()
let eventEmitter: SafeEmitter<Events> = new EventEmitter()

//workerから送られてくるイベントをリッスンし、
//型安全なイベントエミッターを使ってそれらを再発行します。
worker.onmessage = event => {
    eventEmitter.emit(
        event.data.type,
        ...event.data.data
    )
}

//このスレッドによって発行されるコマンドをリッスンし、それらをworkerに送信します。
commandEmitter.on('sendMessageToThread',data=>
    worker.postMessage({type: 'sendMessageToThread', data})
)
commandEmitter.on('createThread',data =>
    worker.postMessage({type: 'createThread',data})
)
//その他のコマンドも同様

//新しいスレッドが作成されたことをWorkerが知らせてきたときに、何かを行います。
eventEmitter.on('createdThread',(threadID, participants) => {
    console.log('Create a new chat thread!', threadID, participants)
})

//コマンドをworkerに送信します
commandEmitter.emit('createThread',[123,456])