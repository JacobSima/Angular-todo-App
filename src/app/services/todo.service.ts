import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {Todo} from '../../Models/Todo'
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httOptions ={headers : new HttpHeaders({"Content-Type":"application/json"})}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todosUrl:string =  'https://jsonplaceholder.typicode.com/todos/'
  todoLimit:string = '?_limit=5'

  constructor(private http:HttpClient) { }

  // get list of todos
  getTodos(): Observable <Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`)}

  // add to DB
  addTodoDB(todo): Observable <any>{
     return this.http.post<any>(this.todosUrl,todo,httOptions)
  }

  // delete in DB
  deleteTodoDB(todo):Observable <any>{
    return this.http.delete(`${this.todosUrl}${todo.id}`)
  } 


  // getMovies():Observable <any>{
  //   return this.http.get <any>('http://localhost:4000/api/v1/movies')
  // }


    // return [

  //    return [
  //     {
  //       id:1,
  //       title:'Todo One',
  //       completed:false
  //     },
  //     {
  //       id:2,
  //       title:'Todo Two',
  //       completed:true
  //     },
  //     {
  //       id:3,
  //       title:'Todo Three',
  //       completed:false
  //     },
  //     {
  //           id:4,
  //           title:'Todo Four',
  //           completed:true
  //       },
  //   ] 
  // }
  
  }
