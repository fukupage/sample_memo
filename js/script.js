'use strict';

const addForm = document.getElementById('form');
const list = document.getElementById('list');
const submit = document.getElementById('submit');
const search = document.querySelector('.search input');

(function(){
    for(var key in localStorage){
        var html = localStorage.getItem(key);
    if(html){
            list.innerHTML += localStorage.getItem(key);
            console.log(html);
        }
    }
})();

const saveTaskToLocalStorage = (title,html) =>{
    if(html){
        localStorage.setItem(title,html);
    return;
    }
    return;
}

const deleteTaskFromLocalStorage = (title,comment,html) =>{
    localStorage.removeItem(title,comment,html);
return;
}

const createTodoList = (title, comment) => {
    const html = `
    <li class="list-group-item justify-content-between align-items-center">
    <span class="memoTitle">${title}</span>
    <span class="memoComment">${comment}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
    saveTaskToLocalStorage(title,html);
    console.log(html);
}


submit.addEventListener('click', e => {
    e.preventDefault();
    const title = addForm.addt.value.trim();
    const comment = addForm.addc.value.trim();
    if (title !== '' && comment !== '') {
        createTodoList(title, comment);
    }
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        const title = e.target.parentElement.textContent.trim();
        const comment = e.target.parentElement.textContent.trim();
        deleteTaskFromLocalStorage(title);
        deleteTaskFromLocalStorage(comment);
    }
});

const filterTitle = title => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(title))
    .forEach((todo) => todo.classList.add('filterd'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(title))
    .forEach((todo) => todo.classList.remove('filltered'));
};

const filterComment = comment => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(comment))
    .forEach((todo) => todo.classList.add('filterd'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(comment))
    .forEach((todo) => todo.classList.remove('filltered'));
};

search.addEventListener('keyup',() => {
    const text = search.value.trim().toLowerCase();
    filterTitle(text);
    filterComment(text);
});
