import Node2D from './Node2D';

class GameLoop {

    public start (nodeToRender: Node2D) {
        nodeToRender.update()

        window.requestAnimationFrame(() => {
            this.start(nodeToRender)
        });
    }

}

export default GameLoop;
