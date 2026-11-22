import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskService =inject(TaskService);
  filter = signal<"all" |"completed" | "active">('all');
  filteredTasks = computed( () => {
    switch(this.filter())
    {
      case "all" : return this.taskService.tasks()
      case "completed" : return this.taskService.completedTasks()
      case "active" : return this.taskService.activeTasks()
    }
  } )
  setFilter(filter : "all" |"completed" | "active")
  {
    this.filter.set(filter);
  }
}
