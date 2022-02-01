
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

import './styles.css';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));



const newTodo = new Todo('Aprender JavaScript');

// console.log('todos', todoList.todos);
