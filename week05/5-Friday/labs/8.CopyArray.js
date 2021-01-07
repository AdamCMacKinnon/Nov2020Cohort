/* 
***Copy Array b from a and push a new element 4 into b 
*/
var a = [1, 2, 3];
var b;
var b = [...a]



console.log(a);
// [1, 2, 3];
b.push(4);
var arr = 
console.log(b);

//[1, 2, 3, 4];

/* 
***Copy Array d from c and push new element 6  into sub array.
*/
var c = [1, 2, 3, [4, 5]];
var d = [...c, ...c[3]];
d[3].push(6)

console.log(c)
// [1, 2, 3, [4, 5]]

console.log(d);
// [1, 2, 3, [4, 5, 6]]

var d = [...c.slice(0,3), ...c[3]];

