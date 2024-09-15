"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
const data_1 = require("./data");
// console.log("My Todo List");
// for (let i = 0; i < data.length; i++) {
//   let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
//   todoItem.printDetails();
// }
const sampleTodos = data_1.data.map((item) => {
    return new TodoItem_1.TodoItem(item.id, item.task, item.complete);
});
const myTodoCollection = new TodoCollection_1.TodoCollection("My Todo List", sampleTodos);
myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.addTodo("친구만나기");
myTodoCollection.markComplete(3, true);
myTodoCollection.removeComplete();
console.log(`${myTodoCollection.userName}`);
// myTodoCollection.todoItems.forEach((item) => item.printDetails());
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("====================");
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());
