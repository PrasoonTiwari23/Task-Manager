import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() i: Todo ;
  @Input() flag: number ;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox : EventEmitter<Todo> = new EventEmitter();
  onClick(i:Todo)
  {
     this.todoDelete.emit(i);
  }
  onCheckboxClick(i:Todo)
  {
     this.todoCheckbox.emit(i);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
