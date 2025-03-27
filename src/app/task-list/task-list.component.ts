import { Component, inject } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { SharedModule } from '../shared/shared.module';
import { NotificationService } from '../shared/notification.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../shared/dialog-animations-example-dialog/dialog-animations-example-dialog.component';

@Component({
  selector: 'app-task-list',
  imports: [SharedModule, MatButtonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(
    private taskService: TaskService,
    private notify: NotificationService
  ) {}

  // method to get tasks
  get tasks() {
    return this.taskService.tasks();
  }

  // MATERIAL
  readonly dialog = inject(MatDialog);

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id: number,
    action: string
  ): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.taskService.taskAction.set(action);
    this.taskService.taskToAction.set(id);
  }
}
