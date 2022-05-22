import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3011/tasks';

  tasks: Task[] = [];
  constructor(private http: HttpClient) { }


  getTasks() : Observable<Task[]> {
   // const tasks = of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);
    //return tasks;
  }

  deleteTask(task: Task): Observable<Task> {
    const appendedUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(appendedUrl);
  }

}
