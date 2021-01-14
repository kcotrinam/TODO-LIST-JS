(()=>{"use strict";var e={p:""};const t=e.p+"3101e102980aa335648b9657b1b3a7ab.svg";class o{constructor(e,t,o,n,r,i,a=!1){this.id=e,this.project=t,this.title=o,this.date=n,this.description=r,this.priority=i,this.check=a}}class n{constructor(e="default",t="#d01de0",o=[]){this.title=e,this.color=t,this.todoArray=o}}class r{constructor(e){this.data=JSON.parse(window.localStorage.getItem(e)),this.key=e}saveDataToTheLocalStorage(e){return window.localStorage.setItem(this.key,JSON.stringify(e))}getDatafromTheLocalStorage(){return null===this.data||"null"===this.data?[]:this.data}}class i{constructor(){this.projectContainer=document.getElementById("projects"),this.todoContainer=document.getElementById("all-todos-container")}static eventForClick(e,t,o,n){t.addEventListener("click",(t=>{if(t.target.id===`title-${e.id}`||t.target.id===`date-${e.id}`||t.target.id===`container-${e.id}`){document.getElementById(`details-${e.id}`).classList.toggle("d-none")}if(t.target.id===`delete-${e.id}`){const t=document.getElementById(`container-${e.id}`),i=document.getElementById(`details-${e.id}`),a=o.todos.indexOf(e);if(a>-1){o.todos.splice(a,1);const e=new r("todoApp");t.remove(),i.remove(),e.saveDataToTheLocalStorage(n),window.location.reload()}}if(t.target.id===`checkbox-${e.id}`){const t=new r("todoApp"),o=document.getElementById(`check-mark-${e.id}`),i=document.getElementById(`title-${e.id}`),a=document.getElementById(`checkbox-${e.id}`);i.classList.toggle("cross-line"),o.classList.toggle("d-none"),e.check=a.checked,t.saveDataToTheLocalStorage(n),window.location.reload()}}))}static eventForFocusOut(e,t,o){e.addEventListener("focusout",(e=>{const n=new r("todoApp");if(e.target.id===`description-${t.id}`&&(t.description=e.target.innerHTML,n.saveDataToTheLocalStorage(o)),e.target.id===`editable-title-${t.id}`){document.getElementById(`title-${t.id}`).innerHTML=e.target.innerHTML,t.title=e.target.innerHTML,n.saveDataToTheLocalStorage(o)}if(e.target.id===`priority-${t.id}`&&(t.priority=e.target.value,n.saveDataToTheLocalStorage(o),window.location.reload()),e.target.id===`edit-date-${t.id}`){document.getElementById(`date-${t.id}`).innerHTML=`Due date: ${e.target.value}`,t.date=e.target.value,n.saveDataToTheLocalStorage(o)}}))}static renderCheckCard(e){return e.check?`<div class="checkbox-container"id="check-${e.id}">\n        <input type="checkbox" name="checkbox-${e.id}" id="checkbox-${e.id}" class="checkbox" checked>\n        <label for="checkbox-${e.id}" class="checkbox-circle" id="label-${e.id}"></label>\n        <label for="checkbox-${e.id}" id="check-mark-${e.id}" class="checkbox-checker">\n        <ion-icon name="checkmark-outline"></ion-icon>\n        </label>\n      </div>\n      <p class="todo-title cross-line" id="title-${e.id}">\n        ${e.title}\n      </p>`:`<div class="checkbox-container"id="check-${e.id}">\n      <input type="checkbox" name="checkbox-${e.id}" id="checkbox-${e.id}" class="checkbox">\n      <label for="checkbox-${e.id}" class="checkbox-circle" id="label-${e.id}"></label>\n      <label for="checkbox-${e.id}" id="check-mark-${e.id}" class="checkbox-checker d-none">\n      <ion-icon name="checkmark-outline"></ion-icon>\n      </label>\n    </div>\n    <p class="todo-title" id="title-${e.id}">\n      ${e.title}\n    </p>`}static renderTodoCard(e){return`\n      <div class="todo d-flex" id="container-${e.id}">\n        ${i.renderCheckCard(e)}\n        <div class="todo-date ml-auto gray-color" id="date-${e.id}"> Due date: ${e.date}</div>\n        <ion-icon name="trash-outline" class="delete-todo-icon" id="delete-${e.id}"></ion-icon>\n        <div class="priority-color-container priority-color-${e.priority}" id="color-${e.id}"></div>\n      </div>\n      <div class="todo-details d-none" id="details-${e.id}">\n        <div class="edit-container">\n          <p class="gray-color">Title</p>\n          <p contenteditable="true" id="editable-title-${e.id}" class="editable-content">${e.title}</p>\n        </div>\n        <div class="edit-container">\n          <p class="gray-color">Due date:</p>\n          <input type="date" value="${e.date}" id="edit-date-${e.id}" class="editable-content">\n        </div>\n        <div class="edit-container">\n          <p class="gray-color">Description: </p>\n          <p class="editable-content" id="description-${e.id}">\n              ${e.description}\n          </p>\n        </div>\n        <div class="edit-container">\n          <p class="gray-color">Priority: </p>\n          <select id="priority-${e.id}" class="editable-content">\n            <option value="1">1</option>\n            <option value="2">2</option>\n            <option value="3">3</option>\n          </select>\n        </div>\n      </div>\n    `}static construcCard(e,t,o,n){const r=document.createElement("div"),a=o.title.replace(/\s/g,"");r.id=`todo-${a}`,r.innerHTML=i.renderTodoCard(o),i.eventForClick(o,r,t,n),i.eventForFocusOut(r,o,n),e.append(r);const c=document.getElementById(`label-${o.id}`);document.getElementById(`description-${o.id}`).contentEditable=!0,c.style.border=`${t.color} 1px solid`}static renderProjectCard(e,t,o){const n=document.createElement("div");n.className="project",n.innerHTML=`\n    <p class="gray-color project-number">\n      <span id="project-number">${e.todos.length}</span>  Todos\n    </p>\n    <b>${e.name} </b>\n    <div class="project-color-default" id="${e.name}-color">\n    </div>`,t.append(n);document.getElementById(`${e.name}-color`).style.backgroundColor=e.color,n.addEventListener("click",(()=>{const t=document.getElementById("all-todos-container");t.innerHTML="",e.todos&&e.todos.forEach((n=>{i.construcCard(t,e,n,o)}))}))}renderProjects(){const e=new r("todoApp").getDatafromTheLocalStorage();return this.projectContainer.innerHTML="",e?(e.forEach((t=>{i.renderProjectCard(t,this.projectContainer,e)})),e[0].name):e}renderAllTodos(){const e=new r("todoApp").getDatafromTheLocalStorage();return this.todoContainer.innerHTML="",e?(e.forEach((t=>{t.todos.forEach((o=>{i.construcCard(this.todoContainer,t,o,e)}))})),e[0].todos):e}}class a{constructor(e,t){const o=e.children[1];this.form=o,this.btn=t}static renderErrorValidation(){const e=document.getElementById("errors");return e.innerHTML="",e.innerHTML="To create a new to-do requires all filed",!1}static formValidation(e){return!!(e.title&&e.date&&e.description)||a.renderErrorValidation()}static validateProjectForm(e){return!e&&(a.renderErrorValidation(),!0)}static validateProjectUniquenes(e,t){return!document.getElementById("project-list").querySelector(`#${e}`)||(t.innerHTML=`The project ${e} already exists.`,!1)}static getProjectTitleAndColor(e){const t=document.getElementById("errors"),o=e.elements.projectTitle.value;if(t.innerHTML="",a.validateProjectForm(o))return!1;const r=e.elements.color.value;if(!a.validateProjectUniquenes(o,t))return!1;return new n(o,r)}static closeForm(e){e.classList.toggle("d-none")}static saveDataToTheLocalStorage(e,t){window.localStorage.setItem(e,JSON.stringify(t))}static getDataforTheLocalStorage(e){const t=JSON.parse(window.localStorage.getItem(e));return null===t||"null"===t?[]:t}static addNewProjectToForm(e){if(!e)return!1;const t=document.getElementById("project-form-container"),o=document.getElementById("project-list"),n=document.createElement("option");return n.value=e.title,n.selected="selected",n.id=e.title,n.innerHTML=e.title,o.append(n),a.saveDataToTheLocalStorage(`${e.title}Color`,{color:e.color}),a.closeForm(t),e}static getProjectFormInfo(){const e=document.getElementById("project-form"),t=document.getElementById("project-form-container");e.addEventListener("click",(o=>{if("btn-create-project"===o.target.id){const t=a.getProjectTitleAndColor(e);return a.addNewProjectToForm(t)}return"cancel-project-button"===o.target.id&&(a.closeForm(t),!1)}))}static lookExistenceProject(e){const t=a.getDataforTheLocalStorage("todoApp");if(t)for(const o of t)if(o.name===e.name)return o.todos.push(e.todos[0]),t;return t.push(e),t}static saveData(e){const t=((e=21)=>{let t="",o=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&o[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t})(10),n=e.elements.project.value,r=window.localStorage.getItem(`${n}Color`),i=e.elements.title.value,c=e.elements.date.value,d=e.elements.description.value,l=e.elements.priority.value;null===r&&a.saveDataToTheLocalStorage(`${n}Color`,{color:"#d01de0"});const s=a.getDataforTheLocalStorage(`${n}Color`),m=new o(t,n,i,c,d,l);if(!a.formValidation(m))return!1;const u={name:n,color:s.color,todos:[m]},g=a.lookExistenceProject(u);return a.saveDataToTheLocalStorage("todoApp",g),!0}static addOptionsFromStorage(){const e=document.getElementById("project-list"),t=a.getDataforTheLocalStorage("todoApp");t&&t.forEach((t=>{if("default"!==t.name){const o=document.createElement("option");o.value=t.name,o.id=t.name,o.innerHTML=t.name,e.append(o)}}))}getFromData(){a.addOptionsFromStorage(),a.getProjectFormInfo(),this.form.addEventListener("click",(e=>{if("create-button"===e.target.id){const e=document.getElementById("todo-form-container");if(a.saveData(this.form)){const t=new i;t.renderProjects(),t.renderAllTodos(),this.form.reset(),a.closeForm(e)}}if("create-project"===e.target.id){const e=document.getElementById("project-form-container");a.closeForm(e)}if("cancel-button"===e.target.id){const e=document.getElementById("todo-form-container");a.closeForm(e)}}))}}const c=document.getElementById("photo"),d=document.getElementById("menu-li"),l=document.getElementById("aside-container"),s=document.getElementById("add-todo-btn"),m=document.getElementById("todo-form-container"),u=new i;u.renderProjects(),u.renderAllTodos();new a(m,s).getFromData();const g=new class{constructor(e,o){this.name=e,this.photo=t,this.asideContainer=o}putLogo(e){e.src=this.photo}activateClose(){this.asideContainer.addEventListener("click",(e=>{"aside-container"!==e.target.id&&"arrow"!==e.target.id||this.asideContainer.classList.add("d-none")}))}}("kender",l);g.putLogo(c),g.activateClose();new class{constructor(e,t){this.element=e,this.openElement=t}activateOpenMemu(){this.element.addEventListener("click",(()=>{this.openElement.classList.toggle("d-none")}))}}(d,l).activateOpenMemu();(new class{constructor(){this.openBtn=document.getElementById("add-todo-btn"),this.formContainer=document.getElementById("todo-form-container")}activateButton(){this.openBtn.addEventListener("click",(()=>{this.formContainer.classList.toggle("d-none")}))}}).activateButton()})();