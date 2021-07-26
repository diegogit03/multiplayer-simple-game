class Game {

    constructor (
        private screen: CanvasRenderingContext2D
    ) {
        this.prepareScreen();
    }

    private prepareScreen () {
        this.screen.fillStyle = '#000';
        this.screen.rect(150, 150, 150, 150);
    }

}

export default Game;
