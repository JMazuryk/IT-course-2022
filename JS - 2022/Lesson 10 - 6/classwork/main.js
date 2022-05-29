Agenda
//
// String methods
// String.prototype.concat()
// String.prototype.toLowerCase()
// String.prototype.toUpperCase()
// String.prototype.endsWith()
// String.prototype.startsWith()
// String.prototype.charAt()
// String.prototype.includes()
// String.prototype.indexOf()
// String.prototype.lastIndexOf()
// String.prototype.replace()
// String.prototype.replaceAll()
// String.prototype.substring()
// String.prototype.split()
//
// Array.isArray()
// Array.prototype.push()
// Array.prototype.pop()
// Array.prototype.shift()
// Array.prototype.unshift()
// Array.prototype.join()
// Array.prototype.concat()
// Array.prototype.reverse()
// Array.prototype.indexOf()
// Array.prototype.splice()
// Array.prototype.includes()
//
// Array.prototype.forEach()
// Array.prototype.filter()
// Array.prototype.map()
//
// Array.prototype.sort()
// Array.prototype.find()
// Array.prototype.every()
// Array.prototype.some()
// Array.prototype.flat()
// Array.prototype.flatMap()
// Array.prototype.reduce()


console.log(users.reduce((basket, user) => {
    if (user.status) {
        basket.statusTrue.push(user);
    } else {
        basket.statusFalse.push(user);

    }
    return basket;

}, {statusTrue: [], statusFalse: []}));



// Операції із стрінгами

// // let str = 'okten hello';
// // // console.log(str.length);
// // // console.log(str[1]);
// // // console.log(str.concat('Sun'));
// // // console.log(str.toUpperCase());
// // // console.log(str.toLowerCase());
// // // console.log(str.trim());
// // //
// // // let email = 'qwe@wer.com';
// // // console.log(email.endsWith(".com"));
// // // console.log(email.startsWith('qwe'));
// // // console.log(email.charAt("3"));
// // // console.log(email.indexOf('e'));
// // //
// // // console.log(str.replace('o','!'));
// // // console.log(str.replaceAll('o','!'));
// // // console.log(str.trim().replaceAll('o','!!'));
// // //
// // // console.log(str.slice(1,3));
// // // console.log(str.split(' '));
// // // console.log(str.substr(1,3));

// let numbers = [11,22,33,44,55,66,77,88,99,100];
// // // console.log(typeof numbers);
// // // console.log(typeof {name:'hjas'});
// // // console.log(Array.isArray(numbers));
// // let push = numbers.push("Sun");
// // console.log(numbers,push);
// // let shift = numbers.unshift('!!!');
// // console.log(numbers);
// // console.log(numbers.pop());
// // console.log(numbers.shift());
// // console.log(numbers.concat('qwwqe'));
// // console.log(numbers.slice(1,4));
// // console.log(numbers.splice(1,2,'Julia','Taras'));
// // console.log(numbers);
//
// // console.log(numbers);
// // numbers.forEach(function (item){
// //     console.log(item);})
//
// // let filterArray = numbers.filter((item,index)=>{
// //     return item % 2 ===0 && index %2 !==0;
// // });
// // console.log(filterArray);
// //
// // let map = numbers.map(value => {
// //     return value*2;
// // } );
// // console.log(map);
// // console.log(numbers);

// callback functios
let users = [
    {name: 'Orest', age: 35, status: true},
    {name: 'Andry', age: 31, status: true},
    {name: 'Julia', age: 32, status: false}
];
// не потрібно return

// users.forEach(function (user,index){
//     console.log(user,index);
// // });
//
// users.forEach((value,index) => console.log(value,index));

// let filter = users.filter(function (value){
//     if (value.status) {
//         return true;
//     }
//     return false;
// });
// console.log(filter);
//
// правильніший запис,виводимо тільки true
// let filter = users.filter(function (value){
//     return value.status;
// });
// // console.log(filter);
//
// let filter = users.filter(value => !value.status && value.age === 31);
// console.log(filter);

//виводить тільки перший об'єкт,який зустрів з необхідним значенням
// let find = users.find(value => value.age === 31);
// console.log(find);
//
// console.log(users.find(value => value.age === 31));

// let map = users.map(function (value,index){
//     value.id = index+1;
//     return value;
// })
// console.log(map);

// let map = users.map(function (value,index){
//     let u = {...value};
//     u.id = index+1;
//     return u;
// })
// console.log(map);

// console.log(users.sort((u1,u2)=>u2.age-u1.age));
// перевірка аски кодів пр стрінгах
// console.log('b'-'a')

// щоб відсортувати масив по зростанню імен

// console.log(users.sort((a,b) =>
// { if(b.name < a.name) {
//     return 1;
// } if (a.name > b.name) {
//     return -1;
// }
//     return 0;
// }));

// let reduce = users.reduce((accumulator,user) => {
//     if (user.status) {
//         accumulator.statusTrue.push(user);
//     } else {
//         accumulator.statusFalse.push(user);
//     }
//     return accumulator;
// },{statusTrue: [], statusFalse: []});
// console.log(reduce);

// якщо масиви
//
// let reduce = users.reduce((accumulator,user) => {
//     if (user.status) {
//         accumulator[0].push(user);
//     } else {
//         accumulator[1].push(user);
//     }
//     return accumulator;
// },[[],[]]);
// console.log(reduce);

// якщо хоча б один з елементів має вік більш 30
// console.log(users.some(value => value.age > 30));

// якщо всі елементи мають вік 30, тоді виводить тrue
// console.log(users.every(value => value.age > 30))
