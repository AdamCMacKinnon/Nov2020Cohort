
// var age = 30
// if (age <= 18){
//     console.log('you cant drink in most states');
// }
// else if (age >= 21) {
//     console.log('you can drink anywhere');
// } else {
//     console.log('sttill not old ')
// }


// var fruit = "Papayas";
// if(fruit == 'Oranges')
// {
//     console.log('Oranges are $0.59 a pound.');
// }
// else if(fruit == 'Mangoes')
// {
// }
// else if(fruit == 'Papayas')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
// }
// else
// {
//     console.log('Sorry, we are out of ' + fruit + '.');
// }
// SWITCH STATEMENT

// var fruit = "papayas";

// switch(fruit) {
//     case "oranges":
//         console.log('oranges');
//         break;
//     case "mangoes":
//         console.log('Mangoes');
//         break;
//     case "papayas":
//         console.log('papayas');
//         break;
//     default:
//         console.log('default');
// }

// var age = 17;

// switch (age) {
//     case 18:
//         console.log('you can drink in some places');
//         break;
//     case 21:
//         console.log('you can drink anywhere!');
//         break;
//     default:
//         console.log('Not sure!');
// }

// var count = 0;

// WHILE LOOP
// while (count < 10){
//     count++;
//     console.log(count);
// }


// FOR LOOP (cleaner, easier, one line)
// for(var count = 1; count <= 10; count++) {
//     console.log(count);
// }


// push = add element to end
// pop = remove element from end
// shift = remove element to beginning
// unshift = add element to beginning


// var myArray = [1, 4, 6, 7, 99]

// console.log(myArray);
// myArray.push(77)

// console.log(myArray)

// myArray.pop()

// console.log(myArray)

//SPLICE = MUTATING = changes array itself.
// var lottoNums = 
// [23, 11, 43, 19, 37 , 16];
// var arrayOfSplicedValues = lottoNums.splice(2, 1); // (index number to start, quantity of elements to remove)
// console.log(arrayOfSplicedValues); // logs 43.  2nd index, one value.


// //SLICE = NON-MUTATING.  Doesn't alter original array after slicing
// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSlicedValues = lottoNums.splice(2, 4);
// console.log(arrayOfSlicedValues);
// console.log(lottoNums)

// var a = '6'

// var intA = parseInt(a)

// console.log(intA + 3)

// let alph = "abcdefghijklmnopqrstuvwxyz";
// let chars = alph.split('');
// console.log(chars);

// let alph2 = chars.join('');
// console.log(alph2)


// POTENTIAL INTERVIEW QUESTION:

// var num = 7345;

// var reverse = num.toString().split('').reverse().join('');

// var rnum = parseInt(reverse)

// console.log(rnum);

// var arr = [6,7,9,3]

// for (var index = 0; index < arr.length; index++) {
//     arr[]
// }


// GREEDY ALGORITHIM
// least amount of coins possible to get to number


// var coinTotal = 0;

// var coins = [25,10, 5];

// var amount = 40;

// var index = 0; // referring to space on list

// while(amount > 0) {
//     if(coins[index] <= amount){
//         amount = amount-coins[index];
//         coinTotal++; // moves up the total
//     }
//     else {
//         index++; //moves up the index 
//     }
// }
// console.log(coinTotal);


// var phoneBook = {
//     firstName: 'Adam',
//     lastName: 'MacKinon'

// }

// // for in --- lop through an object slides 53-56 in presentation!!


// phoneBook['middleName'] = 'Corey' //adding a key

// phoneBook['lastName'] = 'Mackinnon' //updating an existing key

// delete phoneBook['lastName']

// console.log(phoneBook);

// function fname(){
//     console.log('A function was executed');
// }

// function add(num1, num2){
//     return num1 + num2;

// }
// var result = add(4,8)
// console.log(result)
// console.log(`the sum of the numbers is ${result}`)

// add(4,8)
// fname()

