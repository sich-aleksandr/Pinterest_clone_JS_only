import { pintId } from "./Pint-item.js";
import { deletedItems } from "../services/storageAPI.js";
import { toastCompleted } from "./ToastCompleted.js";

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

function ModalСomplaints() {
  this.root = document.querySelector("#modal-complaints");

  this.init = function () {
    this.render();
    this.root.addEventListener("click", this.handleComplainst);
    document
      .querySelector("#btn-modal-complaint")
      .addEventListener("click", this.open);
  };

  this.open = () => {
    this.root.classList.add("open");
  };

  this.handleComplainst = ({ target }) => {
    if (target.dataset.close) {
      this.close();
    } else if (target.type === "submit") {
      this.deletePint();
    }
  };

  this.close = () => {
    this.root.classList.remove("open");
  };

  this.deletePint = () => {
    const pintDeteleList = deletedItems.get();
    const btnNext = document.querySelector(".btn-next");
   
    if (pintDeteleList.includes(pintId, 0)) {
      toastCompleted.init(`Вы уже жаловались на этот пинт`)
    } else {
      btnNext.addEventListener("click", toastCompleted.init(`Спасибо за жалобу`));
      pintDeteleList.push(pintId);
      deletedItems.set(pintDeteleList);
    }
    this.close();
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

export { modalСomplaint };