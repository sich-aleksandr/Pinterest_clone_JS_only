import { displayOneDesk } from "./Pint-item.js";

const selectDesk = document
  .querySelector("#desktop-select")
  .addEventListener("change", function () {
    if (this.value === '333') {
      document.location.href ="/";
      return;
    } else {
      displayOneDesk(this.value);
      document.querySelector("#load-more").classList.add("btn--close");
    }
  });

const selectMobile = document
  .querySelector("#mobile-select")
  .addEventListener("change", function () {
    if (this.value === '333') {
      document.location.href ="/";
      return;
    } else {
      displayOneDesk(this.value);
      document.querySelector("#load-more").classList.add("btn--close");
    }
  });

export { selectDesk, selectMobile };
