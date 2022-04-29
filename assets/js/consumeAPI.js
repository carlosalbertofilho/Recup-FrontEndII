/* jshint esversion: 11 */

/**
* This function consume the Cat APT
*/
export async function loadCats( ) {
  const header = {
    'x-api-key': 'DEMO-API-KEY',
  };

  const options = {
    'limit': 9,
    'page': 0,
    'size': 'med',
    'order': 'RANDOM',
  };

  const requestManager = {
    method: 'GET',
    body: JSON.stringify(options),
    headers: header,
  };

  return fetch('https://api.thecatapi.com/v1/images/search', requestManager)
      .then( (T) => T.json() );
}
