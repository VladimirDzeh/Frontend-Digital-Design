export default class Buttons {
    constructor(parent, dataAction) {
        this.parent = parent;
        this.dataAction = dataAction;
    }

    render() {
        this.parent.insertAdjacentHTML(
            "afterbegin",
            `<ul class="buttons">
                <li class="buttons__item">
                    <button class="buttons__click" data-action="post-${this.dataAction}-xml">Создать с XML</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click" data-action="post-${this.dataAction}-fetch">Создать с Fetch</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click" data-action="post-${this.dataAction}-axios">Создать с Axios</button>
                </li>
            </ul>
            <ul class="buttons">
                <li class="buttons__item">
                    <button class="buttons__click" data-action="get-${this.dataAction}-xml">Получить с XML</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click" data-action="get-${this.dataAction}-fetch">Получить с Fetch</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click" data-action="get-${this.dataAction}-axios">Получить с Axios</button>
                </li>
            </ul>
            <ul class="buttons">
                <li class="buttons__item">
                    <button class="buttons__click" data-action="put-${this.dataAction}-xml">Редактировать с XML</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click" data-action="put-${this.dataAction}-fetch">Редактировать с Fetch</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click" data-action="put-${this.dataAction}-axios">Редактировать с Axios</button>
                </li>
            </ul>
            <ul class="buttons">
                <li class="buttons__item">
                    <button class="buttons__click" data-action="delete-${this.dataAction}-xml">Удалить с XML</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click" data-action="delete-${this.dataAction}-fetch">Удалить с Fetch</button>
                </li>
                <li class="buttons__item">
                    <button class="buttons__click" data-action="delete-${this.dataAction}-axios">Удалить с Axios</button>
                </li>
            </ul>`
        )
    }
}