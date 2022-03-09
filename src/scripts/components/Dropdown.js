function DropdownMenu() {
    this.root = document.querySelector("#dropdown-content");
    

    this.init = function () {
        
        document.querySelector("#dropdown-menu-btn").addEventListener("click", this.open);
        this.root.addEventListener("click", this.hendleDropdownMenu);
    };

    this.open = () => {
        this.root.classList.add("open");
    };

    this.close = () => {
        this.root.classList.remove("open");
    }
    this.hendleDropdownMenu = ({ target }) => {
        if (target.type !== "button") {
            this.close();
        }
    }
}

const dropdownMenu = new DropdownMenu().init();

export { dropdownMenu };