export default class Buttons {
    constructor(parent) {
        this.parent = document.querySelector(parent);
        

    }


    render() {
        this.parent.insertAdjacentHTML(
            "afterbegin",
            `<ul class="buttons">
                <li class="buttons__item">
                    <button class="buttons__click">Создать с XML</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click">Создать с Fetch</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click">Создать с Axios</button>
                </li>
            </ul>
            <ul class="buttons">
                <li class="buttons__item">
                    <button class="buttons__click">Получить с XML</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click">Получить с Fetch</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click">Получить с Axios</button>
                </li>
            </ul>
            <ul class="buttons">
                <li class="buttons__item">
                    <button class="buttons__click">Редактировать с XML</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click">Редактировать с Fetch</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click">Редактировать с Axios</button>
                </li>
            </ul>
            <ul class="buttons">
                <li class="buttons__item">
                    <button class="buttons__click">Удалить с XML</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click">Удалить с Fetch</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click">Удалить с Axios</button>
                </li>
            </ul>`
            )
    }
}