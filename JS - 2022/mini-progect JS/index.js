// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
// Стилизация : index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

const user = document.getElementById('user');
user.style.width = '450px';
user.style.flexWrap = 'wrap';
user.style.display = 'flex';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            const datauser = document.createElement('li');
            datauser.style.margin = '20px';
            datauser.innerText = `id: ${item.id}
                                  name: ${item.name}   
                                  `
            user.appendChild(datauser);

            const button = document.createElement('button');
            button.innerText = 'click';
            datauser.appendChild(button);
            button.onclick = () => {
                location.href = 'user-details.html';
            }
        }
    });

