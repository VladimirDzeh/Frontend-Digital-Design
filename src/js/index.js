import '@/scss/index.scss';
import '@/js/register.js';

import createMarkup from '@/components/appMurkup/appMurkup.js';
import events from '@/js/events.js';

function init() {
    const app = document.querySelector('#app');
    const render = createMarkup();
    app.insertAdjacentHTML("afterbegin", render);
}

init();

events();




