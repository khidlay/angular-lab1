import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'Wash the dishes',
      completed: true,
    },
    {
      task: 'Do the laundry',
      completed: true,
    },
    {
      task: 'Mop the kitchen',
      completed: false,
    },
    {
      task: 'Scrub the bathtub',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addTask = (form: NgForm, arrayOfTodos: Todo[]): void => {
    console.log(form);
    console.log(form.form.value.task);
    let newTask: Todo = {
      task: form.form.value.task,
      completed: form.form.value.complete === 'yes',
    };
    arrayOfTodos.push(newTask);
  };

  searchTerm = (form: NgForm) => {
    console.log(form.form.value.term);
    this.searchTerm = form.form.value.term;
  };

  filterTasks = (term: string): Todo[] => {
    return this.todos.filter((item) => {
      let currenItem = item.task.toLowerCase().trim();
      return currenItem.includes(term.toLowerCase().trim());
    });
  };
}
