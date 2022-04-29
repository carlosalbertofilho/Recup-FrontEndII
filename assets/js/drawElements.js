/* jshint esversion: 11 */

/**
 * This function creates a card
 * @param {object} element where the card will be added
 * @param {string} src card image path
 * @param {integer} idCard id of the card
 */
function addCard(element, src, idCard) {
  const section = document.createElement('section');
  const img = document.createElement('img');
  const button = document.createElement('button');

  img.src = src;

  button.id = idCard;
  button.innerText = 'Apagar';
  button.className = 'delete';

  section.id = idCard;
  section.appendChild(img);
  section.appendChild(button);

  element.appendChild(section);
}

/**
* this function draw a grid of the Cats
* @param {object} element where the grid will be added
*/
export function drawGrid( element ) {
  const listCats = JSON.parse(localStorage.getItem('listCats'));

  listCats.forEach( (cat, index) => {
    addCard( element, cat.url, index );
  });
}

/**
* This function delete a cats array element
* This function delete a element of the grid of card
* This Function data update of the local store.
* @param {object} cardRef Card will be deleted.
* @param {string} idCat  Cat Array element that will be deleted
*/
export function delCard( cardRef, idCat ) {
  let listCats = JSON.parse(localStorage.getItem('listCats'));
  listCats = listCats.splice(idCat, 1);
  localStorage.setItem('listCats', JSON.stringify(listCats));
  cardRef.remove();
}
