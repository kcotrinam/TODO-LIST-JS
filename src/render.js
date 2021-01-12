

export default class Render {
  static saveDataToTheLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static getDatafromTheLocalStorage(key) {
    const starage = JSON.parse(window.localStorage.getItem(key));
    if (starage === null ||starage === 'null') {
      return [];
    }
    return starage;
  }
  
  static renderProjectCard(project, projectContainer) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML =`
    <p class="gray-color project-number">
      <span id="project-number">${(project.todos).length}</span>  Todos
    </p>
    <b>${project.name} </b>
    <div class="project-color-default" id="${project.name}-color">
    </div>`;
    projectContainer.append(projectDiv);
    const colorContainer = document.getElementById(`${project.name}-color`);
    colorContainer.style.backgroundColor = project.color;
  }

  static renderTodoCard(project, todo, todoContainer){
    console.log(todo);
    const todoDiv = document.createElement('div');
    const deleteTitleSpaces = (todo.title).replace(/\s/g, '');
    todoDiv.classList.add('todo', 'd-flex') ;
    todoDiv.id = `todo-${deleteTitleSpaces}`;
    todoDiv.innerHTML = `
      <div class="checkbox-container">
        <input type="checkbox" name="checkbox" id="checkbox" class="checkbox">
        <label for="checkbox" class="checkbox-circle" id="${deleteTitleSpaces}-${project.name}"></label>
      </div>
      <p class="todo-title">
        ${todo.title}
      </p>
      <div class="priority-color-container priority-color-${todo.priority}"></div>
      `;
    todoContainer.append(todoDiv);
    const getCircle = document.getElementById(`${deleteTitleSpaces}-${project.name}`);
    getCircle.style.border = `${project.color} 1px solid`;
  }

  renderAllTodos() {
    const data = Render.getDatafromTheLocalStorage('todoApp');
    const todoContainer = document.getElementById('all-todos-container');
    todoContainer.innerHTML = '';
    console.log(todoContainer);
    if (data) {
      for (const project of data) {
        for (const todo of project.todos) {
          Render.renderTodoCard(project, todo, todoContainer)
        }
      }
    }
  }

  renderProjects() {
    const projects = Render.getDatafromTheLocalStorage('todoApp');
    const projectContainer = document.getElementById('projects');
    projectContainer.innerHTML = '';
    if (projects) {
      for (const project of projects) {
        Render.renderProjectCard(project, projectContainer)
      }
    }
    
  }
  
}