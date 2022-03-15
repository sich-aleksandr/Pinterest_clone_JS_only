import { menu } from "./components/Menu";
import { modalAdd } from "./components/ModalAddDesk.js";
import { modalСomplaint } from "./components/ModalComplaints.js";
import { displayPints, loadMore } from "./components/Pint-item.js";
import { getPints } from "./services/mockAPI.js";
import { toast } from "./components/Toast.js";
export { selectDesk } from "./components/Dropdown.js";
export { menuHeader } from "./components/MenuHeader.js";

document.addEventListener("DOMContentLoaded", app);

function app() {
  displayPints(0, 20);
  toast; // load toast on start of app

  document.querySelector("#load-more").addEventListener("click", () => {
    loadMore(10);
  });

  //Menus
  menu; // menu with desks
  menuHeader;
  selectDesk; // event for select
  modalСomplaint.init();
  modalAdd.init();
  menuHeader;
}
