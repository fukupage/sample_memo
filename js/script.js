//------------------------------------------------------------
//このTodoアプリは以下のページのものを写経しながら自分なりに修正したものです。
//https://qiita.com/__init__/items/d1c59c87808fc180c871
//------------------------------------------------------------

const addPost = document.querySelector('.post');
const memoList = document.querySelector('.memos');

const createTodoList = (memoTitle) => {
    //リスト部分のhtml
    const template = `
    <li>
        ${memoTitle}
        <div class="close">[x]</div>
    </li>
    `
    addPost.innerHTML += template;
}

addPost.addEventListener('submit', e => {
    //画面の遷移を無効
    e.preventDefault();

    //入力した値を空白を除外して格納
    const memoTitle = addPost.addTitle.value.trim();

    if (memoTitle.length) {
            createTodoList(memoTitle);
            addPost.reset();
    }
});
