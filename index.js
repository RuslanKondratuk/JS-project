'use strict'

// let sum = '';
// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < i; j++) {
//         sum += '*';
//     }
//     sum += '\n';
// }
// console.log(sum);

// let stars = '';
// function square(a) {
//     for (let  i = 0; i <= a; i++) {
//         for (let j = 0; j <= a; j++) {
//             if (i === 0 || i === a || j === 0 || j === a || i === j) {
//                 stars += '*';
//             } else {
//                 stars += ' ';
//             }
//         }
//         stars += '\n';
//     }
//     console.log(stars);
// }

// square(8);















// for (let i = 0; i < 9; i++) {
//     let stars = '';
//     for (let j = 0; j < i; j++) {
//         stars += '*';
//     }
//     console.log(stars);
// }
// let gor = '';
// let vertical = '*';
// let stars1 = '*';
// let vertical = ''
// function square (a, b) {
//     for (let q = 0; q < a; q++) {
//         gor += ' ' + '*';
//     }
//     console.log(gor);
//     for (let i = 0; i < a; i++) {
//         vertical += ' ';
//         for (let j = 0; j < b; j++) {
//             stars1 = vertical + '*' +' ';
//         }
//         console.log(stars1);
//         stars1 = +'*';
//         // vertical = stars + ' ' + '*';
//         // console.log(vertical);


//     }
//     console.log(gor);
// }
// let gor = '';
// let vertical = '*';
// let stars1 = '';

// // square (8,8);
// function square (a) {
//     for (let i = 0; i <= a; i++) {
//         for (let j = 0; j <= a; j++) {
//             if (i === 0 || i === a || j === 0 || j === a || i === a-j) {
//             stars1 +='*';
//             } else {
//                 stars1 += ' ';
//             }
//         }
//         stars1 += '\n'
//     }
//     console.log(stars1);
// }

// square (8);



// function consolArrayDividerNumber(range1, range2) {
//     for (let i = range1; i <= range2; i++) {
//         for (let j = 0; j <= range2; j++) {
//             if (i % j === 0) {
//                 console.log(j);
//             }
//         }
//     }
// }

// function consolArrayDividerNumber(range1, range2) {
//     for (let i = range1; i <= range2; i++) {
//         const array = [];
//         for (let j = 1; j <= i; j++) {
//             if (i % j === 0) {
//                 array.push(j)
//             }
//         }
//         console.log('Дільники числа ' + i + ' - ', array);
//         // console.log(array);
//     }
// }

// consolArrayDividerNumber(2, 10);

// function returnFirsBig(string) {
//     console.log(string.toUpperCase().charAt(0));
// }


// function returnFirsBig(string) {
//     console.log(string[0].toUpperCase() + string.slice(1) );
// }


// function returnFirsBig(string) {
//     if(string.includes('viagra') || string.includes('buy') || string.includes('XXX')){return true;}
// }

// function truncate(str, maxLength) {
//     if (str.length > maxLength) {
//         const end = '...'
//         return str.slice (0,maxLength,).concat(end);
//     }
// }

// const string = 'adacadabra'


// function tryString(string) {
//     if ()
// }

// const letternone = ['a', 'e', 'i', 'o', 'u']

// function examinationLetter(string) {
//     let sum = 0;
//     for (let i = 0; i < string.length; i++) {
//         for (let j = 0; j <= string.length; j++) {
//             if(string[i] === letternone[j]) {
//                 sum += 1;
//             }
//         }
//     }
//     console.log(sum);
// }
// const letternone = ['a', 'e', 'i', 'o', 'u']

// function examinationLetter(string) {
//     const arr = string.split('');

//    arr.filter((letter){
//     return obj[i] !== letternone[length]
//    })
//         // .length();
// }


// 1. const string = 'Я!вчу!джаваскрипт!';
// string.replaceAll('!', ' ').trim();


// 2. function aaaaa(string) {
//     debugger
//     return string[0].toUpperCase() + string.slice(1);
// }

// 3. function isSpam(str) {
//     const spamWords = ['viagra', 'XXX', 'buy']
//     for (let i = 0; i < spamWords.length; i++) {
//         if(str.toLowerCase().includes(spamWords[i].toLocaleLowerCase())) {
//             return true
//         }
//     }
//     return false;
// }


// 4. const truncate = (str, maxLength) => str.length > maxLength ?  str.slice(0, maxLength).concat('...') : str;



// 5. function chekString(str) {
//     const strrev = str.split('').reverse();
//     const revstring = strrev.join('');
//     if (str.toLowerCase === revstring.toLowerCase) {
//         return true;
//     }
//     return false;
// }

    // function chekGolosLetter(str) {

    //     const golosLetter = ['a', 'e', 'i', 'o', 'u'];
    //     const arrayString = str.split('');
    //     const filtered = arrayString.filter(function (elem) {
    //         for (let i = 0; i < golosLetter.length; i++) {
    //             return golosLetter.includes(elem);
    //         }})
    //         return filtered.length;

    // }

    // const countVocalsV2 = (str) => str.split('').filter((letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter)).length;