import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  @Input() task: Task;
  faTimes = faTimes;
  @Output() dTask: EventEmitter<Task> = new EventEmitter();
  @Output() reminder: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { 
  }

  deleteTask(task: Task) {
    this.dTask.emit(task);
  }

  toggleReminder(task: Task) {
    this.reminder.emit(task);
  }

}
