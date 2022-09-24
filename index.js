


// let dogGirl = {
//     name: 'Malvina',
//     age: 3,
//     color: 'white',
//     breed: 'balonka',
//     eat: function() {
//         console.log('I am eating')
//     },
//     sleep: function() {
//         console.log('I am sleeping')
//     }
// }

// dog.girlfriend = dogGirl;




// function allertPlan(day) {
//     switch (day) {
//         case 'Monday':
//         case 'Mon':
//         case 'monday':
//         case 'mon':
//             alert(weekPlan.Mon);
//             break;
//         case 'Thuesday':
//         case 'thuesday':
//         case 'Thu':
//         case 'thu':
//             alert(weekPlan.Tue);
//             break;
//         case 'Wednesday':
//         case 'wednesday':
//         case 'Wed':
//         case 'wed':
//             alert(weekPlan.Wed);
//             break;
//         case 'Thuesday':
//         case 'thuesday':
//         case 'Thu':
//         case 'thu':
//             alert(weekPlan.Thu);
//             break;
//         case 'Friday':
//         case 'friday':
//         case 'Fri':
//         case 'fri':
//             alert(weekPlan.Fri);
//             break;
//         case 'Saturday':
//         case 'saturday':
//         case 'Sat':
//         case 'sat':
//             alert(weekPlan.Sat);
//             break;
//         default:
//             alert('Такого значення не існує')
//     }
// }

//  let dayUser = prompt('How is day?')
//  allertPlan(dayUser)

// const weekPlan = {
//     Mon: 'dantist',
//     Tue: 'go to park',
//     Wed: 'meet friend',
//     Thu: 'learn',
//     Fri: 'hard work',
//     Sat: 'go to party'
// }


// function getWeekplan(plan) {
//     const userValue = prompt('What day do you interested in?');
//     alert(plan[userValue]);
// }


// getWeekplan(weekPlan);


// let obj = {
//     a: 1,
//     b: 2,
//     c: 5,
//     d: 7,
//     e: 9
// }
//     let sum = 0
//     for (let key in obj) {
//         sum +=  obj[key];
//     }

//     console.log(sum);


// function objectTrue (object) {
//     debugger
//     for (let key in object) {
//     if ([key]) {
//         return true
//         }
//     }
//         return false
// }


// let obj = {

// }

// objectTrue(obj);


// function comparisonTwoObject(object1, object2) {
//     let key1 = "";
//     let key2 = "";
//     let keysub1 = "";
//     let keysub2 = "";
//     for (let key in object1) {

//          key1 = object1[key];
//          keysub1 = key;
//     }
//     for (let key in object2) {
//          key2 = object2[key];
//          keysub2 = key;
//     }
//     if (key1 === key2 && keysub1 === keysub2) {
//         console.log('okay')
//     } else {
//         console.log('not')
//     }

// }

// const obj1 = {
//     a: 1,
// }

// const obj2 = {
//     v: 1,
// }

// comparisonTwoObject(obj1, obj2);


// let door = {
//     color: 'white',
//     width: '900',
//     heigth: '2000',
//     open: function () {
//         console.log('I am opening');
//     },
//     close: function() {
//         console.log('I am closing')
//     }
// }
// let doorhandle = {
//     color: 'brown',
//     width: '100',
//     heigth: '20',
//     open: function () {
//         console.log('I am opening door');
//     },
//     close: function() {
//         console.log('I am closing door')
//     },
//     2: 'newage'
// }

// door.dooroperated = doorhandle;


// let num = 2;
// const weekPlan = {
//     Mon: 'go to dantist',
//     Tue: 'go to doctor',
//     Wed: 'go to school',
//     Thu: 'go to university',
//     Fri: 'go to dance',
//     Sat: 'go to sport',
// }

// function dateOfPLan(userPlan) {

//     let userDay = prompt('What is day you interested in?');
//     debugger;
//     alert(userPlan[userDay]);
// }

// dateOfPLan(weekPlan);


// let obj = {
//     a: 1,
//     b: 2,
//     c: 5,
//     d: 7,
//     e: 9,
// }
// let res = 0;
// for (const key in obj) {
//     debugger
//     res = res + obj[key];
// }
// console.log(res);

// function isObject(object){
//     debugger
//     for (const key in object) {
//         if (key) {
//             return true;
//         }
//     }
//     return false;
// }

// const obj = {

// }

// isObject(obj);


    // const obj1 = {
    //     key: 'value',
    //     key2: 'value2',
    // }
    // const obj2 = {
    //     key: 'value',
    //     key2: 'value2',
    // }
    // const obj3 = {
    //     key: '123',
    //     key2: 'value2',
    // }


    // function areTheySameObjects(object1, object2) {
    //     debugger
    //         let key1 = "";
    //         let key2 = "";
    //         let keysub1 = "";
    //         let keysub2 = "";
    //         for (let point1 in object1) {
    //              key1 = key1 + object1[point1];
    //              keysub1 = keysub1 + point1;
    //         }
    //         for (let point2 in object2) {
    //              key2 = key2 + object2[point2];
    //              keysub2 = keysub2 + point2;
    //         }
    //         if (key1 === key2 && keysub1 === keysub2) {
    //             console.log('okay')
    //         } else {
    //             console.log('not')
    //         }

    //     }

    // areTheySameObjects(obj1, obj3)


    // function isEqual(object1, object2) {
    //     const props1 = Object.getOwnPropertyNames(object1);
    //     const props2 = Object.getOwnPropertyNames(object2);

    //     if (props1.length !== props2.length) {
    //       return false;
    //     }

    //     for (let i = 0; i < props1.length; i += 1) {
    //       const prop = props1[i];

    //       if (object1[prop] !== object2[prop]) {
    //         return false;
    //       }
    //     }

    //     return true;
    //   }

    //   const object1 = {
    //     title: "Title",
    //     id: 1
    //   };

    //   const object2 = {
    //     id: 1,
    //     title: "Title",
    //   };

    //   console.log(isEqual(object1, object2));


    // function Car(brand,model,engineVolume, numberOfSeats, maxSpeed) {
    //     this.brand = brand;
    //     this.model = model;
    //     this.engineVolume = engineVolume;
    //     this.numberOfSeats = numberOfSeats;
    //     this.maxSpeed = maxSpeed;
    //     this.speed = speed;

    //     this.currentSpeed = 0;


    //     this.run = function () {
    //         console.log(this.model + 'is running with' + this.currentSpeed + ' km/h');
    //     }


    //     this.stop = function () {
    //         console.log(this.model + 'is stopped');
    //     }


    //     this.accelerate = function (value) {
    //         let resSpeed = this.speed + value;
    //         if(resSpeed < this.maxSpeed) {
    //         console.log(this.model + ' value');}
    //         else {
    //         console.log(this.model + ' stop value');}
    //     }


    //     this.deaccelerate = function (value) {
    //         debugger
    //         let resSpeed = this.speed - value;
    //         if(resSpeed === 0 || resSpeed < 0 ) {
    //         console.log(this.model + ' stop');}
    //         else {console.log(this.model + ' drive'); }
    //     }
    // }


    // const car1 = new Car ('Mersedes', 'Amg', '2.5', 4, 250);
    // const car2 = new Car ('BMW', 'X5', '3', 5, 300);

    // function User (firstName, lastName, age, email, password) {
    //     this.firstName = firstName,
    //     this.lastName = lastName,
    //     this.age = age,
    //     this.email = email,
    //     this.password = password,
    //     this.isLogin = false,

    //     this.getFullName = function() {
    //         return (firstName + ' ' + lastName);
    //     }

    //     this.signIn = function() {
    //         let pass = prompt ('password?');
    //         if(pass === this.password) {
    //            this.isLogin = true
    //            return alert('Користувач залогінений')

    //         }
    //         return alert('Неправильний пароль')

    //     }
    // }


    // const user1 = new User ('Ruslan', 'Kondratuk', 22, 'ruslan.kondrat@mail.ru', 'pass')
    // const user2 = new User ('Arut', 'Art', 20, 'ruslan.@mail.ru', 154321)
    // const user3 = new User ('Ruslan', 'Kssssuk', 1, 'kondrat@mail.ru', 'pass123')


    // function Worker (firstName, lastName, rate, quantatyDayOfWork ) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     if(rate < 0) {
    //         this.rate = 0;
    //     } else {
    //         this.rate = rate;
    //     }
    //     if (quantatyDayOfWork < 0 || quantatyDayOfWork > 31 ) {
    //         this.quantatyDayOfWork = 0
    //     } else {
    //         this.quantatyDayOfWork = quantatyDayOfWork;
    //     }


    //     this.getSalary = function () {
    //         let salary = this.rate * this.quantatyDayOfWork
    //         alert ('Ви заробили ' + salary + ' грн.' )
    //     }
    // }


    // const worker1 = new Worker('Ruslan', 'Kondr', 200, 35);
    // const worker2 = new Worker('Ruslan', 'Kondr', 100, 2);



