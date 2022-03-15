function MenuHeader() {
  this.root = document.querySelector("#header__menu");
  this.init = function () {
    this.open();
  };

  this.open = function () {
    const burger = document.querySelector("#header__burger");
    burger.addEventListener("click", () => {
      this.root.classList.toggle("activ");
    });
  };
}

const menuHeader = new MenuHeader().init();

export { menuHeader };
