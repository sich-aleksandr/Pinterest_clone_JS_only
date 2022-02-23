function Menu(root) {
    this.root = document.querySelector('#menu');

    this.open = function () {
        this.root.style.display = "flex";
        };
    this.close = function () {
        this.root.style.display = "none";
        };
}
const menu = new Menu()

export { menu };
