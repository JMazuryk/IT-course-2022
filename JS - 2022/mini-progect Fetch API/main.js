// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

const user = document.getElementById('user');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            const datauser = document.createElement('li');
            datauser.style.margin = '20px'
            datauser.innerText = `id: ${item.id}
                                 name: ${item.name}
                                 
                                 `
            user.appendChild(datauser);

            const button = document.createElement('button');
            button.innerText ='click';
            datauser.appendChild(button);

            button.onclick = () => {
                const link = 'user-details.html'
            }
        }

    });

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// const data = document.getElementById('data');
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => {
//         for (const item of value) {
//             const alldata = document.createElement('li');
//             alldata.style.margin = '20px'
//             alldata.innerText = `id:${item.id}
//                                  name:${item.name}
//                                  username:${item.username}
//                                  emai:${item.email}
//                                  address:${item.address}
//                                  phone:${item.phone}
//                                  website:${item.website}
//                                  company:${item.company}
//
//                                                                 `
//             data.appendChild(alldata);
//
//
//             const button = document.createElement('button');
//             button.innerText = 'post of current user';
//             alldata.append(button);
//
//             button.onclick = () => {
//                 fetch('https://jsonplaceholder.typicode.com/posts')
//                     .then(value => value.json())
//                     .then(value => {
//                         const wrap = document.createElement('ul');
//                         alldata.appendChild(wrap);
//                         for (const post of value) {
//                             if (item.id === post.userId) {
//                                 const posts = document.createElement('li');
//                                 posts.innerText = post.title;
//                                 wrap.append(posts);
//                                 button.disabled = true;
//
//                             }
//                         }
//
//                     })
//             }
//
//
//         }
//     })
//



