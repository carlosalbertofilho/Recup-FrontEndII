/* jshint esversion: 11 */
import {drawGrid} from './drawElements.js';
import {catsOnLocalStore} from './consumeAPI.js';

const mainReference = document.querySelector('main');

// if (!localStorage.getItem('listCats')) {
//   catsOnLocalStore();
// }

catsOnLocalStore();


drawGrid( mainReference );

