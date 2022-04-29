/* jshint esversion: 11 */
import {addCard} from './drawElements.js';
import {loadCats} from './consumeAPI.js';

const mainReference = document.querySelector('main');

addCard(mainReference, 'https://pngimg.com/uploads/cat/cat_PNG106.png');
addCard(mainReference, 'https://pngimg.com/uploads/cat/cat_PNG106.png');
addCard(mainReference, 'https://pngimg.com/uploads/cat/cat_PNG106.png');

loadCats()
    .then(( data ) => {
      console.log(data);
    });
