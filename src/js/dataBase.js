const dataBase = {
    accessKeys: {
        login: "dzekh.v",
        password: "jc63fk"
    },
    xhr: {
        projects: [
            {
                name: "Проект созданный с помощью XHR",
                code: "12345"
            },
            {
                name: "Проект измененный с помощью XHR",
                code: "1234567"
            }
        ],
        tasks: [
            {
                name: "Задача созданная с помощью XHR",
                description: "Тут описание",
                projectId: '',
                executor: ''
            },
            {
                _id: '',
                name: "Задача измененная с помощью XHR",
                description: "Тут описание",
                projectId: '',
                executor: '',
                status: "IN_PROCESS"
            }
        ]
    },
    fetch: {
        projects: [
            {
                name: "Проект созданный с помощью Fetch",
                code: "123"
            },
            {
                _id: '',
                name: "Проект измененный с помощью Fetch",
                code: "9999"
            }
        ],
        tasks: [
            {
                name: "Задача созданная с помощью Fetch",
                description: "Тут описание",
                projectId: '',
                executor: ''
            },
            {
                _id: '',
                name: "Задача измененная с помощью Fetch",
                description: "Тут описание",
                projectId: '',
                executor: '',
                status: "IN_PROCESS"
            }
        ]
    },
    axios: {
        projects: [
            {
                name: "Проект созданный с помощью Axios",
                code: "4545"
            },
            {
                _id: '',
                name: "Проект измененный с помощью Axios",
                code: "888"
            }
        ],
        tasks: [
            {
                name: "Задача созданная с помощью Axios",
                description: "Тут описание",
                projectId: '',
                executor: ''
            },
            {
                _id: '',
                name: "Задача измененная с помощью Axios",
                description: "Тут описание",
                projectId: '',
                executor: '',
                status: "IN_PROCESS"
            }
        ]
    }
};


export default dataBase;