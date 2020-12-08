function sortArrLength(arr) {
  return arr.sort(function (a,b) {
    console.log(a,b);
    
    return b - a;
  });
}

var result = sortArrLength([4, 2, 3, 6, 9]);

console.log("result", result);
