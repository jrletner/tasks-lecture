import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatusPipe } from './task-status.pipe';
import { TaskHighlightDirective } from './task-highlight.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskStatusPipe, TaskHighlightDirective],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [FormsModule, TaskStatusPipe, TaskHighlightDirective, CommonModule],
})
export class SharedModule { }
