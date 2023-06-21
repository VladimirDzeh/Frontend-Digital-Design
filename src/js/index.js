import '@/scss/index.scss';
import '@/js/register.js';
import dataBase from '@/js/dataBase';

import createMarkup from '@/components/appMurkup/appMurkup.js';
import events from '@/js/events.js';

function init(data) {
    const app = document.querySelector('#app');
    const render = createMarkup(data);
    app.insertAdjacentHTML("afterbegin", render);
}

init(dataBase);

events();




