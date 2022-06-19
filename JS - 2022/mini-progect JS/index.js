// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
// Стилизация : index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

const userStyle = document.getElementsByClassName('users')[0];
const innerStyle = document.getElementsByClassName('inner')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            const userDiv = document.createElement('div');
            userDiv.style.padding = '10px';
            userDiv.innerText = `id: ${user.id}\n name: ${user.name}\n`;

            const button = document.createElement('button');
            button.innerText = 'click';
            button.onclick = () => {
                const key = 'userArray';
                const userArray = JSON.parse(localStorage.getItem(key)) || [];
                userArray.push(user);
                localStorage.setItem(key, JSON.stringify(userArray));
                button.disabled = true;
                location.href = 'user-details.html';
            }
            userDiv.append(button);
            innerStyle.append(userDiv);
            userStyle.append(innerStyle);
        }
    });

