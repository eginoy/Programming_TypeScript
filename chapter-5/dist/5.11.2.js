"use strict";
const chapter5_11_2 = () => {
    //こんな感じで使えるRequestBuilderを実装したい
    // new RequestBuilder()
    // .setURL('/users')
    // .setMethod('get')
    // .setData({firstName: 'Anna'})
    // .send()
    class RequestBuilder {
        constructor() {
            this.URL = null; //初期値をnullで初期化している
            this.method = null;
            this.data = null;
        }
        setURL(url) {
            this.URL = url;
            return this;
        }
        setMethod(method) {
            this.method = method;
            return this;
        }
        setData(data) {
            this.data = data;
            return this;
        }
        send() {
            //...
        }
    }
};
//# sourceMappingURL=5.11.2.js.map