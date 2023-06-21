import '@/index.html';
import '@/scss/index.scss';
import Buttons from '@/js/btnsClass.js';


const url = 'http://45.12.239.156:8081/api/login';
const data = {
    login: "dzekh.v",
    password: "jc63fk"
};

fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(res => localStorage.setItem('token', res.token))
    .catch(res => console.log(res));

new Buttons('#render').render();

