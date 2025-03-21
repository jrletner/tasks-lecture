import { Component, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list',
  imports: [NgClass],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  // method to get tasks
  get tasks() {
    return this.taskService.tasks();
  }

  // method for deleting task
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  // method to complete task
  completeTask(id: number) {
    this.taskService.completeTask(id);
  }
}
