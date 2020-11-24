const chapter4_2_2 = () => {
    type Filter = {
        <T>(array: T[],f:(item: T) => boolean): T[]
    }
    // let filter: Filter = //....

    type Filter2<T> = {
        (array: T[],f:(item: T) => boolean): T[]
    }
    // let filter2: Filter2<number> = //....

    type Filter3 = <T>(array: T[],f: (item: T) => number) => T[]
    // let filter3: Filter3 = //....

    type Filter4<T> = (array: T[], f: (item: T) => number) => T[]
    // let filter4: Filter4<number> = //....

    // function filter<T>(array: T[], f: (item: T) => boolean): T[]{
    //     //....
    // }

    // function map(array: unknown[],f: (item: unkown) => unknown[]): unknown[]{
    //     let result = [];
    //     for(let i = 0; i < array.length; i++){
    //         result[i] = f(array[i])
    //     }
    //     return result;
    // }

    function GenericMap<T,U>(array: T[],f: (item: T) => U): U[]{
        let result = [];
        for(let i = 0; i < array.length; i++){
            result[i] = f(array[i]);
        }
        return result;
    }
    
}