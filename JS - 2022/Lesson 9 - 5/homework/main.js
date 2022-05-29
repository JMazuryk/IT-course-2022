// Все стірлочними!!!!!!!!!

//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let num = [2, 2, 2];
//
// let calc = (array) => {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum / num.length;
// }
// console.log(calc(num));

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let num = [1,5,4,3];
//
// let fn = (array)=>{
//       let min = array[0];
//       let max = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//         if (item > max) {
//             max = item;
//         }
//     }
//         console.log(max);
//         return min;
// }
// console.log(fn(num));

// - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let fn = () => {
//     let array = [];
//     for (let i = 0; i < 20; i++) {
//         array.push(Math.round(Math.random()*100));
//     }
//     return array;
//     }
//     console.log(fn());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let fn = (limit)=>{
//     let array = [];
//     for (i=0;i<limit;i++){
//         array.push(Math.round(Math.random()*100));
//     }
//     return array;
// }
// console.log(fn(10));

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let iterator = [1,2,3];
// let fn = (array)=> {
//     let arr = [];
//     for (let i = array.length-1, j = 0; i >= 0; i--,j++) {
//                arr[j] = array[i];
//     }
//     return arr;
// }
// console.log(fn(iterator));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
//
// let users = [
//     {age:31},
//     {age:35}
// ];
//
// let array = (arr)=>{
//     let x = arr[0];
//     arr[0] = arr[1];
//     arr[1] = x;
//     return arr;
// }
// console.log(array(users));

//     Переробити на стрілочні функції з попереднього дз

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let square = (a,b) => {
//     let result = a * b;
//     return result;
// }
// let answer = square(10,20);
// console.log(answer);
// //
// let answer1 = square(30,20);
// console.log(answer1);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let squarecircle = (pi, r) => {
//    return pi * r ** 2;
//  }
// console.log(squarecircle(3.14, 5))

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let squarecylinder = (pi,r,h)=> {
//     let result = 2*pi*r*h;
//     return result;
// }
// let answer = squarecylinder(3.14,2,3);
// console.log(answer)
//
// let answer1 = squarecylinder(3.14,5,5);
// console.log(answer1)

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let iterator = (array) => {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// let users  = [
//     {name:'Orest',age:33},
//     {name:'Julia',age:31},
//     {name:'Andry',age:31}
// ];
// iterator(users);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let paragraph = (text) => {
//     document.write(`<div> ${text} </div>` );
// }
// paragraph('hfakqwydufqwf');
// paragraph('qqqqqqqqqqqqq')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let data = (size,text) => {
//     document.write(`<ul>`);
//     for (let i = 0;i<size;i++) {
//         document.write(`<li>${text}${i + 1}</li>`);
//     }
//     document.write(`</ul>`);
// }
// data(3,'aspshlash');

// // // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let data = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// data('qqqqqqqq');
// data('ppppppp')

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let iterator = (array) => {
//     for (const item of array) {
//         console.log(item);
//           }
// }
//
// let users = [
//     {name:'Orest',age:35,status:true},
//     {name:'Julia',age:31,status:false},
//     {name:'Andry',age:31,status:true}
// ];
//
// iterator(users);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let iterator = (array) => {
//     for (const item of array) {
//         document.write(`<div>${item.name} ${item.age}`)
//             }
// }
// let users = [
//     {name: 'Orest', age: 35},
//     {name: 'Julia', age: 31},
//     {name: 'Andry', age: 31}
// ]
//
// iterator (users);

// - створити функцію яка повертає найменьше число з масиву
//
// let figures = [1, 10, 20, -2];
//
// let iterator = (array) => {
//     let res = array[0];
//     for (const item of array) {
//         if (item < res) {
//             res = item
//         }
//     }
//     return res;
// }
//
// console.log(iterator(figures));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// //
// let figures = [1,2,10];
// let iterator = (array) => {
//     let res = 0;
//     for (const item of array) {
//         res = res + item;
//             }
//     return res;
// }
// console.log(iterator(figures));
// //
//





