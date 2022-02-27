function Toast(options) {
  this.root = createToast();
  const closeBtn = document.querySelector("#toast-close");
  closeBtn.addEventListener("click", () => {
    this.close();
  });
  this.start = function () {
    new Promise((resolve) => {
      setTimeout(() => resolve(this.open()), 15000);
    }).then((resolve) => {
      setTimeout(() => {
        this.close();
      }, 5000);
    });
  };
  this.open = function () {
    this.root.style.display = "flex";
  };
  this.close = function () {
    this.root.style.display = "none";
  };
}

function createToast() {
  const toast = createElement("div", "toast-wrapper");
  const toastModal = createElement("div", "toast");
  const toastHeader = createElement("div", "toast__heading");
  const toastTitle = createElement("h3", "toast__heading-title", "Ку!");
  const toastBtn = createElement("button", "toast__heading-closebtn", "X");
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

// Utils

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  const textElement = document.createTextNode(text);
  element.className = className;
  element.append(textElement);
  return element;
}

export { startToast, Toast };
