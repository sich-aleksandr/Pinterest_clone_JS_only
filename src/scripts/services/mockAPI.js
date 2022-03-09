const MOCK_SERVICE = {
  url: "https://6218fefb81d4074e859e849d.mockapi.io/api",
  endPoints: {
    pints: "/pinterst/pinterest/",
  },
  getPints() {
    return this.url + this.endPoints.pints;
  },
  getPint(id) {
    return this.url + this.endPoints.pints + id;
  },
};

const getPint = (id) => {
  return new Promise((resolve, reject) => {
    return fetch(BASE_SERVICE.getPint(id))
      .then((response) => {
        if (response.ok) {
          const post = response.json();
          resolve(post);
        } else {
          reject(console.log(`Pint not found`))
        }
  })
})}

const getPints = () => {
  return fetch(MOCK_SERVICE.getPints())
    .then((response) => response.json())
    .then((data) => data);
}

export { getPint, getPints }