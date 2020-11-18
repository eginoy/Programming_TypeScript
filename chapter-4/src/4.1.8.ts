const chapter4_1_8 = () => {
    function times(
        f: (index: number) => void,
        n: number
    ){
        for(let i = 0;i < n; i++){
            f(i)
        }
    }
    times(n => console.log(n),4)
    times(function(n){
        console.log(n)
    },4)
}