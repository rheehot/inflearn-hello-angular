import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import {Observable} from "rxjs";
import {Page} from "../../../models/common";
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './list.component.html',
})
export class TaskListComponent implements OnInit {
  // Dummy Data
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];


  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  task$: Observable<Page<Task>>; // $는 옵저버블 변수다라는 규칙이다.

  ngOnInit() {
    this.task$ = this.http.get<Page<Task>>("/api/tasks");


  }
}
