const chapter3_2_11 = () => {
    let a: [number] = [1]

    let b: [string, string, number] = ['maloclm', 'gladwell', 1963]
    // b = ['qeen', 'elizabeth', 'ii', 1926] //error b[2]の位置はnumber type

    let tranFares: [number, number?][] = [
        [3.75],
        [8.25,7.70],
        [10.50]
    ]

    //上の例と同じアノテート
    let moreTranFares: ([number] | [number,number])[] = [
        [3.75],
        [8.25,7.70],
        [10.50]
    ]

    //少なくとも1つの要素を持つ、文字列のリスト
    let friends: [string,...string[]] = ['Sara', 'Tail', 'Chloe', 'Claire']
    //不均一なリスト
    let list: [number,boolean,...string[]] = [
        1,false,'a','b','c'
    ]
}