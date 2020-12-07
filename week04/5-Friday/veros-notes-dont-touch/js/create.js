
// 1. create element 

var div = document.createElement('div');

//<div>text</div>
div.textContent = "Hello World"

//1a. First element 



var anchor = document.createElement('a');

anchor.textContent = "Google"; //node

anchor.setAttribute('href', 'https://google.com')
var anchor1 = document.createElement('a');

anchor1.textContent = "Google"; //node

anchor1.setAttribute('href', 'https://google.com')

div.appendChild(anchor1);
//2a. Append to existing element

//div.appendChild(anchor)


//2. Append new element to an existing 
// element in the dom

var body = document.querySelector('body');

body.appendChild(div);
body.appendChild(anchor);

var pNode = document.querySelector('p');

document.body.removeChild(pNode)

