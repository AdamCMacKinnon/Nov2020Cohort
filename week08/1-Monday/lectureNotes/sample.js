let lastName = require('./anotherSample');
let log = require('./log')

let Stack = require('./stack');

let stack1 = new Stack();
stack1.push(3)
stack1.push(10)
stack1.push(46)
stack1.peek()

console.log(stack1.peek());
let stack2 = new Stack();
stack2.push(1)
stack2.push(85)
stack2.push(15)
stack2.push(23)
stack2.peek()
console.log(stack2.peek());



// log.info('This is a great day')
// log.warning('pollution is a bit high')
// log.error('what are you doing, stop it!')



// module.exports = log;

