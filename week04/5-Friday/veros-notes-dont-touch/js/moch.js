

// 1. create 2 anchor tags

var a1 = document.createElement('a')
a1.textContent = "Home";
a1.setAttribute('class', 'nav-item nav-link active');



var a2 = document.createElement('a');
a2.textContent = "About Us";
a2.setAttribute('class', 'nav-item nav-link active')

//2. create div tag
var div = document.createElement('div');
div.setAttribute('class', 'nav navbar-nav')

//3. append 2 anchors to our div
div.appendChild(a1);
div.appendChild(a2);

//4 create nav element 
var nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand navbar-light bg-light')

//5 append div to nav element 
nav.appendChild(div);

// 6. find body element 
var body = document.querySelector('body');


// 7. append nav element to body
body.appendChild(nav);