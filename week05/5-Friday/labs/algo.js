// const isUnique = (arr) => {
//     let result = true;
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (i !== j && arr[i] === arr[j]) {
//           result = false;
//         }
//       }
//     }
//     return result;
  // };
  // console.log(isUnique([1,2,3]) === true);
  // console.log(isUnique([1,1,3]) === false);


var string = ('rail safety', 'fairy tales')


var anagram = function(string) {
  let char = {}

  string.forEach(string => {
    let x = string.split('').sort()
  })
}