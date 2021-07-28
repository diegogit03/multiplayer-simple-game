import Node2D from './Node2D';

import GameLoop from './Gameloop';

class Game {
    static screen: HTMLCanvasElement;

    private gameLoop: GameLoop;

    constructor (
        screenElement: HTMLCanvasElement,
        initialNode: Node2D
    ) {
        screenElement.width = document.body.clientWidth;
        screenElement.height = document.body.clientHeight;
        Game.screen = screenElement;
        this.gameLoop = new GameLoop();
        this.gameLoop.start(initialNode)
    }

}

export default Game;
