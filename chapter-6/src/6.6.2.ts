const chapter6_6_2 = () => {
    type Dialog = {
        id?: string
    }

    function closeDialog(dialog: Dialog){
        if(!dialog.id){ //1
            return
        }
        setTimeout(()=>{
            removeFromDOM(
                dialog,
                //1で型の絞り込みをしているがスコープが違うのでdialog.idが定義済みであることがTypeScriptに伝わらない
                document.getElementById(dialog.id) //error  string | undefinedをstringに割り当てられません 
            )
        });
    }

    function removeFromDOM(dialog: Dialog,element: Element){
        //1で型の絞り込みをしているがスコープが違うのでdialog.idが定義済みであることがTypeScriptに伝わらない
        element.parentNode.removeChild(element); //error オブジェクトがnullである可能性があります
        delete dialog.id
    }

    //非nullアサーション演算子
    function closeDialog2(dialog: Dialog){
        if(!dialog.id){
            return
        }
        setTimeout(()=>{
            removeFromDOM2(
                dialog,
                //非nullアサーション演算子(!)を使用することでその方が定義済であることをTypeScriptに伝えている。
                /*
                dialog.id  //string | undefined
                dialog.id! // string
                */
                document.getElementById(dialog.id!)! 
            )
        });
    }

    function removeFromDOM2(dialog: Dialog,element: Element){
        element.parentNode!.removeChild(element) //非nullアサーション
        delete dialog.id
    }

    //非nullアサーションは望ましくないので、上記の例をリファクタリング
    type VisibleDialog = {id: string}
    type DestoryedDialog = {}
    type Dialog3 = VisibleDialog | DestoryedDialog

    function closeDialog3(dialog: Dialog3){
        if(!('id' in dialog)){
            return
        }
        setTimeout(()=>
            removeFromDOM3(
                dialog,
                document.getElementById(dialog.id)!
            )
        )
    }

    function removeFromDOM3(dialog: VisibleDialog,element: Element){
        element.parentNode!.removeChild(element)
        /*
        書籍ではTypeScriptのversion3.xで行っているので、delete演算子のオペランドに
        必須フィールドを指定してもコンパイルエラーにならない。
        TypeScript 4.0での変更のため、deleteのオペランドに必須フィールドをしていするとコンパイルエラーになる。
        (strictNullChecks指定時)
        package.jsonのtypescriptのversion指定を3.8にしてからコンパイルしてコンパイルエラーにならないのを確認した。
        */
        delete dialog.id
    }
}