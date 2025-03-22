import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  constructor(private taskService: TaskService) {}

  // Properties
  newTaskTitle = '';

  // get the signal taskCount from service
  get taskCount() {
    return this.taskService.taskCount();
  }

  // get the signal taskCountCompleted from service
  get taskCountCompleted() {
    return this.taskService.taskCountCompleted();
  }

  // Methods
  addTask() {
    if (this.newTaskTitle) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }
}
