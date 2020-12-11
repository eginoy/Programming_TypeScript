const chapter5_13 = () => {
    //3
    type Shoe = {
        purpose: string
    }

    class BalletFlat implements Shoe {
        purpose = 'dancing'
    }

    class Boot implements Shoe {
        purpose = 'woodcutting'
    }

    class Sneaker implements Shoe {
        purpose = 'walking'
    }

    type ShoeCreator = {
        create(type: 'balletFlat'): BalletFlat
        create(type: 'boot'): Boot
        create(type: 'sneaker'): Sneaker
    }

    let Shoe: ShoeCreator = {
        create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe{
            switch(type){
                case 'balletFlat': return new BalletFlat
                case 'boot': return new Boot
                case 'sneaker': return new Sneaker
            }
        }
    }
    console.log(Shoe.create('balletFlat'))
    console.log(Shoe.create('boot'))
    console.log(Shoe.create('sneaker'))

    //4 a.URLとメソッドの設定が終わるまで.sendメソッドを呼び出せないように
    class RequestBuilder {
        protected url: string | null = null //初期値をnullで初期化している
        protected method: 'get' | 'post' | null = null
        protected data: object | null = null
        
        setMethod(method: 'get' | 'post' ): RequestBuilderWithMethod{
            return new RequestBuilderWithMethod().setMethod(method).setData(this.data)
        }

        setData(data: object | null): this{
            this.data = data
            return this
        }
    }

    class RequestBuilderWithMethod extends RequestBuilder{
        setMethod(method: 'get' | 'post' | null):this{
            this.method = method
            return this
        }
        setURL(url: string): RequestBuilderWithMethodAndURL{
            return new RequestBuilderWithMethodAndURL()
            .setMethod(this.method)
            .setURL(url)
            .setData(this.data)
        }
    }

    class RequestBuilderWithMethodAndURL extends RequestBuilderWithMethod{
        setURL(url: string): this{
            this.url = url
            return this
        }
        send(){
            //...
        }
    }
    //A.a
    let badRequest = new RequestBuilder().send() 
    let goodRequest = new RequestBuilder().setMethod('get').setURL('http://example.com').send()

    //4 b.ユーザーが任意の順番でメソッドを呼び出せるように
    interface BuildableRequest{
        data?: object
        method: 'get' | 'post'
        url: string
    }
    class RequestBuilder2{
        data?: object
        method?: 'get' | 'post'
        url?: string
        
        setData(data: object): this & Pick<BuildableRequest, 'data'>{
            return Object.assign(this,{data})
        }

        setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'>{
            return Object.assign(this,{method})
        }

        setURL(url: string): this & Pick<BuildableRequest,'url'>{
            return Object.assign(this,{url})
        }

        build(this: BuildableRequest){
            return this
        }
    }
    let request2 = new RequestBuilder2()
    //どの順番でメソッドを呼びしてもおk
    request2.setURL('http://example.com').setData({}).setMethod('get').build()
    request2.setMethod('get').setURL('http://example.com').setData({}).build()
    request2.setData({}).setURL('http://example.com').setMethod('get').build()
}
chapter5_13()