const chapter6_10_2 = () => {
    type O = {
        a: {
            b:{
                c: string
            }
        }
    }

    type O_key = keyof O // 'a'
    type O_key2 = O['a']['b'] //{c:string}
}