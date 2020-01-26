import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Todo} from '../../../Models/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ Input() todo:Todo
  @ Output() deleteTodo = new EventEmitter <Todo>()
  @ Output() toggleTodo = new EventEmitter <Todo>()
  constructor() { }

  ngOnInit() {
  }

  // set classes
  SetInputClasses(){
  const classes ={
    todo:true,
    'it-completed':this.todo.completed
   }
   return classes
  }

  // Toggle item
  onToggleTodoItem(todo){
    // UI toggle
    this.todo.completed = !this.todo.completed

    // datastored toggle 
    this.toggleTodo.emit(todo)
    
  }

  // Delete todo Item
  onDeleteTodoItem(todo){
    this.deleteTodo.emit(todo)
  }

}
