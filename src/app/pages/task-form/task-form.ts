import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private taskService = inject(TaskService)
  TaskForm = this.fb.group({
    title : ["", [Validators.required, Validators.minLength(3)]],
    description : [""]
  });
  onSubmit()
  {
    if (this.TaskForm.valid) 
    {
      const {title , description} = this.TaskForm.value;
      if (title && description){
        this.taskService.addTask(title, description);
        this.TaskForm.reset();
        this.router.navigate([""])
      }
    }
  }
}
