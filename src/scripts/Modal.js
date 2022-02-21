function createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="width: ${options.width}">
                <div class="modal-header">
                    <h1 class="modal-title">${options.title || ''}</h1>
                </div>
                <div class="modal-body">
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                    <div class="modal-footer-btn">
                        <div class="modal-footer-button"><button class="btn" data-close="true">Отмена</button></div>
                        <div class="modal-footer-button"><button class="btn btn-next" type="submit" formaction="#">Далее</button></div>
                    </div>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}

function Modal (option) {
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
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice1"><input type="radio" id="complaintChoice1" name="complaint" value="spam"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Спам</div>
                <div class="complaint-text-subtitle">Вводящие в заблуждение или повторяющиеся публикации</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice2"><input type="radio" id="complaintChoice2" name="complaint" value="pornography"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Изображения обнаженного тела или порнография</div>
                <div class="complaint-text-subtitle">Содержимое сексуального характера</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice3"><input type="radio" id="complaintChoice3" name="complaint" value="self-mutilation"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Членовредительство</div>
                <div class="complaint-text-subtitle">Расстройства пищевого поведения, нанесение травм себе, суицид</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice4"><input type="radio" id="complaintChoice4" name="complaint" value="fake"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Ложная информация</div>
                <div class="complaint-text-subtitle">Ложная информация о здоровье или заговоры</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice5"><input type="radio" id="complaintChoice5" name="complaint" value="aggression"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Агрессивные действия</div>
                <div class="complaint-text-subtitle">Предрассудки, стереотипы, идея превосходства белой расы, оскорбления</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice6"><input type="radio" id="complaintChoice6" name="complaint" value="danger"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Опасные товары</div>
                <div class="complaint-text-subtitle">Наркотики, оружие, регулируемые товары</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice7"><input type="radio" id="complaintChoice7" name="complaint" value="the-pursuit"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Преследование или нарушение конфиденциальности</div>
                <div class="complaint-text-subtitle">Оскорбления, угрозы, публикация персональных данных</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice8"><input type="radio" id="complaintChoice8" name="complaint" value="violence"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Сцены насилия</div>
                <div class="complaint-text-subtitle">Графическое изображение или пропаганда насилия</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice9"><input type="radio" id="complaintChoice9" name="complaint" value="own"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Это моя интеллектуальная собственность</div>
                <div class="complaint-text-subtitle">Нарушение авторских прав или прав на товарный знак</div>
            </div>
        </div>`,
})

const modalAddDesk = new Modal({
    title: 'Выберите доску',
    content: `
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice1"><input type="radio" id="complaintChoice1" name="complaint" value="spam"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Доска 1</div>
                <div class="complaint-text-subtitle">Понравившиеся вам пины</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice2"><input type="radio" id="complaintChoice2" name="complaint"
                        value="pornography"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Доска 2</div>
                <div class="complaint-text-subtitle">Понравившиеся вам пины</div>
            </div>
        </div>
        <div class="complaint">
            <div class="complaint-choice">
                <label for="complaintChoice3"><input type="radio" id="complaintChoice3" name="complaint"
                        value="self-mutilation"></label>
            </div>
            <div class="complaint-text">
                <div class="complaint-text-title">Доска 3</div>
                <div class="complaint-text-subtitle">Понравившиеся вам пины</div>
            </div>
        </div>`,
})

export { modalСomplaint, modalAddDesk };