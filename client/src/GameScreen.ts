import Node2D from '@lib/Node2D';
import Player from './Player';

class GameScreen extends Node2D {

    public run (): void {
        this.ctx.fillStyle = '#7aadff';
        this.ctx.fillRect(0, 0, document.body.clientWidth, document.body.clientHeight);
    }

    children (): Node2D[] {
        return [
            new Player(this.ctx)
        ];
    }

}

export default GameScreen;
