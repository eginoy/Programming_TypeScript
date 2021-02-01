const redis = require('redis')

const chapter8_5_1 = () => {
    interface Emitter {
        //イベントを送信する
        emit(channel: string,value: unknown): void
        //イベントが送信されたときに何かを行う
        on(channel: string, f: (value: unknown) => void): void
    }


    type RedisClient = {
        on(event: 'ready', f:() => void):void
        on(event: 'error', f:(e: Error) => void):void
        on(event: 'reconnecting', f:(params: {attempt: number,delay: number}) => void):void
    }

    //上記のRedisClientだと冗長なのでマップ型で表す
    type Events = {
        ready: void
        error: Error
        reconnecting: {attempt: number,delay: number}
    }
    
    type RedisClient2 = {
        on<E extends keyof Events>(
            event: E,
            f: (arg: Events[E]) => void
        ): void
        emmit<E extends keyof Events>(
            event: E,
            arg: Events[E]
        ):void
    }


    //Redisクライアントの新しいインスタンス作成
    let client = redis.createClient()

    //クライアントによって発行されるイベントをリッスン
    client.on('ready',() => console.info('Client is ready'))
    client.on('error', (e: Error) => console.error('An error occurred!',e))
    client.on('reconnecting', params => console.info('Reconnecting...', params))

}