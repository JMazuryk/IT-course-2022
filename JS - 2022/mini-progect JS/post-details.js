// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// Стилізація: post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


const postArray = 'postArray';
const postsDetailsStyle = document.getElementById('postDetails');
const posts = JSON.parse(localStorage.getItem(postArray)) || [];

posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'wrap');
    document.body.append(postDiv);
    postDiv.innerText = JSON.stringify(post);

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(value => {
            for (const comment of value) {
                const commentDiv = document.createElement('li');
                commentDiv.setAttribute('class', 'inner');
                commentDiv.innerText = comment.body;
                postDiv.append(commentDiv);
            }
        })
})