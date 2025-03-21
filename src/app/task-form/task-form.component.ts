import { Component } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { SharedModule } from '../shared/shared.module';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-task-form',
  imports: [SharedModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  constructor(private taskService: TaskService, private notify: NotificationService) {}

  // Properties
  newTaskTitle = '';

  get taskCount() {
    return this.taskService.taskCount();
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

