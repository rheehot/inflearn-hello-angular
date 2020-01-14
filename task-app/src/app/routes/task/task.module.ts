import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './list/list.component';

const COMPONENTS = [
  TaskListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class TaskModule { }
