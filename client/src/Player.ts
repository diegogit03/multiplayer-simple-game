import Node2D from '@lib/Node2D';
import Game from '@lib/Game';

class Player extends Node2D {
    private static state = {
        x: 0,
        y: 0
    }

    public run (): void {
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(Player.state.x, Player.state.y, 300, 300);
        Player.state.x++;
        Player.state.y++;
        if(Player.state.y >= Game.screen.height) {
            Player.state.y-=2
        }
    }

    children (): Node2D[] {
        return [];
    }

}

export default Player;
