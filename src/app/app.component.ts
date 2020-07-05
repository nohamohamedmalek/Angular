import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';
  todos = [
    {
      label: 'React Tasks',
      done: false,
    },
    {
      label: 'Watch Movie',
      done: false,
    },
    {
      label: 'Angular Task',
      done: true,
    },
    {
      label: 'Play my music',
      done: false,

    },
    {
      label: 'Sleep',
      done: true,
    }
    
  ];

  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo)
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label)
  }
}
