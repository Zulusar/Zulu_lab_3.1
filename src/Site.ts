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
let data = new Date().toLocaleString()
let newKeys: Saving = {key: new Date().toLocaleString(), game: new Game}
let newKey: string []
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
        newKeys.key = structuredClone (new Date().toLocaleString())//перезаписывает все значения в массиве
        newKeys.game = structuredClone(this.game)
        //count.push(newKeys.key)
        this.Games.push(newKeys)
        }

    load(index: number) {
        // TODO
        // загружает игру по ее индексу в массиве

    }

    keys(): string[] {
        // TODO
        // вовзращает список ключей игр из массива Games
        newKey.push(this.Games[count].key)
        count ++
        return newKey
    }
}