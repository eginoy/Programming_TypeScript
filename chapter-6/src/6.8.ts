import './zip'
const chapter6_8 = () => {
    [1,2,3]
    .map(n => n * 2) // number[]
    .zip(['a','b','c']) // [number,string][]

    /**
      [
          [2,'a'],
          [4,'b'],
          [6,'c']
      ]
     */
}