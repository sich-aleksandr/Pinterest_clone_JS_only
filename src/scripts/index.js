import { menu } from "./components/Menu";
import { modalAdd } from "./components/ModalAddDesk.js";
import { modalСomplaint } from "./components/ModalComplaints.js";
import { renderPints, displayOneDesk} from "./components/Pint-item.js";
import { getPints, getPint } from "./services/mockAPI.js";
import { toast } from "./components/Toast.js";


document.addEventListener("DOMContentLoaded", app);

document.querySelector('#test-pint').addEventListener("click", () => {
  document.querySelector('.pin_container').innerHTML = "";
  displayOneDesk(0);
 
})


function displayOneDesk (n) {
  const pinst = localDataList.get();
  pinst[n].forEach(element => { 
    getPint(element).then(data => {
      const getData = [data];
      renderPints(getData)
    }); 
  });
}

function app () {
  getPints().then(renderPints);
  toast; // load toast on start of app

  //Menus
  menu; // menu with desks
  modalСomplaint.init();
  modalAdd.init();
}
