// const ToDoItem = require('./ToDoItem');
// const ToDoList = require('./ToDoList');
// const {
//   bankAccountFactory,
//   Phone,
//   AppleIPhone,
// } = require('./from-scratch');
const ToDoItem = require('./0-has-many-belongs-to');
const ToDoList = require('./0-has-many-belongs-to');
const {
  bankAccountFactory,
} = require('./2-factory-function');
const {
  Phone,
  AppleIPhone
} = require('./1-inheritance-polymorphism')

const myAccount = bankAccountFactory(1000)
// console.log(Object.keys(bankAccountFactory()))
console.log(myAccount.checkBalance())
myAccount.add(200);
console.log(myAccount.checkBalance())
myAccount.add(800);
console.log(myAccount.checkBalance())
