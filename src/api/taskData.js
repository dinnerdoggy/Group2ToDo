import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTaskData = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/tasks.json?orderBy="userId"&equalTo="${uid}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const createTask = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/tasks.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteTask = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/recipe/${firebaseKey}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getTaskData, createTask, deleteTask };
