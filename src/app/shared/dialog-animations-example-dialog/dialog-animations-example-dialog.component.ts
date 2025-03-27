import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.component.html',
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
  constructor(private taskService: TaskService) {}

  get action() {
    return this.taskService.taskAction();
  }

  handleCancel() {
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
