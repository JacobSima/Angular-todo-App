import { Component, OnInit,Input } from '@angular/core';
import {Todo} from '../../../Models/Todo'
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() name:string

  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    // this.todos =[
    //   {
    //     id:1,
    //     title:'Todo One',
    //     completed:false
    //   },
    //   {
    //     id:1,
    //     title:'Todo Two',
    //     completed:true
    //   },
    //   {
    //     id:1,
    //     title:'Todo Three',
    //     completed:false
    //   },
    //   {
    //     id:1,
    //     title:'Todo Four',
    //     completed:true
    //   },

    // ]
   
    this.todoService.getTodos().subscribe(todos=>{
      this.todos = todos
    })
  }

  // toggle Todo data
  toggleTodo(todo){
    this.todos.forEach(t=>{
      if(t.id === todo.id){t.completed = todo.completed}
    })
  }
 
  // add todo
  addTodo(todo){
    // push to the data array
    this.todoService.addTodoDB(todo).subscribe(todo=>this.todos.push(todo))}

  // delete todo
  deleteTodo(todo){
    // delete on the UI
    this.todos  = this.todos.filter(t=> t.id !== todo.id)

    // delete to database
    this.todoService.deleteTodoDB(todo).subscribe(res=> console.log('Deleted...'))
  }
  
 

}
