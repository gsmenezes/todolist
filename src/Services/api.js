
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

function getTasks() {
  fetch(apiUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function createTask(task) {
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({task}),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function updateTask(task) {
  fetch(apiUrl + "/:id", {
    method: "PATCH",
    body: JSON.stringify({task}),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function deleteTask() {
  fetch(apiUrl + "/:id", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export { getTasks, createTask, updateTask, deleteTask };
