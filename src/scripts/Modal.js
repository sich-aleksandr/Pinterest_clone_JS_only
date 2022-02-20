function Modal(root) {
  this.root = root;
  const btnOpenModal = document.querySelector("#show-modal");
  const closeModal = document.querySelector(".modal");
  btnOpenModal.addEventListener("click", () => {
    this.open();
  });
  closeModal.addEventListener("click", () => {
    this.close();
  });
  this.open = function () {
    this.root.style.display = "flex";
  };
  this.close = function () {
    this.root.style.display = "none";
  };
}

export { Modal };
