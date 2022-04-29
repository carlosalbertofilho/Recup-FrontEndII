/* jshint esversion: 11 */

/**
 * This function creates a card
 * @param {element} element where the card will be added
 * @param {string} src card image path
 */
export function addCard(element, src) {
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
