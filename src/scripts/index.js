import { menu } from "./Menu.js"
import { modalСomplaint, modalAddDesk } from "./Modal.js"

const btnOpenMenu = document.querySelector("#add-button");
const closeMenu = document.querySelector(".menu");
btnOpenMenu.addEventListener("click", () => {
    menu.open();
});
closeMenu.addEventListener("click", () => {
    menu.close();
});

const btnModalAddDesk = document.querySelector("#btn-modal-add-desk");
btnModalAddDesk.addEventListener('click', () => {
    modalAddDesk.open()
})

const btnModalСomplaint = document.querySelector("#btn-modal-complaint");
btnModalСomplaint.addEventListener('click', () => {
    modalСomplaint.open()
})