// Agenda
//
// ref vs primitives внешние переменные, как их изменяет функция
// function expression
// arrow
// selfinvoke
// рекурсия
// callbacks
// (пример , функция - это робот, колбек - микрочип с программой)
//

// // 1.Різниця між ссилочними і примітивними типами даних
// примітивні типи даних:
// let x = 0;
// function increment (num){
//     num++
// }
// increment(x);
// console.log(x);
//
// // ссилочні типи даних:
//
// let x = {arr:5};
// function increment2 (obj){
//     obj.arr++;
// }
// increment2(x);
// console.log(x);

// 2.Хойстінг - підняття
// test();
// function test(){
//     console.log('test')
// }

//
// // 3.function декларейшн і експрешн (функціональний вираз)-послідовність виклику повинна бути чіткою
// function  експрешн
// let fn = function (){
//     console.log('asd');
//
// }
// function declaration(хойстінг)
// fn();
// function fn (){
//     console.log('asd');
// }

// 4.стрілочна функція
//
// let fn = function (){
//     console.log('hello');
// }
// fn ();
// стрілочний варіант тої самої функції
// // 1. варіант
//
// let fn = () => console.log('hello');
// fn();
//
// 2.якщо декілька дій
//
// let fn = () => {
//     console.log('hello');
//     console.log('okten');
// }
// fn();
//
// 3.варіант
//
// let calc = (a,b) => {
//    return a+b;
// }
// console.log(calc(10,20));
//
//
// let calc = (a,b) => a+b;
// console.log(calc(10,10));
//
// let calc = (a,b)=>{
//     let res =a+b;
//     return res;
// }
// console.log(calc(10,10));

// // 5.self invoke fn - самовикликана функція
//
// (function (msg){
//     console.log(msg);
//
// }("Hello world"));

// 7. рекурсивні функції - функція,яка   викликає сама себе
// можна також використовувати замість циклу
//
// function rec(i,limit){
//     i++;
//     console.log(i);
//     if(i>limit){
//         return;
//     }
//     rec(i,limit);
// }
// rec(3,100)

// 6. callback - треба замінити action на функцію
//
// function calc (a,b,action){
//     if (action === '+'){
//         return a+b;
//     } else if (action === '-'){
//     return a-b} else if(action === '*'){
//         return a*b;
//     }else {
//         return 0;
//     }
// }
// // console.log(calc(10,20,'+'))
//
// function calc (a,b,action) {
//     return action (a,b);
// }
// console.log(calc(10,30, function (a,b){return a+b}));

// // 7.Приклад з масивом
//
// let arr = [2,4,7,10];
//
// let filter = [];
// for (const user of arr) {
//     if (user>7){
//         filter.push(user);
//     }
//     }
// console.log(filter);
// //
// // let filter = arr.filter(function(user){
// //     return user>7
// // });
// // console.log(filter)

calc(function (a,b){return a+b},10,20);

calc((a,b)=> a+b,10,20);