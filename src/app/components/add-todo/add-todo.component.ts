import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/Models/Todo';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo = new EventEmitter<Todo>()

  title:string
  todos:Todo[]

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    // for future project
    // this.todoService.getMovies().subscribe(movies=>console.log(movies))
  }


  onSubmit(){
    const todo ={
      title: this.title,
      id:1 + Math.floor((10000 - 1) * Math.random()),
      completed:false
      
    }

    this.addTodo.emit(todo)
    // clear title field
    this.title= ''
  
  }

}
