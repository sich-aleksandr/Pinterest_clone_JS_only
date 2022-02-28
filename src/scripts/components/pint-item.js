// Logic For one Pint Item
import { getUUID } from "../utils/utils.js";

function createPint() {
  const pint = document.createElement("div");
  pint.className = "card";
  pint.id = getUUID();
  const pintImage = document.createElement("div");
  pintImage.className = "card__image-board";
  const pintButton = document.createElement("button");
  pintButton.className = "card__menu-button";
  pintButton.textContent = "Add";
  pintButton.type = "button";
  pintButton.id = "add-button";
  const pintDescription = document.createElement("div");
  pintDescription.className = "card__description";
  const pintAvatar = document.createElement("div");
  pintAvatar.className = "card__avatar";
  const pintText = document.createElement("span");
  pintText.className = "card__text";
  pintText.textContent = "Description of the card";

  pintImage.append(pintButton);
  pintDescription.append(pintAvatar, pintText);
  pint.append(pintImage, pintDescription);
  document.body.appendChild(pint);
  return pint;
}

function Pint() {
  this.root = createPint();
}

const pint = new Pint();

export { pint };
