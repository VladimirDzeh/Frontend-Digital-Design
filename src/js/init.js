export default function init(Buttons, dataBase, createUrl, xhrRequest, fetchRequest, axiosRequest, makeRequests) {
    const container = document.querySelector('#render');
    new Buttons(container, 'projects').render();

    document.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if (target.dataset.action === 'projects') {
            container.innerHTML = '';
            new Buttons(container, 'projects').render();
            document.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('buttons__click_active');
            });
        }

        if (target.dataset.action === 'tasks') {
            container.innerHTML = '';
            new Buttons(container, 'tasks').render();
            document.querySelectorAll('button').forEach(btn => {
                btn.classList.add('buttons__click_active');
            });
        }

        let { xhr, fetch, axios } = dataBase;

        makeRequests(
            target.dataset.action,
            'projects',
            createUrl,
            xhr.projects,
            fetch.projects,
            axios.projects,
            xhrRequest,
            fetchRequest,
            axiosRequest,
            'projectId'
        );

        makeRequests(
            target.dataset.action,
            'tasks',
            createUrl,
            xhr.tasks,
            fetch.tasks,
            axios.tasks,
            xhrRequest,
            fetchRequest,
            axiosRequest,
            'taskId'
        );

    });
}