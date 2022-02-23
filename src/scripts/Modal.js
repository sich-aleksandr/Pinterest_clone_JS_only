function createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('beforeend', `
        <div class="modal__overlay" data-close="true">
            <div class="modal__window">
                <div class="modal__header">
                    <div class="header-title">${options.title || ''}</div>
                </div>
                <div class="modal__body">
                    ${options.content || ''}
                </div>
                <div class="modal__footer">
                    <div class="modal__footer-btn">
                        <div class="footer-button"><button class="btn" data-close="true">Отмена</button></div>
                        <div class="footer-button"><button class="btn btn-next" type="submit" formaction="#">Далее</button></div>
                    </div>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}

function Modal(option) {
    const $modal = createModal(option);

    const modal = {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
        },
    }
    $modal.addEventListener('click', event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    })
    return modal
}

const modalСomplaint = new Modal({
    title: 'Жалоба на пин',
    content: `
        <label for="complaintChoice1">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="complaintChoice1" name="complaint" value="spam">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Спам</div>
                    <div class="item-text-subtitle">Вводящие в заблуждение или повторяющиеся публикации</div>
                </div>
            </div>
        </label>
        <label for="complaintChoice2">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="complaintChoice2" name="complaint" value="pornography">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Изображения обнаженного тела или порнография</div>
                    <div class="item-text-subtitle">Содержимое сексуального характера</div>
                </div>
            </div>
        </label>
        <label for="complaintChoice3">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="complaintChoice3" name="complaint" value="self-mutilation">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Членовредительство</div>
                    <div class="item-text-subtitle">Расстройства пищевого поведения, нанесение травм себе, суицид</div>
                </div>
            </div>
        </label>
        <label for="complaintChoice4">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="complaintChoice4" name="complaint" value="fake">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Ложная информация</div>
                    <div class="item-text-subtitle">Ложная информация о здоровье или заговоры</div>
                </div>
            </div>
        </label>
        <label for="complaintChoice5">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="complaintChoice5" name="complaint" value="aggression">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Агрессивные действия</div>
                    <div class="item-text-subtitle">Предрассудки, стереотипы, идея превосходства белой расы, оскорбления</div>
                </div>
            </div>
        </label>
        <label for="complaintChoice6">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="complaintChoice6" name="complaint" value="danger">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Опасные товары</div>
                    <div class="item-text-subtitle">Наркотики, оружие, регулируемые товары</div>
                </div>
            </div>
        </label>
        <label for="complaintChoice7">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="complaintChoice7" name="complaint" value="the-pursuit">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Преследование или нарушение конфиденциальности</div>
                    <div class="item-text-subtitle">Оскорбления, угрозы, публикация персональных данных</div>
                </div>
            </div>
        </label>
        <label for="complaintChoice8">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="complaintChoice8" name="complaint" value="violence">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Сцены насилия</div>
                    <div class="item-text-subtitle">Графическое изображение или пропаганда насилия</div>
                </div>
            </div>
        </label>
        <label for="complaintChoice9">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="complaintChoice9" name="complaint" value="own">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Это моя интеллектуальная собственность</div>
                    <div class="item-text-subtitle">Нарушение авторских прав или прав на товарный знак</div>
                </div>
            </div>
        </label>`,
})

const modalAddDesk = new Modal({
    title: 'Выберите доску',
    content: `
        <label for="boardChoice1">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="boardChoice1" name="board" value="board_1">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Доска 1</div>
                    <div class="item-text-subtitle">Понравившиеся вам пины</div>
                </div>
            </div>
        </label>
        <label for="boardChoice2">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="boardChoice2" name="board" value="board_2">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Доска 2</div>
                    <div class="item-text-subtitle">Понравившиеся вам пины</div>
                </div>
            </div>
        </label>
        <label for="boardChoice3">
            <div class="modal__body-item">
                <div class="item-choice">
                    <input type="radio" class="radio" id="boardChoice3" name="board" value="board_3">
                    <span class="fake"></span>
                </div>
                <div class="item-text">
                    <div class="item-text-title">Доска 3</div>
                    <div class="item-text-subtitle">Понравившиеся вам пины</div>
                </div>
            </div>
        </label>`,
})

export { modalСomplaint, modalAddDesk };