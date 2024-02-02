export default class Todo {
  constructor(title, description, dueDate, important) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.important = important;
  }
}
