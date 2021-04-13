const USER = "acorsau";
const BASE_URL = "https://simple-json-server-scit.herokuapp.com/todo/";
const GET_DATA_URL = BASE_URL + USER;
const UPDATE_DATA_URL = GET_DATA_URL;

export function getToDoData(callback) {
  fetch(GET_DATA_URL)
    .then((r) => r.json())
    .then((json) => callback(json));
}

export function updateUserData(todo, callback) {
  const payload = {
    id: USER,
    todo: todo,
  };

  fetch(UPDATE_DATA_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(() => {
    getToDoData(callback);
  });
}

export function createUserData(itemValue, callback) {
  const payload = {
    id: USER,
    todo: [
      {
        checked: false,
        item: itemValue,
      },
    ],
  };

  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(() => {
    getToDoData(callback);
  });
}
