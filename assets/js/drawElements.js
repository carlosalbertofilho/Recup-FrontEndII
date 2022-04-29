/* jshint esversion: 11 */

/**
 * This function creates a card
 * @param {element} element where the card will be added
 * @param {string} src card image path
 */
function addCard(element, src) {
  const section = document.createElement('section');
  const img = document.createElement('img');
  const button = document.createElement('button');

  img.src = src;

  button.innerText = 'Apagar';
  button.className = 'delete';

  section.appendChild(img);
  section.appendChild(button);

  element.appendChild(section);
}

/**
* Draw a grid of the Cats
* @param {element} element where the grid will be added
*/
export function drawGrid( element ) {
  const listCats = JSON.parse(localStorage.getItem('listCats'));

  listCats.forEach( (cat) => {
    addCard( element, cat.url );
  });
}
