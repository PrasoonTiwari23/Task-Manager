import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem:string |null;
  todos:Todo[] ;
  constructor() {
    this.localItem=localStorage.getItem("todos");
    if(this.localItem==null)
    {
      this.todos=[];
    }
    else
    {
      this.todos=JSON.parse(this.localItem);
    }
    
   }

  ngOnInit(): void {
  }

  deleteTodo(i:Todo)
  {
  //delete element 
   const index=this.todos.indexOf(i);
   this.todos.splice(index,1);
   localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(i:Todo)
  {
  
   this.todos.push(i);
   localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(i:Todo)
  {
    const index=this.todos.indexOf(i);
   this.todos[index].active=! this.todos[index].active;
   localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
