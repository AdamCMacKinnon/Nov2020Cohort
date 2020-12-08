//sort by the sum of the inner array
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6],
];

//arr = [4, 20, 9]

function sum(arr) {
  let sumResult = arr.reduce(function (acc, currentValue) {
    return acc + currentValue; // acc = acc + currentValue
  }, 0);

  return sumResult;
}


function sortArr(arr){

    arr.sort(function(a, b){
        return sum(a) - sum(b)  //a= 8,  b= 20
    })
}


sortArr(arr)

var a =0;

const sum = a=>a * 3;

function sum(a){
    return a* 3;
}


let arr = [1, 4, 6, 7]

let newArr = arr.map(el => el)


