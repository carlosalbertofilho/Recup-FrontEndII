/* jshint esversion: 11 */

/**
* This function consume the Cat APT
*/
async function loadCats() {
  const header = {
    'x-api-key': 'DEMO-API-KEY',
  };

  const requestManager = {
    method: 'GET',
    headers: header,
  };

  let options = '?size=med';
  options += '&order=RANDOM';
  options += '&limit=12';

  const url = 'https://api.thecatapi.com/v1/images/search' + options;

  return fetch(url, requestManager)
      .then((T) => T.json());
}

/**
* This function save a array of the cats on local Store
*/
export function catsOnLocalStorage() {
  loadCats()
      .then((data) => {
        localStorage.setItem('listCats', JSON.stringify(data));
      });
}
