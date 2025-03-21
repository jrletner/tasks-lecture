import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatusPipe } from './task-status.pipe';
import { TaskHighlightDirective } from './task-highlight.directive';


@NgModule({
  declarations: [TaskStatusPipe, TaskHighlightDirective],
  imports: [
    CommonModule,
  ],
  exports: [TaskStatusPipe, TaskHighlightDirective],
})
export class SharedModule { }
