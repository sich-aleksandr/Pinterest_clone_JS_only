// Logic For one Pint Item
import { getUUID } from "../utils/utils.js";

const apiUrl =
  "https://6218fefb81d4074e859e849d.mockapi.io/api/pinterst/pinterest";

function getDBdata(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}


const options = {
  description: "Description of the card",
  root: document.querySelector(".card"),
  id: getUUID(),
  avatar:
    'url("https://avatars.mds.yandex.net/i?id=1e2e6d599f29207a7cfe601dc89a85ba-5878684-images-thumbs&n=13&exp=1")',
  image:
    'url("https://img1.fonwall.ru/o/pt/ahri-league-of-legends-games-artwork-pfaj.jpeg?route=mid&h=750")',
};

function Pint({ avatar, id, image, description, root }) {
  this.root = root;
  this.image = image;
  this.description = description;
  this.id = id;
  this.avatar = avatar;

  this.render = function () {
    root.querySelector(".card__text").textContent = this.description;
    root.querySelector(".card__image-board").style["background-image"] =
      this.image;
    root.querySelector(".card__avatar").style["background-image"] = this.avatar;
    root.id = this.id;

  };
  this.hidePint = function () {
    this.root.style.display = 'none'
  }
}

const pint = new Pint(options);

export { pint };
