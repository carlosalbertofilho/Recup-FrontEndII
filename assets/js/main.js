/* jshint esversion: 11 */
import {drawGrid, delCard} from './drawElements.js';
import {catsOnLocalStore} from './consumeAPI.js';

const mainReference = document.querySelector('main');
const trashButtonRef = document.getElementsByTagName('i');
const load = document.getElementById('Loading');

catsOnLocalStore();

// draws itens after complete loading.
window.onload = () => {
  load.remove();
  drawGrid(mainReference);
  for (const button of trashButtonRef) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const cardRef = document.getElementById(button.id);
      delCard(cardRef, button.id);
    });
  }
};

// clean localStore after exit browser/tab.
window.onbeforeunload = () => {
  localStorage.clean();
};

