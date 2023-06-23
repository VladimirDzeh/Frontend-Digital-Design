export default function makeRequests(
    trigger,
    type,
    createUrl,
    xhrBody,
    fetchBody,
    axiosBody,
    xhrRequest,
    fetchRequest,
    axiosRequest,
    id
) {
    let xhrBodyClonePost = {};
    let xhrBodyClonePut = {};
    let fetchBodyClonePost = {};
    let fetchBodyClonePut = {};
    let axiosBodyClonePost = {};
    let axiosBodyClonePut = {};

    if (type === 'projects') {
        xhrBodyClonePost = { ...xhrBody[0] };
        fetchBodyClonePost = { ...fetchBody[0] };
        axiosBodyClonePost = { ...axiosBody[0] };
        xhrBodyClonePut = { ...xhrBody[1], _id: localStorage.getItem('projectId') };
        fetchBodyClonePut = { ...fetchBody[1], _id: localStorage.getItem('projectId') };
        axiosBodyClonePut = { ...axiosBody[1], _id: localStorage.getItem('projectId') };
    } else {
        xhrBodyClonePost = {
            ...xhrBody[0],
            projectId: localStorage.getItem('projectId'),
            executor: localStorage.getItem('projectId')
        },
            fetchBodyClonePost = {
                ...fetchBody[0],
                projectId: localStorage.getItem('projectId'),
                executor: localStorage.getItem('projectId')
            },
            axiosBodyClonePost = {
                ...axiosBody[0],
                projectId: localStorage.getItem('projectId'),
                executor: localStorage.getItem('projectId')
            },
            xhrBodyClonePut = {
                ...xhrBody[1],
                _id: localStorage.getItem('taskId'),
                projectId: localStorage.getItem('taskId'),
                executor: localStorage.getItem('taskId')
            },
            fetchBodyClonePut = {
                ...fetchBody[1],
                _id: localStorage.getItem('taskId'),
                projectId: localStorage.getItem('taskId'),
                executor: localStorage.getItem('taskId')
            },
            axiosBodyClonePut = {
                ...axiosBody[1],
                _id: localStorage.getItem('taskId'),
                projectId: localStorage.getItem('taskId'),
                executor: localStorage.getItem('taskId')
            }
    }

    switch (trigger) {
        case `post-${type}-xml`:
            xhrRequest('POST', createUrl(type), xhrBodyClonePost);
            break;
        case `get-${type}-xml`:
            xhrRequest('GET', createUrl(`${type}/${localStorage.getItem(id)}`));
            break;
        case `put-${type}-xml`:
            xhrRequest('PUT', createUrl(type), xhrBodyClonePut);
            break;
        case `delete-${type}-xml`:
            xhrRequest('DELETE', createUrl(`${type}/${localStorage.getItem(id)}`));
            break;
        case `post-${type}-fetch`:
            fetchRequest('POST', createUrl(type), fetchBodyClonePost);
            break;
        case `get-${type}-fetch`:
            fetchRequest('GET', createUrl(`${type}/${localStorage.getItem(id)}`));
            break;
        case `put-${type}-fetch`:
            fetchRequest('PUT', createUrl(type), fetchBodyClonePut);
            break;
        case `delete-${type}-fetch`:
            fetchRequest('DELETE', createUrl(`${type}/${localStorage.getItem(id)}`));
            break;
        case `post-${type}-axios`:
            axiosRequest('POST', createUrl(type), axiosBodyClonePost);
            break;
        case `get-${type}-axios`:
            axiosRequest('GET', createUrl(`${type}/${localStorage.getItem(id)}`));
            break;
        case `put-${type}-axios`:
            axiosRequest('PUT', createUrl(type), axiosBodyClonePut);
            break;
        case `delete-${type}-axios`:
            axiosRequest('DELETE', createUrl(`${type}/${localStorage.getItem(id)}`));
            break;
    }
}