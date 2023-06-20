import icon from '@/assets/images/user-icon.png';

export default function createNavbar() {
    return `
        <nav class="menu">
            <button class="menu__btn menu__btn_active" data-action="active">Проекты</button>
            <button class="menu__btn" data-action="active">Задачи</button>
            <button class="menu__btn" data-action="active">Пользователи</button>
            <div class="menu__inner" id="close">
                <button class="menu__btn btn-menu" data-action="toggle">
                    <img
                        class="btn-menu__icon" src=${icon} width="24" height="24" alt="user-icon"
                    >
                    <svg width="13" height="8">
                        <use xlink:href="#dropdown-arrow" />
                    </svg>
                </button>
                <ul class="menu__dropdown dropdown-menu">
                    <li class="dropdown-menu__item">
                        <a class="dropdown-menu__link" href="#">Профиль</a>
                    </li>
                    <li class="dropdowm-menu__item">
                        <a class="dropdown-menu__link" href="#">Выход</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
}