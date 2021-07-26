class Game {

    constructor (
        private screenContext: CanvasRenderingContext2D
    ) {
        this.prepareScreen();
    }

    private prepareScreen (): void {
        this.screenContext.fillStyle = '#000';
        this.screenContext.fillRect(10, 10, 100, 100);
    }

}

export default Game;
