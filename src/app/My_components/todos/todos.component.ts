import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/Todo';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  exportAs: 'todoaddcomponent',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  localItem: any;
  // changeTitle!: string;
  // changeDesc!: string;
  // addComponent!: AddTodoComponent;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    // localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}
  //   getEditcomponent(_tit:AddTodoComponent){
  // this.editCompo=_tit;
  //   }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // updateTodo(todo: Todo) {
  //   const index = this.todos.indexOf(todo);
  //   // console.log(index);
  //   this.changeTitle = this.todos[index].title;
  //   console.log(this.changeTitle);

  //   this.changeDesc = this.todos[index].desc;
  //   console.log(this.changeDesc);
  //   this.addComponent.title = this.changeTitle;
  // }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    console.log(index);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));

    console.log(todo);
  }
}
