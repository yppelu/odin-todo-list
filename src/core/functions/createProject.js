import Project from "../classes/Project.js";

export default function createProject(title, color) {
  const id = Date.now();
  Project.saveProject(id, new Project(title, color));
}