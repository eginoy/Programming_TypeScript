const chapter4_1_9 = () => {
    // 呼び出しシグネチャの省略記法
    type Log = (message: string, userId?: string) => void

    // 完全な呼び出しシグネチャ
    type Log2 = {
        (message: string, userId?: string): void
    }

    //オーバーロードされた関数
    //旅行予約APIの例
    type Reservation = {
        from: Date
        toOrDestination?: Date | string
        destination: string
    }

    type Reserve = {
        (from: Date, to: Date, destination: string): Reservation 
        (from: Date, destination: string): Reservation
    }

    let reserve: Reserve = (
        from: Date,
        toOrDestination: string | Date,
        destination?: string
    ): Reservation => {
        let reservation: Reservation = {
            from: new Date(),
            toOrDestination: '',
            destination: ''
        }
        if (toOrDestination instanceof Date && destination !== undefined) {
            //宿泊旅行の予約
            reservation = {
                from: from,
                toOrDestination: toOrDestination,
                destination: destination
            }
        } else if (typeof toOrDestination === 'string') {
            //日帰り旅行
            reservation = {
                from: from,
                destination: toOrDestination
            }
        }
        return reservation
    }
    console.log(reserve(new Date(), new Date(), 'okinawa'))

    type CreateElement = {
        (tag: 'a'): HTMLAnchorElement
        (tag: 'canvas'): HTMLCanvasElement
        (tag: 'table'): HTMLTableElement
        (tag: string): HTMLElement
    }

    // let createElement: CreateElement = (tag: string): HTMLElement => {
    //     //...
    // }
    
    function warnUser(warning: string){
        if(warnUser.wasCalled){
            return
        }
        warnUser.wasCalled = true
        alert(warning)
    }
    warnUser.wasCalled = false
    
    type WarnUser = {
        (warning: string): void
        wasCalled: boolean
    }
    
    const assignedWasUser: WarnUser = warnUser
    assignedWasUser('warning!')
}
chapter4_1_9()