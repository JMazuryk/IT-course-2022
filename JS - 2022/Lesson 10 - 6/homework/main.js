// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let arr = 'hello world';
// let arr1 = 'lorem ipsum';
// let arr2 = 'javascript is cool';
//
// console.log(arr.length);
// console.log(arr1.length);
// console.log(arr2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
//  let arr = 'hello world';
//  let arr1 = 'lorem ipsum';
//  let arr2 = 'javascript is cool';
//
// console.log(arr.toUpperCase());
// console.log(arr1.toUpperCase());
// console.log(arr2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let arr = 'HELLO WORLD';
// let arr1 = 'LOREM IPSUM';
// let arr2 = 'JAVASCRIPT IS COOL';
//
// console.log(arr.toLowerCase());
// console.log(arr1.toLowerCase());
// console.log(arr2.toLowerCase());

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let arr = ' dirty string   ';
// console.log(arr.trim());

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map(value => {
//     return value + '';
// });
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums = (arr,direction) => {
//     if(direction === 'ascending') {
//         arr.sort((a,b) => a-b)
//     }
//     else if(direction === 'descending'){
//         arr.sort((a,b) => b-a)
//     }
//     return arr;
// }
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'));

//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortArr = (array) => array.sort((a,b) =>b.monthDuration-a.monthDuration);
// console.log(sortArr(coursesAndDurationArray));
//
// let filterArr = (array) => array.filter(value => value.monthDuration > 5);
// console.log(filterArr(coursesAndDurationArray));
//
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// let Cards = [{
//     cardSuit: null,
//     value: 'Joker',
//     color: 'black'
// },
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black'
//     },
//     {cardSuit: 'diamond',
//         value: 'ace',
//         color: 'black'},
//
//     {cardSuit: 'heart',
//         value: 'ace',
//         color: 'black'},
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'red'
//     },
//     {cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red'},
//
//     {cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'},
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '6',
//         color: 'red'
//     },
//     {cardSuit: 'diamond',
//         value: '6',
//         color: 'red'},
//
//     {cardSuit: 'heart',
//         value: '6',
//         color: 'red'},
//
//
//
// ]
//
// console.log(Cards.find(value => value.cardSuit === 'clubs' && value.value === 'ace'));
// console.log(Cards.filter(value => value.value === '6'));
// console.log(Cards.filter(value => value.color === 'red'));
// console.log(Cards.filter(value => value.cardSuit === 'diamond'));
// перевірка по аскикодах
// console.log(Cards.filter(value => value.cardSuit === 'clubs' && value.value > '8'));