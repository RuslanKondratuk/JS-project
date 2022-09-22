// let password = 'GoodPassword';
// let userPassword = prompt('Введіть пароль');

// do {
//     if (userPassword === password) {
//         console.log('пароль правильний');
//         break
//     } else {
//          prompt('Введіть пароль')}
//     } while (userPassword !== password)


// if (userPassword === password) {
//     console.log('пароль правильний');
// } else {
//     while (userPassword !== password) {
//         prompt('Введіть пароль')}
// }

// let i = 0
// while (i++ < 10) {
//     if (i === 3) {
//         continue
//     }
//     console.log(i)
// }


// const password = 'password';
// let userPassword = '';

// do {
//     debugger
//     userPassword = prompt ('Password?')
// } while (userPassword !== password)
// console.log ('Password correct')




// for (let i = 1; i <= 8; i++) {
//     debugger
//     result *= i++;
//     console.log(i)
// }

// function factorial(n) {
//     let result = 1;
//     while(n){
//         result *= n--; }
//    return result; }

//     factorial(5);



// debugger
// function pow(num, power) {
//    let result = num;
//     for (let i = 1; i <= power; i++) {
//    return result *= num;}
// }


// pow(2,5)


// function square(length, width) {
//     debugger
//     let result = length * width
//     return result
// }


// square(10,2)

// function circleLength(diametr) {
//     debugger
//     let result = diametr * Math.PI
//     return result
//      }

// circle(20)

// function FizzBuzz(num){
// for (let i = 1; i < num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     } else if(i % 3 === 0) {
//         console.log('Fizz')
//     } else if(i % 5 === 0) {
//         console.log('Buzz')
//     } else {console.log (i)}
// }
// }



// function easy(num) {
//     // debugger
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             console.log(i)
//         }
// }
// }

// easy(20);


// const password = 'password';
// let userpassword = '';
// do {
//    userpassword = prompt('Password?')
// } while (userpassword !== password );
// console.log('Password correct');

// let i = 0

// while (i < 10) {
//     i++
//     if (!(i % 2)) {
//         console.log(i);
//     }
// }


//  function factorial(num) {
//  let sum = 1
//      for(let i = 1; i <= num; i++) {
//          sum = sum * i;
//      }
//      return sum
//  }


//  factorial (10);



 for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizz-buzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
 }