// Logic For one Pint Item
import { getPints, getPint } from "../services/mockAPI.js";
import { createElement, getRandomInt } from "../utils/utils.js";
import { menu } from "./Menu.js";
import { localDataList, deletedItems } from "../services/storageAPI";

let pintId;
let start = 20;
let end = 30;

const sizeStyles = {
  0: "card_small",
  1: "card_medium",
  2: "card_large",
};

function Pint({ imageURL, avatarURL, description, id }) {
  this.root = null;
  this.path = document.querySelector(".pin-container");
  this.image = `url(${imageURL})`;
  this.description = description;
  this.id = `pint-${id}`;
  this.avatar = `url(${avatarURL})`;

  this.init = function () {
    this.root = this.render();
    this.root.addEventListener("click", this.handlePint);
  };
  this.render = function () {
    const pint = createElement("div", `card ${sizeStyles[getRandomInt(3)]}`);
    const button = createElement("button", "card__menu-button", "ADD");
    const description = createElement("div", "card__description");
    const avatarImage = createElement("div", "card__avatar");
    const text = createElement("div", "card__text", this.description);
    const imageBoard = this.isBanned();
    button.type = "button";
    pint.id = this.id;
    avatarImage.style.backgroundImage = this.avatar;

    imageBoard.append(button);
    description.append(avatarImage, text);
    pint.append(imageBoard, description);
    this.path.append(pint);

    return pint;
  };

  this.handlePint = (event) => {
    if (event.target.type === "button") {
      menu.open(event.clientX, event.clientY);
      pintId = this.id.slice(5);
    }
  };

  this.isBanned = function () {
    const bannetItems = deletedItems.get();
    const imageBoard = createElement("div", "card__image-board");
    if (bannetItems.includes(id, 0)) {
      imageBoard.style.background = `#d91a1ae3 ${this.image} center / cover`;
      imageBoard.style.backgroundBlendMode = "hard-light";
      imageBoard.classList.add("card__image-board--banned");
    } else {
      imageBoard.style.backgroundImage = this.image;
    }
    return imageBoard;
  };
}

function renderPints(datas) {
  datas.forEach((item) => {
    new Pint(item).init();
  });
}

function displayPints(start, end) {
  let leng = getPints().then((item) => {
    const pints = item.slice(start, end);
    renderPints(pints);
  });
}
function displayOneDesk(n) {
  document.querySelector(".pin-container").textContent = "";
  const pintsOnDesk = localDataList.get();
  pintsOnDesk[n].forEach((element) => {
    getPint(element).then((element) => {
      const getData = [element];
      renderPints(getData);
    });
  });
}

function loadMore(step) {
  displayPints(start, end);
  start = start + step;
  end = end + step;
}

export { renderPints, pintId, displayOneDesk, displayPints, loadMore };
