var div = document.createElement('div');

div.textContent = "Hello World"

var body = document.querySelector('body');

var anchor = document.createElement('a');

anchor.textContent = "Google"
anchor.setAttribute('href', 'https://www.google.com');

div.appendChild(anchor);


body.appendChild(div);
body.appendChild(anchor);
body.appendChild(anchor);

var pNode = document.querySelector('p');
document.body.removeChild(pNode);