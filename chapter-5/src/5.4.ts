const chapter5_4 = () => {
    type Sushi = {
        calories: number
        salty: boolean
        tasty: boolean
    }

    interface ISushi{
        calories: number
        salty: boolean
        tasty: boolean
    }

    type Cake = {
        calories: number
        sweet: boolean
        tasty: boolean
    }

    type Food = {
        calories: number
        tasty: boolean
    }

    type SuShi2 = Food & {
        salty: boolean
    }

    type Cake2 = Food & {
        sweet: boolean
    }

    interface IFood {
        calories: number
        tasty: boolean
    }

    interface ISushi2 extends IFood{
        salty: boolean
    }

    interface ICake extends IFood{
        sweet: boolean
    }

    type A = number
    type B = A | string //これをinterfaceで表すことはできない

    interface IA {
        good(x: number): string
        bad(x: number): string
    }

    // interface IB extends IA {
    //     good(x: number | string): string
    //     bad(x: string): string //error badの拡張が正しく行われていない(引数xにstringでアノテートしている)
    // }

    type IB = IA & {
        good(x: number | string): string
        bad(x: string): string
    }
}