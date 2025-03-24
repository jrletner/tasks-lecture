// Import necessary decorators and interfaces from Angular core
import { Pipe, PipeTransform } from '@angular/core';

// Define a custom pipe named 'taskStatus'
@Pipe({
  name: 'taskStatus',      // Pipe will be used as | taskStatus in templates
  standalone: false,       // This pipe is part of an NgModule (not a standalone pipe)
})
export class TaskStatusPipe implements PipeTransform {
  // The transform method is required in all pipes
  // It takes a boolean value (completed) and returns a status string
  transform(completed: boolean): string {
    return completed ? '✔️ Completed' : '⏳ Pending';
  }
}
