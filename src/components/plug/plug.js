export default function createPlug(content) {
    return `
    <div class="plug">
        <p class="plag__text">${content.plug}</p>
        <button class="plug__btn menu__btn">Добавить</button>
    </div>
    `;
}