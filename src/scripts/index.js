import { menu } from "./components/Menu";
import { modalAdd } from "./components/ModalAddDesk.js";
import { modalСomplaint } from "./components/ModalComplaints.js";
import { allPints } from "./components/Pint-item.js";
import { toast } from "./components/Toast.js";

document.addEventListener("DOMContentLoaded", app);


function app () {
  allPints; // add all pint item to DOM
  toast; // load toast on start of app

  //Menus
  menu; // menu with desks
  modalСomplaint.init();
  modalAdd.init();
}
