"use strict";
const chapter6_6_2 = () => {
    function closeDialog(dialog) {
        if (!dialog.id) { //1
            return;
        }
        setTimeout(() => {
            removeFromDOM(dialog, 
            //1で型の絞り込みをしているがスコープが違うのでdialog.idが定義済みであることがTypeScriptに伝わらない
            document.getElementById(dialog.id) //error  string | undefinedをstringに割り当てられません 
            );
        });
    }
    function removeFromDOM(dialog, element) {
        //1で型の絞り込みをしているがスコープが違うのでdialog.idが定義済みであることがTypeScriptに伝わらない
        element.parentNode.removeChild(element); //error オブジェクトがnullである可能性があります
        delete dialog.id;
    }
    //非nullアサーション演算子
    function closeDialog2(dialog) {
        if (!dialog.id) {
            return;
        }
        setTimeout(() => {
            removeFromDOM2(dialog, 
            //非nullアサーション演算子(!)を使用することでその方が定義済であることをTypeScriptに伝えている。
            /*
            dialog.id  //string | undefined
            dialog.id! // string
            */
            document.getElementById(dialog.id));
        });
    }
    function removeFromDOM2(dialog, element) {
        element.parentNode.removeChild(element); //非nullアサーション
        delete dialog.id;
    }
    function closeDialog3(dialog) {
        if (!('id' in dialog)) {
            return;
        }
        setTimeout(() => removeFromDOM3(dialog, document.getElementById(dialog.id)));
    }
    function removeFromDOM3(dialog, element) {
        element.parentNode.removeChild(element);
        delete dialog.id;
    }
};
//# sourceMappingURL=6.6.2.js.map