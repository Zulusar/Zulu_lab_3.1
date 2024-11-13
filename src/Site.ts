import { Game } from "./Game";
import { State } from "./State";

// Объект для сохранения игры
// key рекомендуется инициализировать 
//  с помощью new Date().toLocaleString()
type Saving = {
    key: string 
    game: Game
}
//var nowGame: State
//let data = new Date().toLocaleString()
let newKeys: Saving 
//let newKey: string []
let keysBoard: string[] 
let count = 0
// Класс позволяет сохранять и восстанавливать игры
export class Site {
    // Текущая игра
    game: Game = new Game()
    // Сохраненные игры
    Games: Saving[] = []
    
    save() {
        // TODO
        // сохраняет текущую игру в массив Games
        const newKeys: Saving = {key: new Date().toLocaleString(), game: this.game.clone()}
        this.Games.push(newKeys)
        }
 
    load(index: number) {
        // TODO
        // загружает игру по ее индексу в массиве
        return this.game = this.Games[index].game.clone()
    }

    keys(): string[] {//для чего он нужен и где он используется?
        // TODO
        // вовзращает список ключей игр из массива Games
        keysBoard.push(newKeys.key)
        return keysBoard
         
    }
}