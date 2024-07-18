const bankAccountFactory = (balance) => {
    return {
      checkBalance() {
        if(!balance) {return 0};
        return parseInt(balance);
      },
      add(toAdd) {
        console.log(`$${toAdd} added.`);
        return balance += toAdd;
      },
      subtract(toSubtract) {
        console.log(`$${toSubtract} subtracted.`);
        return balance -= toSubtract;
      }
    }
};
// console.info(typeof(bankAccountFactory()))
// console.info(Object.keys(bankAccountFactory()))


module.exports = {
  bankAccountFactory,
};
