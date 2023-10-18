export default class Project {
  static #allProjects = {};

  static saveProject(id, project) {
    this.#allProjects[id] = project;
  }

  static deleteProject(id) {
    delete this.#allProjects[id];
  }

  static getProject(id) {
    return this.#allProjects[id];
  }

  #title;
  #toDos = {};

  constructor(title) {
    setTitle(title);
  }

  setTitle(title) {
    this.#title = title;
  }

  saveToDo(id, toDo) {
    this.#toDos[id] = toDo;
  }

  deleteToDo(id) {
    delete this.#toDos[id];
  }

  getToDo(id) {
    return this.#toDos[id];
  }
}