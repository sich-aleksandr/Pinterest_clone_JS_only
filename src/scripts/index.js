import { menu } from "./Menu.js"

const btnOpenMenu = document.querySelector("#show-menu");
const closeMenu = document.querySelector(".menu");
btnOpenMenu.addEventListener("click", () => {
    menu.open();
    });
closeMenu.addEventListener("click", () => {
    menu.close();
    });