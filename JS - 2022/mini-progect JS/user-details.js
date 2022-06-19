// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
// Стилізація: user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.

const userArray = 'userArray';
const userDetailsStyle = document.getElementsByClassName('userDetails')[0];
const users = JSON.parse(localStorage.getItem(userArray)) || [];

users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.innerText = JSON.stringify(user);
    userDiv.style.display = 'flex';
    userDiv.style.flexWrap = 'wrap';
    userDiv.style.justifyContent = 'center';
    userDiv.style.alignItems = 'center';
    userDiv.style.flexDirection = 'column';

    const button = document.createElement('button');
    button.innerText = 'post of current user';
    button.style.width = '90%';
    button.style.margin = '10px';

    button.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value => value.json())
            .then(value => {
                for (const post of value) {
                    const postDiv = document.createElement('li');
                    postDiv.innerText = post.title;
                    userDiv.append(postDiv);
                    button.disabled = true;
                    postDiv.style.margin = '10px';

                    const button2 = document.createElement('button');
                    button2.innerText = 'click';
                    button2.onclick = () => {
                        const key = 'postArray';
                        const postArray = JSON.parse(localStorage.getItem(key)) || [];
                        postArray.push(post);
                        localStorage.setItem(key, JSON.stringify(postArray));
                        button2.disabled = true;
                        location.href = 'post-details.html';
                    }
                    userDiv.append(button2);
                }
            });
    };
    userDiv.append(button);
    userDetailsStyle.append(userDiv);
})



