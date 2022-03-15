function ToastCompleted(words) {
  this.root = document.querySelector("#toast-completed");
  this.init = function (words) {
    this.open(words);
    this.closeTimeout();
    this.root.addEventListener("click", this.handleToastCompleted);
  };

  this.handleToastCompleted = (event) => {
    if (event.target.type === "button") {
      this.close();
    }
  };
  this.open = function (words) {
    this.root.classList.add("open");
    document.querySelector("#toast-title").innerHTML = `${words}`;
  };

  this.close = function () {
    this.root.classList.remove("open");
  };

  this.closeTimeout = function () {
    setTimeout(() => {
      this.root.classList.remove("open");
    }, 4000);
  };
}

const toastCompleted = new ToastCompleted();

export { toastCompleted };

