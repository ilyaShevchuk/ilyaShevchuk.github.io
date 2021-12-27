function createTable(height, width) {
    const table = document.querySelector('table');

    table.innerHTML = '';

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    thead.appendChild(tr);

    for (let i = 0; i < width; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `0:${i}`

        input.value = `0:${i}`;

        tr.appendChild(input);
    }

    const tbody = document.createElement('tbody');

    for (let i = 1; i < height; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < width; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `${i}:${j}`;
            input.value = `${i}:${j}`;

            tr.appendChild(input);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
}

function onCreateTableClick() {
    const height = document.constructor_input.height.value;
    const width = document.constructor_input.width.value;

    createTable(height, width);
}

function onSaveTableClick() {
    const height = document.constructor_input.height.value;
    const width = document.constructor_input.width.value;
    const thead = document.querySelector('thead');
    const theadTr = thead.children[0];
    const tableData = {
        height,
        width,
        data: [[]],
    }

    for (const child of theadTr.children) {
        tableData.data[0].push(child.value);
    }
    
    const tbody = document.querySelector('tbody');
    const children = tbody.children;

    for (let i = 0; i < children.length; i++) {
        tableData.data.push([]);

        for (let j = 0; j < children[i].children.length; j++) {
            tableData.data[i + 1].push(children[i].children[j].value);
        }
    }

    window.localStorage.setItem('tableData', JSON.stringify(tableData));
}

function onRestoreTableClick() {
    const tableData = window.localStorage.getItem('tableData');
    const dataParsed = JSON.parse(tableData);

    createTable(dataParsed.height, dataParsed.width);

    const data = dataParsed.data;

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            const elem = document.getElementById(`${i}:${j}`);

            elem.value = data[i][j];
        }
    }
}