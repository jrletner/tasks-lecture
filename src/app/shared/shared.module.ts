import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatusPipe } from './task-status.pipe';
import { TaskHighlightDirective } from './task-highlight.directive';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from '../notification/notification.component';
@NgModule({
  declarations: [ //createing a place for components/pipes etc that don't standalone
    TaskStatusPipe,
    TaskHighlightDirective,
    NotificationComponent,],
  imports: [  //bringing in from current angualar
    CommonModule, FormsModule,
  ],
  exports: [  //allowing these things to be put into this container/truck and delivered from one place 
    NotificationComponent,
    FormsModule,
    TaskStatusPipe,
    TaskHighlightDirective,
    CommonModule],
})
export class SharedModule { }
