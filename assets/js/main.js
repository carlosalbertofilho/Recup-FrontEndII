/* jshint esversion: 11 */
import {drawGrid, delCard} from './drawElements.js';
import {catsOnLocalStore} from './consumeAPI.js';

const mainReference = document.querySelector('main');
const trashButtonRef = document.getElementsByTagName('i');


catsOnLocalStore();
drawGrid(mainReference);

for ( const button of trashButtonRef ) {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const cardRef = document.getElementById(button.id);
    delCard(cardRef, button.id);
  });
}

window.addEventListener('storage', ( event ) => {
  event.preventDefault();
  if (!localStorage.getItem('listCats')) {
    catsOnLocalStore();
    drawGrid(mainReference);
  }
});
