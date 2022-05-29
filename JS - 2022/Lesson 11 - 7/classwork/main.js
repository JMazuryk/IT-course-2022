// Agenda
//
// objects,
// add fields ,
// dynamic fields,
// delete fields,
// spred rest
// func in objects,
// this (fullname : this.name + this.surname) closures get set
// constructors classes
// closures!!
//
// 1. objects,
//     2. add fields ,
//     3. dynamic fields,
//     4. delete fields,
//     5. spred rest
// 6. func in objects,
//    7. this (fullname : this.name + this.surname) closures get set
// 8. constructors classes
// 9. closures!!
//
// 1. objects - детальний опис одної сутності
//
// let user = {
//     name: 'Taras',
//     age: 31,
//     password: 456789,
//     car: ['Volkswagen', 'Volvo'],
//     job: {
//         title: 'Senior',
//         exprs: 4,
//     }
// }
// звернення масивного типу
// console.log(user['age']);
// звернення через крапку
// console.log(user.age);
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.job.exprs);
// console.log(user.car[0]);
// for (const item of user.car) {
//     console.log(item);
// }
//
// 2. add fields 13:46
// важливий момент - ми можемо побачити доданий елемент і в попередньому консолі,але це не так,він появляється тільки після рядка додавання
//
// user.phone = 'Iphone';
// console.log(user);
//
// user.phone = {
//     producer: ['USA', 'Canada'],
//     year:2015,
// }
// console.log(user);
//
// console.log(user.phone.producer[1]);
// console.log(user.phone.year);
//
// 4. delete fields
//
// delete user.age;
// console.log(user);
//
// delete user.phone.producer[0];
// console.log(user);
//
// масивний стиль звертання до оюєкта 20:14
//
// можна звертатися до об'єкта двома способами:
// 1. через крапку, як було вище;
// 2. через масивний стиль.
//
// let arrayObject = {
//     0:'Oleh',
//     1:'Taras'
// }
// console.log(arrayObject[1]);
// але цикл прогнати не вийде
//
// 6.dynamic fields 27:13
// можна звертатися до об'єкта за допомогою функції
//
// function getObjectData (keytoGet) {
//     console.log(user[keytoGet])
// }
//
// getObjectData('age')
// getObjectData('car')
// getObjectData('test')
// getObjectData('name')
//
// For in - 36:09 єдиний цикл, який може проганяти/проітерувати обєкти
// for(const item in user) {
//     console.log(item);
//     console.log(user[item]);
//     console.log('____________')
// }
//
// 6.func in objects 39:55
// // може бути стрілочна фукція,але через THIS вона може не працювати!!!
//
// let user = {
//     name: 'Taras',
//     age: 31,
//     sayHello: function (){
//         console.log('HELLO WORLD')},
//     car: ['Volkswagen', 'Volvo'],
//     job: {
//         title: 'Senior',
//         exprs: 4,
//     }}
//
// user.sayHello();
//
// 7. this 43:28 (fullname : this.name + this.surname) closures get set
//
// let user = {
//     name: 'Taras',
//     age: 31,
//     sayHello: function (){
//         console.log(this);
//         console.log(`${this.name} HELLO WORLD`)},
//     sayHelloS: () => {
//         console.log(this);
//         console.log(`${this.name}HELLO WORLD`)},
//     car: ['Volkswagen', 'Volvo'],
//     job: {
//         title: 'Senior',
//         exprs: 4,
//     }}
//
// user.sayHello();
// user.sayHelloS();
//
// // Важливо:
// //     - у простій функції посилання йде на обєкт через This, тобто в межах обєкту;
// // - у стрілочній функції посилання йде за межі обєкту, на рівень вище, тому this.name не виводить;
//
// можна і звернутись до масиву
// const arr = [
//     function (){
//         console.log(this);
//     },
//     22
// ];
// arr[0]();
//
// 5. spred або rest :58:00 - ...other
//
// const { password,...other} = user;
// console.log(other);
//
// класна штука, можна вивести все крім пароля
// якщо ми хочемо витягнути декілька ключів з обєкта
// класичний варіант
// const name = user.name;
// const car = user.car;
// const age = user.age;
//
// console.log(name);
// console.log(car);
// console.log(age);
//
// 2-гий варіант для більшого обсягу
// деструктиризація об'єктів
//
// const {name,age,car} = user
//
// console.log(name);
// console.log(car);
// console.log(age);
//
// якщо є змінні одинакові і по суті вони будуть використовуватись і надалі, тоді краще замінити в дестр. змінні
//
// const {name: username,age: userage,car: usercar} = user
// console.log(username);
// console.log(userage);
// console.log(usercar);
//
// деструктиризація в дестрикт..
//
// const {job:{title},car:[one]} = user;
// console.log(title);
// console.log([one]);
//
// 8. constructors classes 1:21 alt+insert - getter i setter -приватність
//
// class Car {
//     constructor(color, interior, power) {
//         this._producer = 'Volkswagen'
//         this.model = 'Golf'
//         this.color = color;
//         this.interior = interior;
//         this.power = power;
//     }
//
//     get producer() {
//         return this._producer;
//     }
//
//     set producer(value) {
//         console.log('SETTER WAS TRIGGERED')
//         // this._producer = value;
//         if (value ==='BMW') {
//             this._producer = 'BMW'
//         }
//     }
//
//
//     ride (driverName){
//         console.log(`${driverName} drive ${this.color} ${this._producer}`)
//     }
// }
//
// const customer1 = new Car('white','black','120');
// const customer2 = new Car('green','white',200);
//
// console.log(customer1);
// console.log(customer2);
//
// console.log(customer1.producer);
// customer1.producer = 'BMW'
// customer1._producer = 'Volvo'
//
// customer1.ride('Julia');
//
// 9. closures!! 1:42 - замикання
// зовні змінні можуть попасти тільки за допомогою return
// function counter() {
//     let x = 7;
//     // console.log(x);
//     return {
//         increment:() => {
//             x++
//             console.log(x)
//         }
//     }
// }
// let result = counter();
//
// result.increment()
// result.increment()
// result.increment()
// result.increment()
//

