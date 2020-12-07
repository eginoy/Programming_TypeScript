const chapter5_4_2 = ()=> {
    interface Animal{
        readonly name: string //private,protected,publicは使用できない
        eat(food: string): void
        sleep(hours: number): void
    }

    interface Feline{
        meow(): void
    }

    class Cat implements Animal,Feline {
        name = 'Whishkers'
        eat(food: string){
            console.info('Ate some', food, '. Mmm!')
        }
        sleep(hours: number){
            console.info('Sleep for',hours, 'hours')
        }
        meow(){
            console.info('Meow')
        }
    }
}