const chapter4_2_5_1 = () => {
    type HasSides = {numberOfSides: number}
    type SidesHaveLength = {sideLength: number}

    function logPerimeter<
        Shape extends HasSides & SidesHaveLength //ShapeはHasSidesとSideHaveLengthのプロパティを持っていなければならない
    >(s: Shape){
        console.log(s.numberOfSides * s.sideLength)
        return s
    }

    type Square = HasSides & SidesHaveLength
    let square: Square = {numberOfSides: 4,sideLength: 3}
    logPerimeter(square)
}