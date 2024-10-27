import { State } from "./State"

let boardNew: State
// Класс служит для определения типа объекта game из предыдущей работы с дополнительными методами.
export class Game {
    steps: State[] // Состояния игры
    current: number // Текущее состояние игры

    constructor(steps: State[] = [new State()], current: number = 0 ) {
        // TODO
        // Корректно инициализируйте переменные:
        this.steps = steps
        this.current = current
        //this.steps[this.current]

    }

    get state(): State {
        // TODO
        // Сеттер должен возвращать текущее состояние игры
        return this.steps[0]
    }

    clone() {
        // TODO
        // Функция должна вернуть копию объекта
        return this   
    }

    move(index: number): boolean {
        // TODO        
        // Определяет, какой символ ходит, и пытается сделать ход 
        //  с помощью board.move.
        // Если ход можно сделать, то добавляет  новыу позицию в steps, 
        //  обновляет current и возвращает true, иначе возвращает false
        // Нужно учесть, что если вызывалась функция toStep, то 
        //  current можно указывать не на последний элемент steps
        this.state.board.status()
        if(this.state.board.status()!="Идет игра") return false
        else{
            if(this.current % 2 == 0) {
                this.state.sym = "X"
            }
            if(this.current % 2 != 0) {
                this.state.sym = "0"
            }
            if(this.state.board.move(index, this.state.sym) == true){
                this.state.board.move(index, this.state.sym)
            }
            this.current ++
            return true
        }
    }

    toStep(step: number) {
         // TODO
        // Проверяет, что в steps есть элемент с индексом step,
        //  если нет то возвращает false
        // Делает current равным step и обновляет свойство cell в board
        return true       
    }
}