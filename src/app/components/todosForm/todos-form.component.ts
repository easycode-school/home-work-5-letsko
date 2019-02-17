import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {
  @Output() addNewTodo = new EventEmitter();
  public title = '';
  public text = '';

  constructor() { }
  ngOnInit() { }

  /**
   * onSubmitHandler - обработчик события отправки формы
   * @param todoTitle - input загаловка задачи
   * @param todoText - input текста задачи
   *    1. Проводит валидацию формы, если не все поля формы заполнены - возвращает сообщоение в консоль;
   *    2. Создает объект новой задачи и передает его в родительскую компоненту;
   *    3. Очищает форму добавления задачи.
   */
  protected onSubmitHandler(form: NgForm): void {
    if (!this.title || !this.text) {
      return console.log('заполните все поля');
    }

    const newTodo = {
      title: this.title,
      text: this.text
    };

    this.addNewTodo.emit(newTodo);
    form.reset();
  }
}
