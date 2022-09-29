'use strict'

const NATIONALITIES = [
    'Ukraine',
    'USA',
    'Germany',
    'France',
    'Greate Bretain',
];

function User (firstName, lastName, age, mail, isSubscribe = false, nationality ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.mail = mail;
    this.isSubscribe = isSubscribe;
    this.nationality = nationality;
}

function getRandomArbitrary(min, max) {
    return  Math.round( Math.random() * (max - min) + min);
  }


function createArrayOfUsers (quantity) {
    const userArr = [];
    for (let i = 0; i < quantity; i++) {
        const user = new User (`Name${i}`, `LastName${i}`, getRandomArbitrary(1, 100), `mail${i}@com`, Boolean(Math.round(Math.random())), NATIONALITIES[getRandomArbitrary(0, 4)]);
        userArr.push(user);
    }
    return userArr;
}

const arrUsers = createArrayOfUsers(50);



function callbackFirstName (obj) {
    return `${obj.firstName} ${obj.lastName}`;
}

arrUsers.sort(function(userA, userB) {
    return userA.age - userB.age;
});




// const filterSub = arrUsers.filter(function (elem) {
//     if (elem.isSubscribe) {
//         return elem;
//     }
// });

// const mailSub = arrUsers
//                         .filter(function (elem) {
//                             return elem.age >= 18 &&  elem.isSubscribe
//                             })
//                         .map(function(obj) {
//                             return obj.mail;
//                         })



const arrayFullNameofUkraineAndSub = arrUsers
                        .filter(function (elem) {
                            return elem.isSubscribe && elem.nationality === 'Ukraine';
                            })
                        .map(function(obj) {
                            return `${obj.firstName} ${obj.lastName}`;
                        })


function subscribeTure (obj) {
    if (obj.age > 18) {
     obj.isSubscribe = true;} else {
        obj.isSubscribe = false;
     }
}

 arrUsers.forEach(subscribeTure);

 console.table(arrUsers);

