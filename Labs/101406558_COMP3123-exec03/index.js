var message = require("./message")

var arith = require("./arithmatic")

console.log(message)
console.log(message.college)
console.log(message.greet())
console.log(message.sayHello("Julien"))
console.log(arith.sum(2,5))

// console.log(module)

var {mul, sub} = require("./arithmatic")
var Employee = require('./employee')


console.log(typeof Employee)
console.log(Employee)
var e1 = new Employee(1, "julien")
e1.print()

console.log(arith)
console.log(mul(8,4))