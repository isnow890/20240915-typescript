"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
class TodoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId += 1;
        }
        // this.todoItems.push(new TodoItem(this.nextId, task));
        this.itemMap.set(this.nextId, new TodoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    //includeComplete => true : 모든 할일 목록
    //includeComplete => false : 완료 목록은 제외한 할일 목록 반환
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete);
    }
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete)
                this.itemMap.delete(item.id);
        });
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.TodoCollection = TodoCollection;
