export type Cell = "_" | "X" | "0"

export function isCell(sym: string): sym is Cell {
    // TODO
    // Проверяет, является ли sym типа Cell
    // Возвращает true если sym типа Cell, иначе false
    return true
}
// Класс служит для определения типа объекта board из предыдущей работы с дополнительными методами.
export class Board {
    cells: Cell[]

    constructor(str: string | Cell[] = "_________") {
        // TODO
        // Используя сужения типа заполните this.cells
        this.cells = []
        if(typeof str === "string"){
            const strFirst = str.split("")
            for(let i = 0; i < str.length; i++){
                this.cells.splice(i, 0, strFirst[i] as Cell) 
            }
        }
        else{
            for(let i = 0; i<str.length; i++){
                this.cells.splice(i, 0, str[i])
            }
        }
    }

    clone(): Board {
        // TODO
        // Функция должна вернуть копию объекта
        let newBoard = new Board//клонирование игры
        for(let i=0; i<this.cells.length; i++){//по-другому не получается
            newBoard.cells[i] = this.cells[i]
        }
        return newBoard //возврат нового объекта типа Board
    }


    private static fromString(str: string): Cell[] | null {
        // TODO
        // Переписывает из str символы в this.cells
        // Если длина строки не равна 9, возвращает null
        // Если встретиться символ не из Cell возвращает null
        // Если преобразование прошло успешно возвращает true
        return null       
    }

    isFill(): boolean {
        // TODO
        // Возвращет true если на доске нет пустых клеток
        var count = 0
        for(let i = 0; i<this.cells.length; i++){
            if(this.cells[i] == "_") count ++
            else count == 0
        }
        return (count == 0)? true: false
    }

    move(index: number, cell: Cell): boolean {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        if(this.cells[index]!= "_") return false
        else{
            this.cells[index] = cell
            return true
        }
    }

    private getLineChar(line: number[]): Cell[] {
        return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]];
    }

    private static winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    checkWin(): string {
        // TODO
        // Если имеется комбинация из трех одинаковых символов "X" или "0" 
        //  в линию - возвращает этот символ
        // Иначе возвращает символ "_"
        let data = "_"
        for(let i = 0; i < Board.winPos.length; i++){
            if (this.getLineChar(Board.winPos[i])[0] == this.getLineChar(Board.winPos[i])[1]  && this.getLineChar(Board.winPos[i])[0] == this.getLineChar(Board.winPos[i])[2]&& this.getLineChar(Board.winPos[i])[0] != "_") {
                data = this.getLineChar(Board.winPos[i])[0]
                break
            }
            else  data = "_"   
        }
        return data
    }

    status(): string {
        this.isFill()
        if(this.isFill() == true) return "Ничья"
        if(this.checkWin()!= "_") return `Победил ${this.checkWin()}`
        else return "Идет игра"
        // TODO
        // возвращает либо строку с результатом игры, либо, 
        //   если игра не закончена, строку "Идет игра".
       
    }
}