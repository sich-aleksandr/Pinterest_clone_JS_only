function Menu(root) {
    this.root = document.querySelector("#menu");
    
    this.open = function (x, y) {
        this.root.classList.add('open');
        this.root.style.top = `${y - 70}px`;
        this.root.style.left = `${x + 60}px`;
    };
    
    this.close = function () {
        this.root.classList.remove('open');
    };
}

const menu = new Menu();

export { menu };
