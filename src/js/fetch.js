export default function fetchRequest(method, url, body) {
    let data;

    method === 'DELETE' ? data = '' : data = JSON.stringify(body);

    fetch(url, {
        method: method,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: data

    })
        .then(res => res.json())
        .then(res => {
            if (res.executor) {
                localStorage.setItem('taskId', res._id);
            }
            if (!res.executor && method !== 'DELETE') {
                localStorage.setItem('projectId', res._id);
            }
            if (res.message === 'Задача удалена') {
                localStorage.removeItem('taskId');
            }
            if (res.message === 'Проект удален') {
                localStorage.removeItem('projectId');
            }

            console.log(res);
        })
        .catch(error => console.log(`Error: ${error}`));
}