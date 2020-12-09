const chapter5_11_2 = () => {
    //こんな感じで使えるRequestBuilderを実装したい
    // new RequestBuilder()
    // .setURL('/users')
    // .setMethod('get')
    // .setData({firstName: 'Anna'})
    // .send()

    class RequestBuilder {
        private URL: string | null = null //初期値をnullで初期化している
        private method: 'get' | 'post' | null = null
        private data: object | null = null

        
        setURL(url: string): this{ //戻り値にthisを指定することでユーザーがsetURLを呼びだした特定のRequestBuilderインスタンスを指す
            this.URL = url
            return this
        }

        setMethod(method: 'get' | 'post'): this{
            this.method = method
            return this
        }

        setData(data: object): this{
            this.data = data
            return this
        }

        send(){
            //...
        }
    }
}