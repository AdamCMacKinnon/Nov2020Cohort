// console.log("inside of an external js file");



// var a;

// var $name = "Veronica";

// var digitalCrafts = "school";

// digitalCrafts.length

// console.log('Joe');
// console.log('Jacob');
// console.log('Claude');


// var number  = 4;
// var float = 4.1;

// var boolean = true;

// var name = "Veronica";

// console.log(name);

// var a = 3;
// var b = "hello";

// console.log(a + b);

// console.log(b.length)

// var school = "Digital Crafts";

// console.log(school.indexOf(' '))

// true 
// false

// var boolean = true;
// console.log(boolean)

// var not = !boolean;
// console.log(not)

// var and = boolean && false;
// console.log(and)

// var or = boolean || false;
// console.log(or)

// var account1 = 4;
// var account2 = 5;
// var equals = account1 === account2;

// console.log(equals)

// var age = 19;

// if (age <= 18){

//     console.log("you can't drink in most states");
// } 
// else if(age >=21){
//     console.log('you can drink');
    
// } 
// else {
//     console.log('still not old enough');
//     if(true){
//         console.log("I'm a nested if statement");
//     }
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

// var count = 0;

// while (count < 10){

//     // count = count +1;
    
//     count++;
//     console.log(count);

// }

/*

[1, 6, 12]

[10, 6, 1]

[25, 10, 5]

50 -25 =25 

25 - 25 =0

40 - 25 =15

15 -10 = 5

5 - 5 = 0

3

//greedy algorithm

*/


// var count = 0;
// while (count < 10) {

//     count++;

//     console.log(count);
// }

// var count = 1;
// for(var count = 1; count <= 10; count++){

//     console.log(count);
// }

//push, pop
//shift, unshift
// var a = "hello";

// var myArray = [5, 7, 8, 2, 5]

// myArray[0] = "new number"
// console.log(myArray);

// myArray.pop()

// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// myArray.unshift(99);

// console.log(myArray);
// myArray.push(a)
// console.log(myArray);


// var lottoNums = [23, 11, 43, 19, 37, 16];

// var arrayOfSplicedValues = lottoNums.splice(2, 3);

// console.log(arrayOfSplicedValues);
// console.log(lottoNums);

// var lottoNums = [23, 11, 43, 19, 37, 16];

// var arrayOfSplicedValues = lottoNums.slice(2, 4);

// console.log(arrayOfSplicedValues);
// console.log(lottoNums);

let alph = "abcdefghijklmnopqrstuvwxyz";

let chars = alph.split('');

console.log(chars);

let alph2 = chars.join('');

console.log(alph2);

// var a = '6'

// var intA = parseInt(a);

// console.log(a + 3);

// var num = -17345;

// var sign = Math.sign(num);

// // var sign =  -1;
// var reverse = num.toString().split('').reverse().join('');

// var rnum = parseInt(reverse) * sign;

// console.log(rnum);


// var a = 9;

// //parseInt
// //toString() 
// // split('') 
// // reverse() 
// // join('')

// var arr = [6, 7, 9, 3]  //4



// for (var index = 0; index < arr.length; index++){

//     arr[index] //arr[0]= 6, arr[1] =7, arr[2]= 9, arr[3] =3
// }



// [25, 10, 5]
// var coins = 0;

// 40, 50, 80, 90
// while
// 40 - 25= 15
// 15 -10 = 5
// 5 - 5 = 0

// 3 coins


// var coinTotal = 0;

// var coins = [25, 10, 5];
// var amount = 40;
// var index = 0;

// while(amount > 0){

//     if( coins[index] <= amount){
//         amount = amount - coins[index];
//         coinTotal++;
//     }
//     else{
//         index++;
//     }
// }

// console.log(coinTotal);


// var phoneBook = {
//     firstName: "Veronica",
//     lastName: "lino"
// };

// for in -- loop through an object 


// phoneBook['middleName'] = "Celeste"

// phoneBook['lastName'] = "Lino"

// delete phoneBook['lastName']

// console.log(phoneBook);


// function fname(){
//     console.log('a function was executed');
// }

// function add(num1, num2){

//     return num1 + num2;
// }


// var result = add(4, 6)

// console.log(result)

// console.log("The sum of the numbers ", result);

// console.log(`The sum of the numbers ${2 * result}`);

// // fname()

// TwoNumberSum
var arr = [3, 5, -4, 8, 11, 1, -1, 6];
var targetSum = 10;
var table = {};


// var table = {
//     3: 3,
//     5: 5, 
//     -4: -4,

// }


let match = [];
for(var i = 0; i< arr.length; i++){
    table[arr[i]] = arr[i]
}

console.log(table);

for(var i = 0; i< arr.length; i++){

    let temp = targetSum - arr[i];

    if(table[temp] && table[temp] != arr[i]){
        match.push(temp, arr[i]);
        break;
    }
}

console.log(match);

// target = num1 + num2
// num2 = targetSum - num1
// var targetSum = 10 

// 10 - 11 = -1


// [-1, 11]

// ThreeNumberSum 

// var arr = [3, 5, -4, 8, 11, 1, -1, 6]

// var targetSum = 18
// [11, 1, 6]

