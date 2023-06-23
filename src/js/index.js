import '@/index.html';
import '@/scss/index.scss';
import Buttons from '@/js/Buttons';
import init from "@/js/init";
import createUrl from '@/js/createUrl';
import dataBase from '@/js/dataBase';
import xhrRequest from '@/js/xhr';
import fetchRequest from '@/js/fetch';
import axiosRequest from '@/js/axios';
import makeRequests from '@/js/makeRequests';

localStorage.clear();

fetch(createUrl('login'), {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dataBase.accessKeys)
})
    .then(response => response.json())
    .then(res => localStorage.setItem('token', res.token))
    .catch(res => console.log(res));

init(
    Buttons,
    dataBase,
    createUrl,
    xhrRequest,
    fetchRequest,
    axiosRequest,
    makeRequests
);



