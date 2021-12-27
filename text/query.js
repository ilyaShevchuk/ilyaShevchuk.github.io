async function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(parsedTodos => {
           window.setTimeout(() => {
               deactivateLoader();
                showContent(parsedTodos)
            }, 2000)})
        .catch((error) => {
            deactivateLoader();
            showError();
    });
}

function showError(errorMessage) {
    const main = document.querySelector('main');
    const p = document.createElement('p');

    p.innerHTML = 'Что-то пошло не так';

    main.appendChild(p);
}

function showContent(todos) {
    const todoList = document.querySelector('#todo-list');

    for (const todo of todos) {
        const { id, userId, title, completed } = todo;
        const div = document.createElement('div');
        div.className = 'todo-item';
        div.style.boxShadow = `0 0 13px ${ completed ? 'green' : 'red'}`;
        div.style.background = completed ? 'green' : 'red';

        const p = document.createElement('p');

        p.innerText = `${title} @${userId}`;

        div.appendChild(p);

        todoList.appendChild(div);
    }


}

function deactivateLoader() {
    const loader = document.querySelector('.loader');

    loader.style.display = 'none';
}


window.onload = fetchData;