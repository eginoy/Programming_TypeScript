const chapter5_1 = () => {
    //チェスのゲームを表す
    class Game{
        privatePices = Game.makePices()
        
        private static makePices(){
            return[
                new King('White','E',1),
                new King('Black','E',8),
                
                new Queen('White','D',1),
                new Queen('White','D',8),

                new Bishop('White','C',1),
                new Bishop('White','F',1),
                new Bishop('Black','C',8),
                new Bishop('Black','F',8)
            ]
        }
    }

    //チェスの駒
    abstract class Piece{
        protected position
        constructor(
            private readonly color: Color,
            file: File,
            rank: Rank
        ){
            this.position = new Position(file,rank)
        }
    }

    //駒の位置
    class Position{
        constructor(
            private file: File,
            private rank: Rank
        ){}
        distanceFrom(position: Position){
            return{
                rank: Math.abs(position.rank - this.rank),
                file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
            }
        }
    }

    class King extends Piece {
        canMoveTo(position: Position){
            let distance = this.position.distanceFrom(position)
            return distance.rank < 2 && distance.file < 2
        }
    } 
    class Queen extends Piece { }
    class Bishop extends Piece { }
    class knight extends Piece { }
    class Rook extends Piece { }
    class Pawn extends Piece { }

    type Color = 'Black' | 'White'
    type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' 
    type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8   
}