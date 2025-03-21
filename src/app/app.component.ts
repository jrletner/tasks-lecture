import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tasks-lecture';
}
