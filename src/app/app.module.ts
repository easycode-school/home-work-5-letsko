import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './components/todos/todos.component';
import { TodosFormComponent } from './components/todosForm/todos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
