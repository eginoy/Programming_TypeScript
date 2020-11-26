const chapter4_2_4 = () => {
    type MyEvent<T> = {
        target: T
        type: string
    }

    type ButtonEvent = MyEvent<HTMLButtonElement>

    let myEvent: MyEvent<HTMLButtonElement | null> = {
        target: document.querySelector('#mybutton'),
        type: 'click'
    }

    type TimedEvent<T> = {
        event: MyEvent<T>
        from: Date
        to: Date
    }

    function triggerEvent<T>(event: MyEvent<T>){
        //....
    }

    triggerEvent({ //T は Element か null
        target: document.querySelector('#myButton'),
        type: 'mousover'
    })
    //まずtriggerEventの引数はMyEvent typeである
    //次にMyEvent typeのtarget に割り当てられたdocument.querySelector() の返り値からTが Element | nullであることが推論される
    //以降のTにElement | null が割り当て可能かチェックされる。
}