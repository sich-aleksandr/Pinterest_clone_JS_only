// Logic For one Pint Item
import { getPints, getPint } from "../services/mockAPI.js";
import { createElement, getRandomInt, fillArray } from "../utils/utils.js";
import { menu } from "./Menu.js";
import { localDataList, deletedItems } from "../services/storageAPI";

let pintId;

const sizeStyles = {
  0: "card_small",
  1: "card_medium",
  2: "card_large",
};

function Pint({ imageURL, avatarURL, description, id }) {
  this.root = null;
  this.path = document.querySelector(".pin_container");
  this.image = `url(${imageURL})`;
  this.description = description;
  this.id = `pint-${id}`;
  this.avatar = `url(${avatarURL})`;

  this.init = function () {
    this.root = this.render();
    this.root.addEventListener("click", this.handlePint);
  };
  this.render = function () {
    const bannetItems = deletedItems.get();
    if (bannetItems.includes(id, 0)) {
      const pint = createElement("div", `card ${sizeStyles[getRandomInt(3)]}`);
      const imageBoard = createElement(
        "div",
        "card__image-board card__image-board--banned"
      );
      imageBoard.style.background = `#d91a1ae3 ${this.image} center / cover`;
      imageBoard.style.backgroundBlendMode = "hard-light";
      // imageBoard.style.background = `linear-gradient(red 40%, yellow 30%, blue 65%),url("${this.image}`;
      const button = createElement("button", "card__menu-button", "ADD");
      button.type = "button";
      const description = createElement("div", "card__description");
      const avatarImage = createElement("div", "card__avatar");
      avatarImage.style.backgroundImage = this.avatar;
      const text = createElement("div", "card__text", this.description);
      imageBoard.append(button);
      description.append(avatarImage, text);
      pint.append(imageBoard, description);
      pint.id = this.id;
      this.path.append(pint);
      return pint;
    } else {
      const pint = createElement("div", `card ${sizeStyles[getRandomInt(3)]}`);
      const imageBoard = createElement("div", "card__image-board");
      imageBoard.style.backgroundImage = this.image;
      const button = createElement("button", "card__menu-button", "ADD");
      button.type = "button";
      const description = createElement("div", "card__description");
      const avatarImage = createElement("div", "card__avatar");
      avatarImage.style.backgroundImage = this.avatar;
      const text = createElement("div", "card__text", this.description);
      imageBoard.append(button);
      description.append(avatarImage, text);
      pint.append(imageBoard, description);
      pint.id = this.id;
      this.path.append(pint);
      return pint;
    }
  };

  this.handlePint = (event) => {
    if (event.target.type === "button") {
      menu.open(event.clientX, event.clientY);
      pintId = this.id.slice(5);
    }
  };
  this.hidePint = function () {
    this.path.style.display = "none";
  };
}

function renderPints(datas) {
  datas.forEach((item) => {
    new Pint(item).init();
  });
}

function displayPints(start, end) {
  let leng = getPints().then((item) => {
    datas = item.slice(start, end);
    renderPints(datas);
  });
}
function displayOneDesk(n) {
  document.querySelector(".pin_container").innerHTML = "";
  const pinst = localDataList.get();
  pinst[n].forEach((element) => {
    getPint(element).then((data) => {
      const getData = [data];
      renderPints(getData);
    });
  });
}

let start = 20;
let end = 30;
function loadMore(step) {
  displayPints(start, end);
  start = start + step;
  end = end + step;
}

export { renderPints, pintId, displayOneDesk, displayPints, loadMore };
