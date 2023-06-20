export default function createProjectListItem() {
    return `
    <div class="project-item list-item">
        <div class="list-item__group">
            <h4 class="list-item__title">
                Название Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quod quas culpa voluptatibus adipisci explicabo tempore in, harum eveniet sunt ducimus iste. Ex, ratione rerum consequuntur veniam laborum dignissimos accusamus?
                Nam quae aut impedit consequatur aspernatur repellat reprehenderit consectetur placeat natus. Mollitia odio tempora maxime officiis eligendi animi delectus voluptatem repellat rerum quo iure, minus laudantium. Voluptates rem recusandae totam.
                Corrupti nemo repellat voluptas tenetur, numquam cum ipsum nesciunt dignissimos sed, porro quia magni ipsa voluptate odio officia commodi reiciendis eveniet adipisci ipsam. Illo et placeat nemo vel aspernatur possimus?
                Voluptate illo exercitationem ipsum magnam sint aliquam tempora tenetur veniam fugiat expedita nobis delectus asperiores saepe laboriosam facere alias unde quod, necessitatibus soluta temporibus praesentium? Consectetur possimus excepturi laboriosam voluptatum.
                Incidunt reprehenderit nemo iure quae, vero expedita libero error, corporis pariatur aperiam vel quo, hic porro exercitationem sequi in saepe sint soluta nisi. Pariatur expedita deserunt a consequatur, aspernatur temporibus!
            </h4>
            <div class="list-item__description">
                <div class="list-item__set">
                    <p class="list-item__code">#1</p>
                    <p class="list-item__user-info">Иванов И.И. создал 1 час назад</p>
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