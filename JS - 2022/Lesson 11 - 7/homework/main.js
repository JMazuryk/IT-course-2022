// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function User (id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// let array =[];
// let user1 = new User(123,'Taras1','TarasS','hkhlh',4546545);
// let user2 = new User(124,'Taras2','TarasS','hkhlh',4546545);
// let user3 = new User(125,'Taras3','TarasS','hkhlh',4546545);
// let user4 = new User(126,'Taras4','TarasS','hkhlh',4546545);
// array = [user1,user2,user3,user4];
// let users = array.filter(value => value.id%2 === 0);
// console.log(users);
// let users1 = array.sort((a,b) => a.id - b.id);
// console.log(user1);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class User {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let array =[];
// let user1 = new User(123,'Taras1','TarasS','hkhlh',4546545,['Milk','Apple']);
// let user2 = new User(124,'Taras2','TarasS','hkhlh',4546545,['meat','Apple']);
// let user3 = new User(125,'Taras3','TarasS','hkhlh',4546545,['lime','Apple']);
// let user4 = new User(126,'Taras4','TarasS','hkhlh',4546545,['Milk','tomato']);
// array = [user1,user2,user3,user4];
// let users = array.sort((a,b) => a.order.length-b.order.length);
// console.log(users);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//    function Car (model, producer, year, maxspeed, volume) {
//        this.model = model;
//        this.producer = producer;
//        this.year = year;
//        this.maxspeed = maxspeed;
//        this.value = volume;
//        // this.drive = function () {
//        //     console.log(`We drive with ${this.maxspeed} km per hour`)
//        // };
//        // this.info = function (){
//        //     console.log(`model: ${this.model}`)
//        //     console.log(`producer: ${this.producer}`)
//        //     console.log(`year: ${this.year}`)
//        //     console.log(`maxspeed: ${this.maxspeed}`)
//        //     console.log(`value: ${this.volume}`)
//        // };
//        // {
//        //     this.info = function (){
//        //         for (const item in this) {
//        //             console.log(`${item}-${this[item]}`);
//        //         }
//        //     }
//        // }
//
//        this.increaseMaxSpeed = function (newSpeed) {
//            this.maxspeed += newSpeed;
//        };
//        this.year = function (newyear) {
//            this.year = newyear;
//        };
//        this.addDriver = function (driver){
//           this.driver = driver;
//        };
//    }
// let customer = new Car('Volvo', 'Sweden', '2020', 250, '1.8');
// // customer.drive();
// // customer.info();
// customer.increaseMaxSpeed(50);
// console.log(customer);
// customer.year(2010);
// console.log(customer);
// customer.addDriver('Oleh');
// console.log(customer);
//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, year, maxspeed, value) {
//         this.model = model
//         this.producer = producer
//         this.year = year
//         this.maxspeed = maxspeed
//         this.value = value
//     }
//     drive() {
//         console.log(`We drive with ${this.maxspeed} km per hour`)
//     }
//
//     info(){
//         for (const item in this) {
//             console.log(`${item}-${this[item]}`);
//         }
//         // console.log(`model: ${this.model}`)
//         // console.log(`producer: ${this.producer}`)
//         // console.log(`year: ${this.year}`)
//         // console.log(`maxspeed: ${this.maxspeed}`)
//         // console.log(`value: ${this.value}`)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxspeed += newSpeed;
//     }
//     changeYear (newyear){
//         this.year = newyear;
//     }
//     addDriver (driver){
//         this.driver = driver;
//     }
//    }
//
// customer = new Car('Volvo', 'Sweden', '2020', 250, '1.8');
// customer.drive();
// customer.info();
// customer.increaseMaxSpeed(50);
// customer.changeYear(2010);
// customer.addDriver('Oleh');
// console.log(customer);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function Cinderella (name,age,footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let arrCinderella =[
//     new Cinderella('Olha',31,36),
//     new Cinderella('Diana',30,35),
//     new Cinderella('Ira',29,38),
// ];
// function Prince(name,age,findSize){
//     this.name = name;
//     this.age = age;
//     this.findSize = findSize;
// }
// let newPrince = new Prince('Taras',32,35);
//
// let find = (arrC,prince) => {
//     for (const item of arrC) {
//         if (item.footSize === prince.findSize){
//             return `${item.name}`;
//         }
//     }
// }
// console.log(find(arrCinderella, newPrince));
//
// let C =arrCinderella.find(value => value.footSize === newPrince.findSize);
// console.log(C);



PORT=5000
HOST=http://localhost
FRONTEND_URL=http://localhost:4200

ALLOWED_ORIGIN=http://localhost:4200;http://localhost:3000
CRON_JOB_PERIOD=0 0 * * *

JWT_SECRET=fdkjsfsfdskfd
JWT_SECRET_ADMIN=yugfyuhoidpdkwpdewd
ACCESS_TOKEN_LIFETIME=10m

JWT_REFRESH_SECRET=fkdsflkfdsfjsjfslkjfdsffsdfsfs
JWT_REFRESH_SECRET_ADMIN=7r32rmoikfd032d2
REFRESH_TOKEN_LIFETIME=1d

JWT_CONFIRM_EMAIL_SECRET=fdsmsf&dsf43
JWT_CONFIRM_EMAIL_LIFETIME=1d

JWT_PASS_RESET_SECRET=fjdshsfds8f$ldsfd
JWT_PASS_RESET_LIFETIME=dew7dye9dedijdpoe


ROOT_EMAIL_SERVICE=gmail
ROOT_EMAIL=
    ROOT_EMAIL_PASSWORD=

        MONGODB_URL=