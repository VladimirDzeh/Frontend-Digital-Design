export default function xhrRequest(method, url, body) {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('token')}`);
    xhr.setRequestHeader("Content-Type", 'application/json;charset=utf-8');
    xhr.responseType = 'json';

    if (method === 'GET' || method === 'DELETE') {
        xhr.send();
    } else {
        xhr.send(JSON.stringify(body));
    }

    xhr.onload = function () {
        if (xhr.status === 200) {
            if (xhr.response.executor) {
                localStorage.setItem('taskId', xhr.response._id);
            }
            if (!xhr.response.executor && method !== 'DELETE') {
                localStorage.setItem('projectId', xhr.response._id);
            }
            if (xhr.response.message === 'Задача удалена') {
                localStorage.removeItem('taskId');
            }
            if (xhr.response.message === 'Проект удален') {
                localStorage.removeItem('projectId');
            }
            
            console.log(xhr.response);

        } else {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
    }
}