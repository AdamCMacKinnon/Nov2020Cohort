
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/


var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write code here

let obj = {plus:0, minus:0};

function sumPlusMinus(nums){
    for (let x of nums){
            if(x > 0 ){
                obj.plus += x;
            }
            else 
                obj.minus += x;
            }
}
    


console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}

