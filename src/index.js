import './styles/reset.scss';
import './styles/general.scss';
import Todo from './components/todo/todo.component';
import Project from './components/project/project.component';
import Button from './components/add-todo-button/button.component';
import Aside from './components/aside/aside.component';



var categoriesArray = [];
const image = document.getElementById('photo');

const aside = new Aside('kender');
aside.putLogo(image);
aside.sayHello();

console.log('Hello Todo app this is fun');
const todo = new Todo('kender');
todo.sayHello();
const project = new Project('kender');
project.sayHello();
const button = new Button('kender');
button.sayHello();