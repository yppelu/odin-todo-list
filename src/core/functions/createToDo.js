import Project from "../classes/Project.js";
import ToDo from "../classes/ToDo.js";

export default function createToDo(projectId, title, description, dueDate, important) {
  const toDoId = Date.now();
  (Project.getProject(projectId)).saveToDo(toDoId, new ToDo(title, description, dueDate, important));
}