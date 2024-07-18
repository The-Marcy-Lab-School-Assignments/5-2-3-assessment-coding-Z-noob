const { getId } = require('./utils');

class ToDoItem {
  extra = [];
  constructor(description, priorityLevel) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
  }
  extra() {};
}
class ToDoList {
  static #allLists = [];
  listItems = [];
  constructor(name) {
    this.id = getId();
    this.name = name;
    ToDoList.#allLists.push(this);
  }
  createItem(description, priorityLevel) {
    const item = new ToDoItem(description, priorityLevel);
    this.listItems.push(item);
    return item;
  }
  getItems() {
    return [...this.listItems];
  }
  getCompletedCount() {
    const amount = this.listItems.filter(obj => obj.isDone === true);
    return amount.length;
  }
  extra() {}
  static list () {
    return [...ToDoList.#allLists];
  }
  static findBy(id) {
    return ToDoList.#allLists.find(obj => obj.id === id);
  }
}

// const chores = new ToDoList(ToDoItem, "This week's tasks");
// const groceries = new ToDoList(ToDoItem, "This week's groceries");
// const homework = new ToDoList(ToDoItem, "This week's homework");
// console.info(chores)
// console.info(chores.id)
// console.info(ToDoList.findBy(chores.id))

module.exports = {
  ToDoItem,
  ToDoList
};