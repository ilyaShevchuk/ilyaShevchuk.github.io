function generate_table(m) {
    let body = document.querySelector("#tasks");
    var tbl = document.createElement("table");
    tbl.classList.add('table')
    var tblBody = document.createElement("tbody");
    var tblHead = document.createElement("thead");
    tblHead.classList.add('thead-dark')
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    
    let row = document.createElement("tr");
    
    for (var i = 0; i < m; i++) {
        let cell = document.createElement("th");
        let cellText = document.createTextNode(days[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
}
    tblHead.appendChild(row);
    tbl.appendChild(tblHead);
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}

function add_row(day_index, subject_text) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode(subject_text);
    tbl.appendChild();
}

//generate_table(5);

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
    const sb = document.querySelector('#select')

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
        const day_ops = sb.options;
        const day = day_ops[sb.selectedIndex].text;
        
        console.assert(task);
        const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});