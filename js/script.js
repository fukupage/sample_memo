'use strict';

const addForm = document.getElementById('form');
const list = document.getElementById('list');
const submit = document.getElementById('submit');
const search = document.querySelector('.search input');

(function(){
    for(var key in localStorage){
        var html = localStorage.getItem(key);
        if(html){
            list.inner += localStorage.getItem(key);
        }
    }
})();

const saveTaskToLocalStorage = (title,comment,html) =>{
    if(html){
        localStorage.setItem(title,comment,html);
        console.log(title);
        console.log(comment);
        console.log(html);
    return;
    }
    return;
}

const deleteTaskFromLocalStorage = (title,comment) =>{
    localStorage.removeItem(title,comment);
return;
}

const createTodoList = (title, comment) => {
    const html = `
    <li class="list-grounp-item justify-content-between align-items-center">
    <span class="memoTitle">${title}</span>
    <span class="memoComment">${comment}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
    saveTaskToLocalStorage(title,comment,html);
}

submit.addEventListener('click', e => {
    e.preventDefault();
    const title = addForm.addt.value.trim();
    const comment = addForm.addc.value.trim();
    if (title !== '' && comment !== '') {
        createTodoList(title, comment);
        addForm.reset();
    }
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
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
