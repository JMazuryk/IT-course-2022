// Agenda
//
// functions
// return ,
// void,
// arguments
// fn call in fn,
// hoist


// function listcreator (a,b,c)
// {
//     document.write(`<ul>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${b}</li>`);
//     document.write(`<li>${c}</li>`);
//     document.write(`</ul>`);
// }
//
// listcreator('item1','item2','item3')
//
// function listcreator2(a, b, c, d) {
//     document.write(`<ul>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${b}</li>`);
//     document.write(`<li>${c}</li>`);
//     document.write(`<li>${d}</li>`);
//
//     document.write(`</ul>`);
// }
//
// listcreator2('Julia', 'Andry', 'Orest');
//
// listcreator2('Julia', 'Andry', 'Orest', 'Taras');
//
// listcreator2('Julia', 'Andry', 'Orest', 'Taras', 'Victor');
//
// function calc(a,b){
//     let res = a+b;
//     return res;
// }
// let result = calc(10,20);
// console.log(result);
//
// let result2 = calc(30,40);
// console.log(result2);
//
// function list() {
//     let res = 0;
//     for (const argument of arguments) {
//         res = res + argument;
//     }
//     return res;
// }
//
// let res1 = list(10, 20, 30);
// let res2 = list(10, 20, 30, 40, 50);
// console.log(res1, res2);
//
// function check(a,b){
//     if ( typeof a === 'number' && typeof b === 'number'){
//         return true;
//     }else {
//         return false;
//     }
// }
//
// function calc(action,a,b){
//     let result;
//     if (action === '+' && check (a,b)) {
//             result = a+b;
//                 }
//     } else if (action === '-' && check (a,b)){
//         result=a-b;
//     }
//     return result;
// }
// let calcmain = calc('+',10,'20');
// console.log(calcmain);

// function iterator(array) {
//     for (const item of array) {
//         console.log(item);
//     }
//
// }

// let x = 100;
// function iterator(array){
//     for (let i=0;i<x;i++){
//         const iterator = array[i];
//     }
// }

// function calc(a,b,action) {
//     switch (action) {
//         case'+':
//             let res = a+b;
//             return res;
//         case'-':
//             return a - b;
//         case'*':
//             return a * b;
//         default:
//             return NaN;
//     }
// }
// let result = calc(20,10,'+');
// console.log(result);

// function calc(a,b,action) {
//     if (action === '+'){
//         return a+b;
//     } else(action === '-')
//         return a-b;
//   }
// // let result = calc(20,30,'+');
// // console.log(result);
//
//
// console.log(calc(20,30,'+'));
// // console.log
// let calc1= calc(
//     +prompt('a'),
//     +prompt('b'),
//     prompt('action'));
// console.log(calc1)
//

// function calc (...nums) {
//     console.log(nums);
//
// }
// calc(10,20,30);
// calc(30,30,30,30)

// function add(a,b){
//     return a+b;
// }
// function minus(a,b){
//     return a-b;
// }
// // function calc(a,b,action){
// //     switch (action){
// //         case'+':
// //         return add(a,b);
// //         case'-':
// //             return minus(a,b);
// //         default:
// //             throw new Error ('wtf');
// //
// //     }
// // }
// // console.log(calc(20,20,'jj'))
//
// // function calc(a,b,action){
// //     let result;
// //     switch (action){
// //         case'+':
// //             result = add(a,b);
// //             break;
// //         case'-':
// //             result = minus(a,b);
// //             break;
// //         default:
// //             throw new Error ('wtf');
// //     }
// //     return result
// // }
// // console.log(calc(20,5,'-'))