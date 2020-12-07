// // 1. create 2 anchor tags
// var a1 = document.createElement('a')
// a1.textContent = "Home";
// a1.setAttribute('class', 'nav-item nav-link active');
// var a2 = document.createElement('a');
// a2.textContent = "About Us";
// a2.setAttribute('class', 'nav-item nav-link')
// //2. create div tag
// var div = document.createElement('div');
// div.setAttribute('class', 'nav navbar-nav')
// //3. append 2 anchors to our div
// div.appendChild(a1);
// div.appendChild(a2);
// //4 create nav element 
// var nav = document.createElement('nav');
// nav.setAttribute('class', 'navbar navbar-expand navbar-light bg-light')
// //5 append div to nav element 
// nav.appendChild(div);
// // 6. find body element 
// var body = document.querySelector('body');
// // 7. append nav element to body
// body.appendChild(nav);


// 1. create 2 anchor tags
var a1 = document.createElement('a')
a1.textContent = "Home";
a1.setAttribute('class', 'nav-item nav-link active');
var a2 = document.createElement('a');
a2.textContent = "Categories";
a2.setAttribute('class', 'nav-item nav-link')
//2. create div tag
var div = document.createElement('div');
div.setAttribute('class', 'nav navbar-nav')
//3. append 2 anchors to our div
div.appendChild(a1);
div.appendChild(a2);
//4 create nav element 
var nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand navbar-light bg-primary text-white')
nav.textContent = "HighOnCoding"
//5 append div to nav element 
nav.appendChild(div);
// 6. find body element 
var body = document.querySelector('body');
// 7. append nav element to body
body.appendChild(nav);

// second row
// H1 header
var h1 = document.createElement('h1')

h1.textContent = 'Curse of Current Reviews';
// P text
var p1 = document.createElement('p');
p1.setAttribute('style', 'margin-top: 50px;')
p1.textContent = 'When you want to buy any application fromt he Apple iTunes store you have more choices than you can handle.  Most of the users scroll past the application description completely avoiding it like ads played on the right column of your webpage.  Their choice is dependent on three important factors price, screenshot, and reviews';
// div for row
var div1 = document.createElement('div');
div1.setAttribute('class','col-10 offset-1 bg-light')
div1.setAttribute('style', 'height: 250px; margin-top: 30px;')
div1.appendChild(h1);
div1.appendChild(p1);
body.appendChild(div1);

var h2 = document.createElement('h2');
h2.setAttribute('class', 'text-primary');
h2.textContent = 'Hello WatchKit'
var p2 = document.createElement('p');
p2.textContent = 'Last month Apple released the anticipated WatchKit Framework for developrs in the form of iOS 8.2 beta SDK release.  The WatchKit framework enable the developers to create Apple Watch applications.  In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.'
// div for second row
var div2 = document.createElement('div');
div2.setAttribute('class', 'col-10 offset-1')
div2.setAttribute('style', 'margin-top: 10px;')
div2.appendChild(h2);
div2.appendChild(p2);
body.appendChild(div2);

var row1 = document.createElement('div');
row1.setAttribute('class', 'col-10 offset-1 bg-warning text-white');
// Comment and Likes bar
row1.textContent = '12 Comments    124 likes'
body.appendChild(row1);
// repeat DIV for second paragraph
var h3 = document.createElement('h3');
h3.setAttribute('class', 'text-primary');
h3.textContext = 'Introduction to Swift'
var p2nd = document.createElement('p');
p2nd.textContent = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications.  Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction.  This article will revolve around the basic concepts in the Swift language and how you can get started.'
var div3 = document.createElement('div');
div3.setAttribute('class', 'col-10 offset-1');
div3.setAttribute('style', 'margin top: 10px;');
div3.appendChild(h3);
div3.appendChild(p2nd);
body.appendChild(div3);

//second comment/likes bar
var row2 = document.createElement('div');
row2.setAttribute('class', 'col-10 offset-1 bg-warning text-white');
row2.textContent = '15 comments   45 likes'
body.appendChild(row2);








