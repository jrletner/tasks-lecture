import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dialog-box',
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css',
})
export class DialogBoxComponent {
  readonly dialogRef = inject(MatDialogRef<DialogBoxComponent>);
  constructor(private taskService: TaskService) {}

  get action() {
    return this.taskService.taskAction();
  }

  handleClose() {
    this.taskService.taskAction.set(null);
    this.taskService.taskToAction.set(null);
  }

  handleAction(action: string) {
    const taskID = this.taskService.taskToAction();
    if (action === 'deleteTask') {
      this.taskService.deleteTask(taskID!);
    } else if (action === 'completeTask') {
      this.taskService.completeTask(taskID!);
    }
  }
}
