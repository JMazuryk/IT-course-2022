// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// Стилізація: post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)



const post = document.getElementById('post');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            const wrapPost = document.createElement('ul');
             wrapPost.innerHTML = `<li>userId: ${item.userId}</li>
                                  <li>id: ${item.id}</li>
                                  <li>title: ${item.title}</li>
                                  <li>body: ${item.body}</li> `;
            post.appendChild(wrapPost);

            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(value => value.json())
                .then(value => {
                    for (const comment of value) {
                        const wrapComment = document.createElement('ul');
                        wrapPost.appendChild(wrapComment);
                        if (item.id === comment.postId) {
                            const dataComment = document.createElement('li');
                            dataComment.innerText = `postId: ${comment.postId}
                                                     id: ${comment.id}
                                                     name: ${comment.name}
                                                     email: ${comment.email}
                                                     body: ${comment.body} `;
                            wrapComment.appendChild(dataComment);
                        }
                    }
                })
        }
    })

