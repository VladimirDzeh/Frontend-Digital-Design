import axios from 'axios';

export default function axiosRequest(method, url, body = {}) {
    axios({
        method: method,
        url: url,
        data: body,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
        .then(responce => {
            if (responce.data.executor) {
                localStorage.setItem('taskId', responce.data._id);
            }
            if (!responce.data.executor && method !== 'DELETE') {
                localStorage.setItem('projectId', responce.data._id);
            }
            if (responce.data.message === 'Задача удалена') {
                localStorage.removeItem('taskId');
            }
            if (responce.data.message === 'Проект удален') {
                localStorage.removeItem('projectId');
            }

            console.log(responce.data);
        })
        .catch(error => console.log(error.message));
}


