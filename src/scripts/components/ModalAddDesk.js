import { pintId } from "./Pint-item.js";
import { localDataList } from "../services/storageAPI.js";

function modalAddDesk() {
  this.root = document.querySelector("#modal-add");

  this.init = function () {
    document
      .querySelector("#btn-modal-add-desk")
      .addEventListener("click", this.open);
    this.root.addEventListener("click", this.handleModalAdd);
  };

  this.open = () => {
    this.root.classList.add("open");
  };

  this.handleModalAdd = (event) => {
    if (event.target.type === "radio") {
      this.add();
    } else {
      this.close();
    }
    s;
  };

  this.add = function () {
    const pintList = localDataList.get();
    console.log(pintList);
    pintList[event.target.value - 1].push(pintId);
    localDataList.set(pintList);
    this.close();
  };

  this.close = (target) => {
    this.root.classList.remove("open");
  };
}

const modaladd = new modalAddDesk();

export { modalСomplaint, modaladd };