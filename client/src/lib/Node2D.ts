abstract class Node2D {
    constructor (protected ctx: CanvasRenderingContext2D) {}
    
    update (): void {
        this.run();
        this.children().forEach(node => {
            node.run()
        });
    }

    abstract run(): void;
    abstract children(): Node2D[];
}

export default Node2D;
