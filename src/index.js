'use strict'
// const user1 = new Map

// function createVocabulary (str) {
//     const map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         if (map.has(str[i])) {
//             map.set(str[i], map.get(str[i])+1);
//         } else {
//         map.set(str[i], +1) };
//     } return map;
// }


// function compare(string1, string2) {
//     const map1 = createVocabulary(string1);
//     const map2 = createVocabulary(string2);
//     if (map1.size !== map2.size) {
//         return false;
//     }
//     for (let k = 0; k < map1.size; k++) {
//        if(map1.get(string1[k]) === map2.get(string1[k])) {
//         continue
//        } else {
//         return false;
//        }
//     }
//     return true;
// }

// const arr1 = [2, 7, 5, 1, 9, -10];
// const arr2 = [4, 2, 7, 10];

// const res = [...new Set(arr1.concat(arr2)).values()];


// const map = new Map ([[1, {username: 'john doe'}], [2, {username: 'jaen doe'}], [3, {username: 'alex doe'}]])

// function returnNAme(value, key, map) {
//     console.log(`${key} - ${value.username}`)
// }
// map.forEach(returnNAme);

// const monitor = {
//     sizes: {
//         width: {
//             value: 30,
//             scale: 'sm',
//         },
//         heigth: {
//             value: 40,
//             scale: 'sm',
//         },
//     },
//     brigthness: {
//         value: 24000,
//         scale: 'lux',
//     },
//     resolution: '4k',
// };


// function diagMon (monitor) {
//     const {sizes: {width: {value}, heigth: {value: valueHeigth}}} = monitor;
//     return Math.sqrt(value**2 + valueHeigth**2)
// }

const map = new Map ([[1, {username: 'john doe'}], [2, {username: 'jaen doe'}], [3, {username: 'alex doe'}]]);

const arr1 = [...map.entries]


// function getName ([[firstEl, {username: userName1}]]) {
//     return `${firstEl} ${userName1}`;
// }

