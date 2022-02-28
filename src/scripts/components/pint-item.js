// Logic For one Pint Item
import { getUUID } from "../utils/utils.js";

function createPint() {
  const pint = document.createElement("div");
  pint.classList.add("pint");
  pint.innerHTML(
    "afterBegin",
    `<div class='card'>
      <div class='card__image-board'>
          <button id="add-button" class='card__menu-button'>Add</button>
      </div>
      <div class='card__description'>
          <div class='card__avatar'></div>
          <span class='card__text'> Description of the card </span>
      </div>
  </div>`
  );

  document.body.appendChild(pint);
  return pint;
}

function Pint() {
  this.root = null;
  this.id = getUUID;
  const pint = createPint();
}

const pint = new Pint();

export { pint };
