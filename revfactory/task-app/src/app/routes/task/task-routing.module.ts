import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './list/list.component';

const routes: Routes = [

  { path: '', redirectTo: 'task-list', pathMatch: 'full' },
{ path: 'task-list', component: TaskListComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
