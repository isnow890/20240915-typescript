import { TodoItem } from "./TodoItem";

export class TodoCollection {
  private nextId: number = 1;

  private itemMap: Map<number, TodoItem>;

  constructor(public userName: string, todoItems: TodoItem[] = []) {
    this.itemMap = new Map<number, TodoItem>();
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }
  public getTodoById(id: number): TodoItem | undefined {
    return this.itemMap.get(id);
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId += 1;
    }

    // this.todoItems.push(new TodoItem(this.nextId, task));

    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  //includeComplete => true : 모든 할일 목록
  //includeComplete => false : 완료 목록은 제외한 할일 목록 반환
  getTodoItems(includeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.complete
    );
  }

  removeComplete(): void {
    this.itemMap.forEach((item) => {
      if (item.complete) this.itemMap.delete(item.id);
    });
  }

  markComplete(id: number, complete: boolean): void {
    const todoItem = this.getTodoById(id);

    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}
