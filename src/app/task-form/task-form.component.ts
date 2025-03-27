import { Component } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { SharedModule } from '../shared/shared.module';
import { NotificationService } from '../shared/notification.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-task-form',
  imports: [SharedModule, MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  constructor(
    private taskService: TaskService,
    private notify: NotificationService
  ) {}

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
    this.notify.show('✅ Task added!');
  }
}
