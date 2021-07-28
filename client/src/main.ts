import Game from '@lib/Game';
import GameScreen from './GameScreen';

const screenElement =  document.getElementById('screen') as HTMLCanvasElement;
const initialNode = new GameScreen(screenElement.getContext('2d') as CanvasRenderingContext2D);

new Game(screenElement, initialNode);
