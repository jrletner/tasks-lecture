import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatusPipe } from './task-status.pipe';
import { TaskHighlightDirective } from './task-highlight.directive';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from '../notification/notification.component';
@NgModule({
  declarations: [
    TaskStatusPipe,
    TaskHighlightDirective,
    NotificationComponent,],
  imports: [
    CommonModule, FormsModule,
  ],
  exports: [
    NotificationComponent,
    FormsModule,
    TaskStatusPipe,
    TaskHighlightDirective,
    CommonModule],
})
export class SharedModule { }
