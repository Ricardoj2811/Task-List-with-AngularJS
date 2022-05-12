import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import {Task} from '../../tasks'


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

}

