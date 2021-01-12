

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
  
  static createAProjectDiv(project, projectContainer) {
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

  renderAllTodos(){
    const data = Render.getDatafromTheLocalStorage('todoApp');
    const todoContainer = document.getElementById('all-todos-container');
    todoContainer.innerHTML = '';
    console.log(todoContainer);
    if (data) {
      for (const project of data) {
        for (const todo of project.todos) {
          console.log(todo);
          const todoDiv = document.createElement('div');
          todoDiv.classList.add('todo', 'd-flex') ;
          todoDiv.id = `todo-${todo.title}`;
          todoDiv.innerHTML = `
          <div class="checkbox-container">
            <input type="checkbox" name="checkbox" id="checkbox" class="checkbox">
            <label for="checkbox" class="checkbox-circle"></label>
          </div>
          <p class="todo-title">
            ${todo.title}
          </p>`;
          todoContainer.append(todoDiv);
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
        Render.createAProjectDiv(project, projectContainer)
      }
    }
    
  }
  
}