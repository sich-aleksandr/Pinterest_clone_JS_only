import { menu } from "./components/Menu.js"
import { modalСomplaint, modalAddDesk } from "./components/Modal.js"
import { startToast, Toast } from "./components/toast.js"

// startToast();
new Toast().start()


const btnOpenMenu = document.querySelector("#add-button");
const closeMenu = document.querySelector(".menu");
btnOpenMenu.addEventListener("click", () => {
    menu.open(btnOpenMenu.getBoundingClientRect().left,  btnOpenMenu.getBoundingClientRect().top);
    
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




