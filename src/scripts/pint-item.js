// Logic For one Pint Item
const btnOpenModal = document.querySelector('#show-modal');
const closeModal = document.querySelector('.modal');
const modal = new Modal(document.querySelector('.modal'))

btnOpenModal.addEventListener('click', () => {
    modal.open();
});
closeModal.addEventListener('click', () => {
    modal.close();
});

function Modal(root) {
    this.root = root;

    this.open = function () {
        this.root.style.display = 'flex';
    }
    this.close = function () {
        this.root.style.display = 'none'
    }
}


function RenderOnePint({}) {
    this.root = null;
    this.id = null;
}

