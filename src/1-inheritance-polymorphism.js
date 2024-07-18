class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber
    this.contacts = []
  }
  makeCall(nameOrNum) {
    if(this.contacts.find(obj => obj.phoneNumber === nameOrNum) !== undefined) {
      return `Calling ${this.contacts.find(obj => obj.phoneNumber === nameOrNum).name}...`
    } else if(this.contacts.find(obj => obj.name === nameOrNum) !== undefined || nameOrNum.length === 10) {
      return `Calling ${nameOrNum}...`
    }
    return 'Invalid';
  }
  addContact(objToAdd) {
    if(!objToAdd.name || !objToAdd.phoneNumber || objToAdd.phoneNumber.length !== 10) {
      return 'Invalid'}
    this.contacts.push(objToAdd)
    return `${objToAdd.name} added.`
  }
  removeContact(name) {
    const indexToDelete = this.contacts.findIndex(obj => obj.name === name);
    if (indexToDelete !== -1) {
      this.contacts.splice(indexToDelete, 1);
      return `${name} removed.`
    };
    return 'Contact not found.'
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, phoneModel) {
    super(phoneNumber);
    this.model = phoneModel;
  }
  sendIMessage(phoneObj, Msg) {
    console.log(phoneObj instanceof AppleIPhone)
    if(phoneObj instanceof AppleIPhone) {
      return `Message: ${Msg} - sent from ${this.model}`
    } else { return 'Message could not be sent.'}
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
