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
  AppleIPhone,
} = require('./1-inheritance-polymorphism');



// const peterContact = { name: 'Peter', phoneNumber: '3499217541' };
// const peterAddedMsg = myPhone.addContact(peterContact);
// expect(myPhone.contacts).toEqual([reubenContact, peterContact]);
// expect(peterAddedMsg).toEqual('Peter added.');
// const myPhone = new Phone('3448731233');

// const reubenContact = { name: 'Reuben', phoneNumber: '3462217541' };
// const peterContact = { name: 'Peter', phoneNumber: '3499217541' };
// myPhone.addContact(reubenContact);
// myPhone.addContact(peterContact);

// const reubenCallMsg = myPhone.makeCall('Reuben');
// console.log(reubenCallMsg)//'Calling Reuben...');

// const peterCallMsg = myPhone.makeCall('Peter');
// console.log(peterCallMsg)//'Calling Peter...');

// const Test = myPhone.makeCall('Test');
// console.log(Test)

// const myIPhone = new AppleIPhone('3448731233', 'iPhone 12');
// const myAndroid = new Phone('3448731233');

//   const zoContact = { name: 'Zo', phoneNumber: '8462092523' };
//   myIPhone.addContact(zoContact);
//   // console.log(myIPhone.contacts)
//   // console.log([zoContact])
//   // expect(myIPhone.makeCall(zoContact.phoneNumber)).toEqual(`Calling Zo...`);
//   console.log(myIPhone.makeCall(zoContact.phoneNumber))
//   //`Calling Zo...`

const myIPhone = new AppleIPhone('3448731233', 'iPhone 6S');
const mayaAndroid = new Phone('3499217541');
    // we don't want you to just check the model, so it's random and counterfeited!
    const reubenIPhone = new AppleIPhone('3462217541', Math.random().toString(36).substring(7));
    const knockoffIphone = new Phone('3462217541');
    knockoffIphone.model = 'iPhon 77';

    const randomIMsg = Math.random().toString(36).substring(7);
    const reubenAppleMsg = myIPhone.sendIMessage(reubenIPhone, randomIMsg);
    console.log(mayaAndroid)
    console.log(reubenIPhone)
    console.log(knockoffIphone)
    console.log(reubenAppleMsg)
    // expect(reubenAppleMsg).toEqual(`Message: ${randomIMsg} - sent from ${myIPhone.model}`);

    const mayaAndroidMsg = myIPhone.sendIMessage(mayaAndroid, 'Hey Maya');
    console.log(mayaAndroidMsg)
    // expect(mayaAndroidMsg).toEqual('Message could not be sent.');

    const knockoffIphoneMsg = myIPhone.sendIMessage(knockoffIphone, 'What even is that phone?');
    console.log(knockoffIphoneMsg)
    // expect(knockoffIphoneMsg).toEqual('Message could not be sent.');

// const myAccount = bankAccountFactory(1000)
// console.log(Object.keys(bankAccountFactory()))
// console.log(myAccount.checkBalance())
// myAccount.add(200);
// console.log(myAccount.checkBalance())
// myAccount.add(800);
// console.log(myAccount.checkBalance())
