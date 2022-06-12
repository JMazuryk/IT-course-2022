
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
                                 company:${item.company.name}
                                 
                                `
            data.appendChild(alldata);

            const button = document.createElement('button');
            button.style.width = '90%';
            button.innerText = 'post of current user';
            alldata.appendChild(button);
            button.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(value => {
                        const wrap = document.createElement('ul');
                        wrap.style.margin ='10px';
                        alldata.appendChild(wrap);
                        for (const post of value) {
                            if (item.id === post.userId) {
                                const posts = document.createElement('li');
                                posts.innerText = post.title;
                                wrap.appendChild(posts);
                                button.disabled = true;
                            }
                        }
                        const button1 = document.createElement('button');
                        button1.innerText = 'click';
                        alldata.appendChild(button1);
                        button1.onclick = () => {
                            location.href = 'post-details.html';
                        }
                    })
            }
        }
    })

