import icon from '@/assets/images/user-icon.png';

export default function createTackListItem() {
    return `
        <div class="task-item list-item">
            <div class="list-item__group">
                <div class="list-item__inner">
                    <h4 class="list-item__title">
                        Название Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique itaque quae distinctio eos porro, libero placeat necessitatibus nesciunt mollitia accusantium dolore illum velit saepe! Quasi earum perferendis voluptates nihil?
                        Similique necessitatibus asperiores eius ipsam commodi quibusdam, ut, totam perferendis delectus nesciunt corrupti! Ut sapiente accusantium in commodi laudantium tempora velit consequuntur nesciunt quidem. Sapiente consequuntur aperiam quos esse eos.
                        Blanditiis rerum asperiores similique repudiandae veritatis, molestiae sunt. Hic commodi porro impedit mollitia ducimus? Molestiae provident dignissimos iste, reprehenderit suscipit ab quis doloremque voluptate quaerat distinctio facilis, perferendis, eos aliquid.
                        Velit reiciendis iure quae vero unde ipsa quos nemo, saepe, vitae tempora similique nihil eligendi. Consequatur nisi numquam dicta reprehenderit quos soluta quia totam, deleniti tempora praesentium temporibus ducimus nemo.
                        Rem, autem fugit voluptas quae ea tempore architecto corrupti adipisci qui, rerum aliquam est vel alias voluptatum quaerat eaque nemo, libero magnam! Cumque odit nisi nam assumenda animi alias repudiandae!
                    </h4>
                    <img
                        class="list-item__icon btn-menu__icon" src=${icon} width="24"height="24" alt="user-icon"
                    >
                </div>
                <div class="list-item__description">
                    <div class="list-item__set">
                        <p class="list-item__code">#1</p>
                        <p class="list-item__user-info">Иванов И.И. создал 1 час назад</p>
                        <div class="list-item__status">
                            Черновик
                        </div>
                    </div>
                    <p class="list-item__admin-info">Баранов В.В. изменил 1 минуту назад</p>
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