"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const chapter8_2 = () => {
    //以下のコードはタイミングによって成功したり失敗したりする。(非同期で実行されるため)
    //Apacheサーバーのアクセスログからデータを読み込む
    const logFilePath = './var/log/apache2/access_log';
    let i = 0;
    const j = 1000000n;
    while (i < j) {
        i++;
        fs.readFile(logFilePath, { encoding: 'utf8' }, (error, data) => {
            if (error) {
                console.error('error reading!', error);
                return;
            }
            console.info('success reading!', data);
        });
        //同時に、同じアクセスログにデータを書き込む
        fs.appendFile(logFilePath, 'New access log entry', error => {
            if (error) {
                console.error('error writing!', error);
            }
        });
    }
};
chapter8_2();
//# sourceMappingURL=8.2.js.map