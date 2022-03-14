import { displayOneDesk } from "./Pint-item.js";

const selectDesk = document
  .querySelector(".dropdown-menu-content")
  .addEventListener("change", function () {
    displayOneDesk(this.value);
    document.querySelector("#load-more").classList.add("btn--close");
    console.log(document.querySelector(".card__menu-button"));
    
  });

  export { selectDesk }