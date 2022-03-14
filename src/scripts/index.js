import { menu } from "./components/Menu";
import { modalAdd } from "./components/ModalAddDesk.js";
import { modalСomplaint } from "./components/ModalComplaints.js";
import { renderPints, displayOneDesk } from "./components/Pint-item.js";
import { getPints} from "./services/mockAPI.js";
import { toast } from "./components/Toast.js";

document.addEventListener("DOMContentLoaded", app);

document
  .querySelector(".dropdown-menu-content")
  .addEventListener("change", function () {
    document.querySelector(".pin_container").innerHTML = "";
    displayOneDesk(this.value);
  });

function app() {
  getPints().then(renderPints);
  toast; // load toast on start of app

  //Menus
  menu; // menu with desks
  modalСomplaint.init();
  modalAdd.init();
}
