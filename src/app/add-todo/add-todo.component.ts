import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string;
  desc: string;
  var1=true;
  var2=true;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    const i={
      sno:8,
      title:this.title,
      desc: this.desc,
      active:true
    }
    this.todoAdd.emit(i);
    this.title='';
    this.desc='';
  }
}
