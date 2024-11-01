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

// Класс позволяет сохранять и восстанавливать игры
export class Site {
    // Текущая игра
    game: Game = new Game()
    // Сохраненные игры
    Games: Saving[] = []

    save() {
        // TODO
        // сохраняет текущую игру в массив Games
        this.Games[this.game.current].key = new Date().toLocaleString()
        this.Games[this.game.current].game = this.game
    }

    load(index: number) {
        // TODO
        // загружает игру по ее индексу в массиве
    }

    keys(): string[] {
        // TODO
        // вовзращает список ключей игр из массива Games
        return []
    }
}