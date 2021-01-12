const chapter6_7 = () => {
    //名前的型
    type CompanyID = string
    type OrderID = string
    type UserID = string
    type ID = CompanyID | OrderID | UserID

    /*
     開発者から見たときにqueryForUser関数に渡すIdの種類が、UserIdであることが直感的にわかりやすい。
     しかし、どのidも型はすべてstringなので、予期しないtype(CompanyID,OrderIDまたはstirng)の値も渡すことが
     できてしまう。
    */
    let id: CompanyID = 'a12345'
    queryForUser(id) //OK !!!

    function queryForUser(id: UserID){
        //...
    }

    //名前的型(型のブランド化)
    type CompanyID2 = string & {readonly brand: unique symbol}
    type OrderID2 = string& {readonly brand: unique symbol}
    type UserID2 = string& {readonly brand: unique symbol}
    type ID2 = CompanyID2 | OrderID2 | UserID2
    
    function CompanyID2(id: string){
        return id as CompanyID2
    }

    function OrderID2(id: string){
        return id as OrderID2
    }

    function UserID2(id: string){
        return id as UserID2
    }

    let companyId = CompanyID2('4adfasdr4')
    let orderId = OrderID2('ads9fa9dsf')
    let userId = UserID2('4w5wl4ejhh5l')

    queryForUser2(userId)// OK
    queryForUser2(companyId) //NG 'CompanyID2' の引数を型 'UserID2' のパラメーターに割り当てることはできません。

    function queryForUser2(id: UserID2){
        //...
    }

}