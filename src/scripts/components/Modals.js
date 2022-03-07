import { pintId } from "./Pint-item.js";
import { getLocalData, setLocalData, DESK_LISK_KEY } from "../servises/storageAPI.js";

const complaints = [
  {
    title: "Спам",
    subtitle: "Вводящие в заблуждение или повторяющиеся публикации",
  },
  {
    title: "Изображения обнаженного тела или порнография",
    subtitle: "Содержимое сексуального характера",
  },
  {
    title: "Членовредительство",
    subtitle: "Расстройства пищевого поведения, нанесение травм себе, суицид",
  },
  {
    title: "Ложная информация",
    subtitle: "Ложная информация о здоровье или заговоры",
  },
  {
    title: "Агрессивные действия",
    subtitle:
      "Предрассудки, стереотипы, идея превосходства белой расы, оскорбления",
  },
  {
    title: "Опасные товары",
    subtitle: "Наркотики, оружие, регулируемые товары",
  },
  {
    title: "Преследование или нарушение конфиденциальности",
    subtitle: "Оскорбления, угрозы, публикация персональных данных",
  },
  {
    title: "Сцены насили",
    subtitle: "Графическое изображение или пропаганда насилия",
  },
  {
    title: "Это моя интеллектуальная собственность",
    subtitle: "Нарушение авторских прав или прав на товарный знак",
  },
];

function modalAddDesk() {
  this.root = document.querySelector("#modal-add");

  this.init = function () {
    document
      .querySelector("#btn-modal-add-desk")
      .addEventListener("click", this.open);
    this.root.addEventListener("click", this.handleModalAdd);
  };

  this.open = () => {
    this.root.classList.add("open");
  };

  this.handleModalAdd = (event) => {
    if (event.target.type === "radio") {
        this.add();
    } else {
        this.close();
    }s
  };

  this.add = function () {
    const pintList = getLocalData(DESK_LISK_KEY);
    pintList[event.target.value - 1].push(pintId);
    setLocalData(DESK_LISK_KEY, pintList);
    this.close();
  };

  this.close = (target) => {
    this.root.classList.remove("open");
  };
}

function ModalСomplaints() {
  this.root = document.querySelector("#modal-complaints");

  this.init = function () {
    this.render();
    this.root.addEventListener("click", this.close);
    document
      .querySelector("#btn-modal-complaint")
      .addEventListener("click", this.open);
  };

  this.handleComplainst = (event) => {};

  this.open = () => {
    this.root.classList.add("open");
  };

  this.close = ({ target }) => {
    if (target.dataset.close) {
      this.root.classList.remove("open");
    }
  };

  this.render = function () {
    this.modalBody = document.querySelector("#modal-body");
    complaints.forEach((complaint) => {
      this.modalBody.insertAdjacentHTML(
        "beforeend",
        `
                <label>
                    <div class="modal__body-item">
                        <div class="item-choice">
                            <input type="checkbox" class="checkbox">
                            <span class="fake"></span>
                        </div>
                        <div class="item-text">
                            <h3 class="item-text-title">${complaint.title}</h3>
                            <p class="item-text-subtitle">${complaint.subtitle}</p>
                        </div>
                    </div>
                </label>`
      );
    });
  };
}

const modalСomplaint = new ModalСomplaints();
const modaladd = new modalAddDesk();

export { modalСomplaint, modaladd };
