import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todosArray: object[] = [];

  constructor() { }
  ngOnInit() { }

  /**
   * onAddTodoHandler - обработчик события добавления новой задачи, добавляет задачу в массив задач
   * @param todo - новая задача
   */
  protected onAddTodoHandler(todo: object): void {
    this.todosArray.push(todo);
  }
}
