function Menu(root) {
  this.root = document.querySelector("#menu");
  
  this.open = function (x, y) {
      const windowWidth = document.documentElement.clientWidth;
      this.root.classList.add('open');
      this.root.style.top = `${y - 70}px`;
      document.addEventListener('click', this.hendleMenu)
      document.addEventListener('wheel', () => this.close() )
      if (windowWidth >= (x + 60 + 300)) {
          this.root.style.left = `${x + 60}px`;
      } else {
          this.root.style.left = `${windowWidth - 300}px`;
      }     
  };
  
  this.close = function () {
      this.root.classList.remove('open');
  };
  this.hendleMenu = ({ target }) => {
      if (target.type !== "button") {
          this.close();
        }
  }
}

const menu = new Menu();

export { menu };
