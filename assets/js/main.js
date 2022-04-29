/* jshint esversion: 11 */
import {drawGrid, delCard} from './drawElements.js';
import {catsOnLocalStore} from './consumeAPI.js';

const mainReference = document.querySelector('main');
const buttonRef = document.getElementsByTagName('button');

console.log(buttonRef);

catsOnLocalStore();

drawGrid( mainReference );


for ( const button of buttonRef ) {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const cardRef = document.getElementById(button.id);
    delCard(cardRef, button.id);
  });
}
