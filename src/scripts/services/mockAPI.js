const apiUrl = "https://6218fefb81d4074e859e849d.mockapi.io/api/pinterst/pinterest";

function getDBdata(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

// const MOCK_SERVICE = {
//   url: "https://jsonplaceholder.typicode.com/",
//   endPoints: {
//     posts: "posts/",
//     todos: "todos/",
//   },
//   getPosts() {
//     return this.url + this.endPoints.posts;
//   },
//   getPost(id) {
//     return this.url + this.endPoints.posts + id;
//   },
// };


export { getDBdata, apiUrl }