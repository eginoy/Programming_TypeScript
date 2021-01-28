import {readFile} from 'fs'

const chapter8_3 = () => {
    type Executor<T> = (
        resolve: (result: T) => void,
        reject: (error: unknown) => void
     ) => void
    class Promise<T,E extends Error>{
        constructor(f: Executor<T>){}
        then<U>(g: (result: T) => Promise<U> | U): Promise<U>{
            //...
        }
        catch<U>(g: (error: unknown) => Promise<U> | U): Promise<U>{
            //...
        }
    }

    function readFilePromise(path: string): Promise<string> {
        return new Promise((resolve,reject) => {
            readFile(path,(error,result)=>{
                if(error){
                    reject(error)
                } else{
                    resolve(result)
                }
            })
        })
    }
}