function Menu(root) {
  this.root = document.querySelector("#menu");
  this.open = function (x, y) {
    this.root.style.display = "flex";
    this.root.style.top = `${y - 70}px`;
    this.root.style.left = `${x + 60}px`;
  };
  this.close = function () {
    this.root.style.display = "none";
  };
}
const menu = new Menu();

export { menu };
