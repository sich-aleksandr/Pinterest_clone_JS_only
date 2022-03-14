import { displayOneDesk } from "./Pint-item.js";

const selectDesk = document
  .querySelector(".dropdown-menu-content")
  .addEventListener("change", function () {
    displayOneDesk(this.value);
  });

  export { selectDesk }