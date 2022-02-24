

function Menu(root) {
    this.root = document.querySelector('#menu');
    this.open = function (x, y) {
        this.root.style.display = "flex";
        this.root.style.top = `${y + 125}px`;
        this.root.style.left =`${x - 120}px`;
        };
    this.close = function () {
        this.root.style.display = "none";
        };
}
const menu = new Menu()

export { menu };
