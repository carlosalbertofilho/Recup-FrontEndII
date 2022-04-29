/* jshint esversion: 11 */

/**
* This function consume the Cat APT
*/
export async function loadCats( ) {
  const header = {
    'x-api-key': 'DEMO-API-KEY',
  };

  const requestManager = {
    method: 'GET',
    headers: header,
  };

  let options = '?size=med';
  options += '&order=RANDOM';
  options += '&limit=9';

  const url = 'https://api.thecatapi.com/v1/images/search' + options;

  return fetch(url, requestManager)
      .then( ( T ) => T.json() );
}
