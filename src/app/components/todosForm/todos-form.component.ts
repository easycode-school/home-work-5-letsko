import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {
  @Output() addNewTodo = new EventEmitter();

  constructor() { }
  ngOnInit() { }

  /**
   * onSubmitHandler - обработчик события отправки формы
   * @param todoTitle - input загаловка задачи
   * @param todoText - input текста задачи
   *    1. Проводит валидацию формы, если форма не валидна - возвращает сообщоение в консоль;
   *    2. Забирает объект значений input-ов формы и выбрасывает его в обработчик добавления новой задачи в родительской компоненте;
   *    3. Очищает форму добавления задачи.
   */
  protected onSubmitHandler(form: any): void {
    if (form.invalid) {
      return console.log('заполните все поля');
    }

    this.addNewTodo.emit(form.value);
    this.clearForm(form);
  }

  /**
   * clearForm - очищает input-ы формы задач
   * @param title - input загаловка задачи
   * @param text - input текста задачи
   */
  protected clearForm(form: any): void {
    form.resetForm();
  }
}
