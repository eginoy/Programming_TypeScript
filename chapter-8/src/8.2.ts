import * as fs from 'fs'
import { isRegExp } from 'util'
const chapter8_2 = () => {
    //Apacheサーバーのアクセスログからデータを読み込む
    const logFilePath = './var/log/apache2/access_log'
    fs.readFile(
        logFilePath,
        { encoding: 'utf8' },
        (error, data) => {
            if (error) {
                console.error('error reading!', error)
                return
            }
            console.info('success reading!', data)
        }
    )

    //同時に、同じアクセスログにデータを書き込む
    fs.appendFile(
        logFilePath,
        'New access log entry',
        error => {
            if (error) {
                console.error('error writing!', error)
            }
        }
    )
}
