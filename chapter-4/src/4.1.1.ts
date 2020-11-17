const chapter4_1_1 = () => {
    function log(message: string, userId?: string){ //オプションパラメーター:引数最後に指定する必要あり。関数呼び出し時にuserIdは省略可能
        let time = new Date().toLocaleTimeString()
        console.log(time,message,userId || 'Not signed in')
    }
    log('Page loaded')
    log('User signed in', 'd522452')

    function log2(message: string, userId = 'Not signed in'){ //引数にデフォルト値を設定することもできる
        let time = new Date().toLocaleTimeString()
        console.log(time,message,userId)
    }
    log2('Page loaded')
    log2('User signed in', 'd522452')

    type Context = {
        appId?: string
        userId?: string
    }
    function log3(message: string,context: Context = {}){
        let time = new Date().toLocaleTimeString()
        console.log(time,message,context.userId)        
    }
    log3('Page loaded')
    log3('User signed in',{appId: 'xxxx'})
    log3('User signed in',{userId: 'd2235234'})
    log3('User signed in',{appId:'xxxxx',userId: 'd2235234'})
}