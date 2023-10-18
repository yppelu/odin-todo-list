export default class ToDo {
  #title;
  #description;
  #dueDate;
  #important;

  constructor(title, description, dueDate, important) {
    setTitle(title);
    setDescription(description);
    setDueDate(dueDate);
    this.#important = important;
  }

  setTitle(title) {
    this.#title = title;
  }

  setDescription(description) {
    this.#description = description;
  }

  setDueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  toggleImportant() {
    this.#important = !this.#important;
  }
}