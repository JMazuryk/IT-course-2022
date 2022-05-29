// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = -3;
//
// if(x !==0){
// document.write('<div>true<div>')
// }
// else {
//     document.write('<div>false<div>')
// }

// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('what time is it?');
// if (time >= 0 && time <15 ){
//     document.write('first quarter');
// }
// else if (time>=15 && time <30){
//     document.write('second quarter');
// }
// else if (time>=30 && time<45){
//     document.write('third quarter');
// }
// else if (time>=45 && time<60) {
//     document.write('fourth quarter');
// }

// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('decade');
//
// if (day>0 && day<10 ) {
//     document.write('<div>first decade<div>');
// }
// else if (day>10 && day<20) {
//     document.write('<div>second decade<div>');
// }
// else if (day>20 && day<30) {
//     document.write('<div>third decade<div>');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day = prompt('week day');
// switch (day) {
//     case 'monday':
//         document.write('<div>English<div>');
//         document.write('<div>Java Script<div>');
//         document.write('<div>Java<div>');
//         break;
//     case 'tuesday':
//         document.write('<div>Python<div>');
//         document.write('<div>React<div>');
//         document.write('<div>java<div>');
//         break;
//     case 'wednesday':
//         document.write('<div>Java Script<div>');
//         document.write('<div>Python<div>');
//         break;
//     case 'thursday':
//         document.write('<div>English<div>');
//         document.write('<div>Html<div>');
//         break;
//     case 'friday':
//         document.write('<div>CSS<div>');
//         document.write('<div>Java<div>');
//         break;
//     default :
//         document.write('<div>else<div>');
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
// //     Також потрібно врахувати коли введені рівні числа.
//
// let x = 20;
// let y = 20;
//
// if (x > y) {
//   console.log(x);
// } else if (y > x) {
//     console.log(y);
// } else if (x === y) {
//     console.log('equal')
// }
// else {
//     console.log('stop')
// }
