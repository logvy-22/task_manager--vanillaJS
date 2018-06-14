import ApiCreator from './api-creator';

const api = ApiCreator('localhost:3000');

export const getTasksApi = () => api.get('tasks');

export const removeTask = (id) => {
    return api.delete(`tasks/${id}`);
};

export const postTask = task => api.post('tasks', {
    body: JSON.stringify(task),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const getTimeOverTasks = () => api.get('timeOverTasks');

export const postTimeOverTasks = (task) => api.post('timeOverTasks', {
    body: JSON.stringify(task),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});



export const removeTimeOverTask = (id) => {
    api.delete(`tasks/${id}`);
    return api.delete(`timeOverTasks/${id}`);
};
