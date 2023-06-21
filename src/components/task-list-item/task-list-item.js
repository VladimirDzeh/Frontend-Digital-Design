import icon from '@/assets/images/user-icon.png';

export default function createTackListItem(data) {
    let { taskName, taskCode, userActions, taskStatus, adminActions } = data;
    
    return `
        <div class="task-item list-item">
            <div class="list-item__group">
                <div class="list-item__inner">
                    <h4 class="list-item__title">
                        ${taskName}
                    </h4>
                    <img
                        class="list-item__icon btn-menu__icon" src=${icon} width="24"height="24" alt="user-icon"
                    >
                </div>
                <div class="list-item__description">
                    <div class="list-item__set">
                        <p class="list-item__code">${taskCode}</p>
                        <p class="list-item__user-info">${userActions}</p>
                        <div class="list-item__status">
                            ${taskStatus}
                        </div>
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