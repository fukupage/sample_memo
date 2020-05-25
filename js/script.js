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
            console.log(key + 'flag1');
            console.log(html + 'flag1');
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
    console.log(key + 'flag1');
    console.log(html + 'flag1');
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
    console.log('flag1');
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(title))
    .forEach((todo) => todo.classList.add('filterd'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(title))
    .forEach((todo) => todo.classList.remove('filltered'));
};

const filterComment = comment => {
    console.log('flag1');
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



// const addTask = document.querySelector('.add');
// const list = document.querySelector('.todos');
// const search = document.querySelector('.search input');

// // ########## 追加 ###########
// (function(){
//     // 初期化処理
//     // ローカルストレージに格納されている値を取得し、リストを生成する
//     for(var key in localStorage){
//         var html = localStorage.getItem(key);
//         if (html) {
//             list.innerHTML += localStorage.getItem(key);
//         }
//     }
// })();

// const saveTaskToLocalStorage = (task, html) => {
//     // null は、localStorage に保存しない
//     if(html){
//         // localStorage は、0 から始まる
//         localStorage.setItem(task, html);
//         return;
//     }
//     return;
// }

// const deleteTaskFromLocalStorage = task => {
//     localStorage.removeItem(task);
//     return;
// }

// // ###############################

// const createTodoList = task => {
//     // HTML テンプレートを生成
//     const html = `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>${task}</span>
//         <i class="far fa-trash-alt delete"></i>
//     </li>
//     `;

//     list.innerHTML += html;
//     // ########## 追加 ###########
//     saveTaskToLocalStorage(task, html);
// }

// addTask.addEventListener('submit', e => {
//     // デフォルトのイベントを無効
//     e.preventDefault();

//     // タスクに入力した値を空白を除外して格納
//     const task = addTask.add.value.trim();
//     if(task.length) {
//         // Todo List の HTML を作成
//         createTodoList(task);
//         // タスクに入力した文字をクリア
//         addTask.reset();
//     }
// });

// // 削除機能
// list.addEventListener('click', e => {
//     if (e.target.classList.contains('delete')){
//         e.target.parentElement.remove();
//         // ########## 追加 ###########
//         const task = e.target.parentElement.textContent.trim()
//         deleteTaskFromLocalStorage(task);
//     }
// });

// const filterTasks = (term) => {

//     Array.from(list.children)
//         .filter((todo) => !todo.textContent.toLowerCase().includes(term))
//         .forEach((todo) => todo.classList.add('filtered'));

//     Array.from(list.children)
//         .filter((todo) => todo.textContent.toLowerCase().includes(term))
//         .forEach((todo) => todo.classList.remove('filtered'));
// };

// search.addEventListener('keyup', () => {
//     // 空白削除かつ、小文字に変換(大文字・小文字の区別をなくす)
//     const term = search.value.trim().toLowerCase();
//     filterTasks(term);
// });
