import { State } from "./State"

let boardNew: State
var count: number = 0
// Класс служит для определения типа объекта game из предыдущей работы с дополнительными методами.
export class Game {
    steps: State[] // Состояния игры
    current: number // Текущее состояние игры

    constructor(steps: State[] = [new State()], current: number = 0 ) {
        // TODO
        // Корректно инициализируйте переменные:
        this.steps = steps
        this.current = current
    }

    get state(): State {
        // TODO
        // Сеттер должен возвращать текущее состояние игры
        //count = this.current
        return this.steps[count]
    }

    clone() {
        // TODO
        // Функция должна вернуть копию объекта
        //return new State(this.steps[this.current].clone(), this.steps[this.current].sym)
    }

    move(index: number): boolean {
        // TODO        
        // Определяет, какой символ ходит, и пытается сделать ход 
        //  с помощью board.move.
        // Если ход можно сделать, то добавляет  новыу позицию в steps, 
        //  обновляет current и возвращает true, иначе возвращает false
        // Нужно учесть, что если вызывалась функция toStep, то 
        //  current можно указывать не на последний элемент steps
        //count = this.current
        //this.state.board.status() //проверка на возможность хода
        if(this.state.board.status() != "Идет игра") return false // если не идет игра - конец
        else{
            if(this.current % 2 == 0) this.state.sym = "X"
            if(this.current % 2 != 0) this.state.sym = "0"
            this.state.board.move(index, this.state.sym)//если все ок - делается ход
            let boardNew = this.state.clone()
            //boardNew = this.clone()
            this.steps.push(boardNew) //добавление копии в массив
            this.current ++ //увеличение счетчика
            this.toStep
            return true
        }
    }

    toStep(step: number) {
         // TODO
        // Проверяет, что в steps есть элемент с индексом step,
        //  если нет то возвращает false
        // Делает current равным step и обновляет свойство cell в board
        if (this.steps.length<step) { //проверка на возможность возврата к ходу
            return false
        }
        else {
            this.steps[count] = this.steps[step].clone()
            count = step //переприсваивание step
            this.current = count //переписывание счетчика
            return true
        }      
    }
}