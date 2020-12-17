const chapter6_1_5_1 = () => {
    type UserTextEvent = {value: string}
    type UserMouseEvent = {value: [number,number]}

    type UserEvent = UserTextEvent | UserMouseEvent

    function handle(event: UserEvent){
        if(typeof event.value === 'string'){
            event.value //string
            //...
            return
        }
        event.value //[number,number]
    }


    type UserTextEvent2 = {value:string, target: HTMLInputElement}
    type UserMouseEvent2 = {value:[number,number], target: HTMLElement}

    type UserEvent2 = UserTextEvent2 | UserMouseEvent2

    function handle2(event: UserEvent2){
        if(typeof event.value === 'string'){
            event.value //string
            event.target //HTMLElement | HTMLInputElement (!!!) event.valueの絞り込みはうまくいったが、targetはうまくいっていない
            //...
            return
        }
        event.value //[number, number]
        event.target //HTMLElement | HTMLInputElement (!!!) event.valueの絞り込みはうまくいったが、targetはうまくいっていない
    }

    
    //タグ付き合併型(ReduxのReducer,ReactのuseReducerを扱う際に非常に有効)
    type UserTextEvent3 = {type: 'TextEvent', value: string, target: HTMLInputElement}
    type UserMouseEvent3 = {type: 'MouseEvent', value: [number,number], target: HTMLElement}

    type UserEvent3 = UserTextEvent3 | UserMouseEvent3

    function handle3(event: UserEvent3){
        //各型にタグ付け({type: '...Event'}のところ)することで合併型の中で一意になるので、関数内で型の絞り込みができている
        if(event.type === 'TextEvent'){
            event.value //string
            event.target //HTMLInputElement
            //...
            return
        }
        event.value //[number,number]
        event.target //HTMLElement
    }
}