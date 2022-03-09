function Toast(options) {
  this.init = function () {
    this.root = document.querySelector('#toast');
    this.root.addEventListener("click", this.handleToast);
    this.start();
  };
  this.start = function () {
    new Promise((resolve) => {
      setTimeout(() => {
        this.open();
        resolve();
      }, 15000);
    }).then(() => {
      setTimeout(() => {
        this.close();
      }, 5000);
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

const toast = new Toast().init();

export { toast };
