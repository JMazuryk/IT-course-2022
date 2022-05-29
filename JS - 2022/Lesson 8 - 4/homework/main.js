// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function square (a,b) {
//     let result = a * b;
//     return result;
// }
// let answer = square(10,20);
// console.log(answer);
//
// let answer1 = square(30,20);
// console.log(answer1);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function squarecircle(pi, r) {
//    return pi * r ** 2;
//  }
// console.log(squarecircle(3.14, 5))

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function squarecylinder (pi,r,h){
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
// function iterator(array){
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
// function paragraph(text){
//     document.write(`<div> ${text} </div>` );
// }
// paragraph('hfakqwydufqwf');
// paragraph('qqqqqqqqqqqqq')
//

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function data (size,text) {
//     document.write(`<ul>`);
//     for (let i = 0;i<size;i++) {
//         document.write(`<li>${text}${i + 1}</li>`);
//     }
//     document.write(`</ul>`);
// }
// data(3,'aspshlash');

// // // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function data(text) {
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
// function iterator (array){
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
// function iterator (array){
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
// function iterator(array) {
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
//
// let figures = [1,2,10];
// function iterator(array){
//     let res = 0;
//     for (const item of array) {
//         res = res + item;
//             }
//     return res;
// }
// console.log(iterator(figures));
//

















