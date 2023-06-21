export default function createProjectListItem(data) {
    let { projectName, projectCode, userActions, adminActions } = data;
    
    return `
    <div class="project-item list-item">
        <div class="list-item__group">
            <h4 class="list-item__title">
                ${projectName}
            </h4>
            <div class="list-item__description">
                <div class="list-item__set">
                    <p class="list-item__code">${projectCode}</p>
                    <p class="list-item__user-info">${userActions}</p>
                </div>
                <p class="list-item__admin-info">${adminActions}</p>
            </div>
        </div>
       <div class="list-item__wrapper" id="close">
        <button class="list-item__btn" data-action="toggle">
            <svg width="3" height="13">
                <use xlink:href="#dots" />
            </svg>
        </button>
            <ul class="list-item__dropdown-menu dropdown-menu">
                <li class="dropdown-menu__item">
                    <a class="dropdown-menu__link" href="#">Редактировать</a>
                </li>
                <li class="dropdowm-menu__item">
                    <a class="dropdown-menu__link dropdown-menu__link_red" href="#">Удалить</a>
                </li>
            </ul>
        </div>
    </div>
    `;
}