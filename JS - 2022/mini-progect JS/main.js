// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
// Стилизация : index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

// const user = document.getElementById('user');
// user.style.width = '500px'
// user.style.flexWrap = 'wrap'
// user.style.display = 'flex';
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => {
//         for (const item of value) {
//             const datauser = document.createElement('li');
//             datauser.style.margin = '20px';
//             datauser.innerText = `id: ${item.id}
//                                  name: ${item.name}
//
//                                  `
//             user.appendChild(datauser);
//
//             const button = document.createElement('button');
//             button.innerText = 'click';
//             datauser.appendChild(button);
//
//             button.onclick = () => {
//                 location.href = 'user-details.html';
//             }
//         }
//
//     });

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
// Стилізація: user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.

const data = document.getElementById('data');
data.style.display = 'flex';
data.style.flexWrap = 'wrap';


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            const alldata = document.createElement('li');
            alldata.style.margin = '10px';

            alldata.innerText = `id:${item.id}
                                 name:${item.name}
                                 username:${item.username}
                                 emai:${item.email}
                                 address:${item.address.street}
                                 phone:${item.phone}
                                 website:${item.website}
                                 company:${item.company.name}`
            data.appendChild(alldata);

            const button = document.createElement('button');

            button.innerText = 'post of current user';
            alldata.appendChild(button);
            button.style.width = '90%';

            button.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(value => {
                        const wrap = document.createElement('ul');

                        alldata.appendChild(wrap);
                        for (const post of value) {
                            if (item.id === post.userId) {
                                const posts = document.createElement('li');
                                posts.innerText = post.title;
                                wrap.appendChild(posts);
                                button.disabled = true;

                            }
                        }
                    })
            }

            const button1 = document.createElement('button');

            button1.innerText ='click';
            alldata.appendChild(button1);

            button1.onclick = () => {
                location.href = 'https://jsonplaceholder.typicode.com/posts';
            }
        }
    })


// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

// const post = document.getElementById('post');
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const item of value) {
//             const wrapPost = document.createElement('ul');
//             wrapPost.innerHTML = `<li>userId: ${item.userId}</li>
//                                   <li>id: ${item.id}</li>
//                                   <li>title: ${item.title}</li>
//                                   <li>body: ${item.body}</li> `;
//             post.appendChild(wrapPost);
//
//             fetch('https://jsonplaceholder.typicode.com/comments')
//                 .then(value => value.json())
//                 .then(value => {
//                     for (const comment of value) {
//                         const wrapComment = document.createElement('ul');
//                         wrapComment.style.marginTop = '10px';
//                         wrapPost.appendChild(wrapComment);
//                         if (item.id === comment.postId) {
//                             const dataComment = document.createElement('li');
//                             dataComment.innerText = `postId: ${comment.postId}
//                                                      id: ${comment.id}
//                                                      name: ${comment.name}
//                                                      email: ${comment.email}
//                                                      body: ${comment.body} `;
//                             wrapComment.appendChild(dataComment);
//                         }
//                     }
//                 })
//         }
//     })

