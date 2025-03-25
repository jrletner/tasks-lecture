import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  tasks = signal<Task[]>([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: false },
    { id: 5, title: 'Task 5', completed: false },
  ]);

  // Computed signal for task count
  taskCount = computed(() => this.tasks().length);
  // Computed signal for completed task count
  taskCountCompleted = computed(
    () => this.tasks().filter((task) => task.completed).length
  );

  // method to delete a task
  deleteTask(id: number) {
    this.tasks.update((currentTasks) =>
      currentTasks.filter((task) => task.id != id)
    );
  }

  // method to complete a task
  completeTask(id: number) {
    this.tasks.update((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          task.completed = true;
        }
        return task;
      });
    });
  }

  // method for adding a new task
  addTask(title: string) {
    const newTask: Task = {
      id: this.tasks().length + 1,
      title: title,
      completed: false,
    };
    this.tasks.update((currentTasks) => [...currentTasks, newTask]);
  }
}
