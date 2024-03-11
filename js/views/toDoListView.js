import {toDoItemTemplate} from '../templates/toDoItemTemplate'

let view;

const testObject = {
    uid: 12345,
    todo: 'Pick up shoes', 
    category: 'work',
    status: 'pending',
}

export function toDoListView() {
    view = document.querySelector('#to-do-list')
    Render()
}

function render(data) {
    const div = document.createElement('div')
    const toDoList = document.querySelector('#Item-container')
    toDoListView.replaceChildren()
    const testToDo = div.prepend(toDoItemTemplate(testObject))
    toDoListView.append(div)
}