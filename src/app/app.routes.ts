import { Routes } from '@angular/router';
import { TaskDetails } from './pages/task-details/task-details';
import { TaskForm } from './pages/task-form/task-form';
import { TaskList } from './pages/task-list/task-list';

export const routes: Routes = [
    {
        path : "",
        component : TaskList
    },
    {
        path : "add-task",
        component : TaskForm
    },
    {
        path : "task/:id",
        component : TaskDetails,
    },
    

];
