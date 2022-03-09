// Logic For one Pint Item
import { getDBdata, apiUrl } from "../services/mockAPI.js";
import { createElement, getRandomInt } from "../utils/utils.js";
import { menu } from "./Menu.js"

let pintId;

const sizeStyles = {
  0: "card_small",
  1: "card_medium",
  2: "card_large",
}

function Pint({ imageURL, avatarURL, description, id }) {
  this.root = null;
  this.path = document.querySelector('.pin_container');
  this.image = `url(${imageURL})`;
  this.description = description;
  this.id = `pint-${id}`;
  this.avatar = `url(${avatarURL})`;

  this.init = function () {
    this.root = this.render();
    this.root.addEventListener("click", this.handlePint);
  }
  this.render = function () {
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
  };
  this.handlePint = (event) => {
    if (event.target.type === "button") {
      menu.open(event.clientX, event.clientY);
      pintId = this.id.slice(5);
    }
  }
  this.hidePint = function () {
    this.path.style.display = "none";
  };
}
function renderAllPints(datas) {
  datas.forEach((item) => {
    new Pint(item).init();
  });
}

const allPints = getDBdata(apiUrl).then(renderAllPints);

export { allPints, pintId};
