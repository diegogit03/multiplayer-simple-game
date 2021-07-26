import Game from './Game';

const screenElement =  document.querySelector('#screen') as HTMLCanvasElement;
const screen = screenElement.getContext('2d') as CanvasRenderingContext2D;

new Game(screen);
