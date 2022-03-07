import { menu } from "./components/Menu.js"
import { modalСomplaint, modalAddDesk } from "./components/ModalСomplaints.js";
import { allPints } from "./components/Pint-item.js";
import { toast } from "./components/Toast.js";


const btnModalAddDesk = document.querySelector("#btn-modal-add-desk");
btnModalAddDesk.addEventListener('click', () => {
    modalAddDesk.open()
}) 

app();

function app () {
  allPints;
  toast;
  modalСomplaint.init();
}


