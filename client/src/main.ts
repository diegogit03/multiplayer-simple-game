import Game from './Game';

const screenElement =  document.getElementById('screen') as HTMLCanvasElement;
const screenContext = screenElement.getContext('2d') as CanvasRenderingContext2D;

new Game(screenContext);
