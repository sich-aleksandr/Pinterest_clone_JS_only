import { createElement } from "../utils/utils.js"

function Toast(options) {
  this.init = function () {
    this.root = createToast();
    this.root.addEventListener("click", this.handleToast);
    this.start();
  };
  this.start = function () {
    new Promise((resolve) => {
      setTimeout(() => {
        this.open();
        resolve();
      }, 3000);
    }).then(() => {
      setTimeout(() => {
        this.close();
      }, 2000);
    });
  };
  this.handleToast = (event) => {
    if (event.target.type == "button") {
      this.close();
    }
  };
  this.open = function () {
    this.root.classList.add("open-toast");
  };
  this.close = function () {
    this.root.classList.remove("open-toast");
  };
}

function createToast() {
  const toast = createElement("div", "toast-wrapper");
  const toastModal = createElement("div", "toast");
  const toastHeader = createElement("div", "toast__heading");
  const toastTitle = createElement("h3", "toast__heading-title", "Ку!");
  const toastBtn = createElement("button", "toast__heading-btn--close", "X");
  toastBtn.type = "button";
  toastBtn.id = "toast-close";
  const toastPragraf = createElement(
    "p",
    "toast__text",
    "Клади КЦ — получишь гравицаппу"
  );
  toastHeader.append(toastTitle, toastBtn);
  toastModal.append(toastHeader, toastPragraf);
  toast.append(toastModal);
  document.body.appendChild(toast);
  return toast;
}

const toast = new Toast().init();

export { toast };
