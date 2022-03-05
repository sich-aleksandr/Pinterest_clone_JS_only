const apiUrl = "https://6218fefb81d4074e859e849d.mockapi.io/api/pinterst/pinterest";

function getDBdata(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

export { getDBdata, apiUrl }