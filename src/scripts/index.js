import { menu } from "./components/Menu";
import { modalAdd } from "./components/ModalAddDesk.js";
import { modalСomplaint } from "./components/ModalComplaints.js";
import { renderPints } from "./components/Pint-item.js";
import { getPints} from "./services/mockAPI.js";
import { toast } from "./components/Toast.js";
export { selectDesk } from "./components/Dropdown.js";

document.addEventListener("DOMContentLoaded", app);

function app() {
  getPints().then(renderPints);
  toast; // load toast on start of app

  //Menus
  menu; // menu with desks
  selectDesk; // event for select
  modalСomplaint.init();
  modalAdd.init();
}
