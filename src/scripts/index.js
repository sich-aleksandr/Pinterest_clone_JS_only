import { modalСomplaint, modaladd } from "./components/Modals.js";
import { allPints } from "./components/Pint-item.js";
import { toast } from "./components/Toast.js";

app();

function app () {
  allPints;
  toast;
  modalСomplaint.init();
  modaladd.init();
}


