import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { map, distinctUntilChanged } from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString;

    constructor(private router : Router) { 

      interval(1000)
        .pipe(map(() => {
          return moment().format('YYYY-MM-DD HH:mm:ss')
        }))
        .subscribe(data=>{
          this.timeString=data;
        })
    }

  goStopwatch(){
    this.router.navigateByUrl('/stopwatch');
  }

  // 비효율적인 방법
  // getCurrentTime() {
  //   let result = moment().format('YYYY-MM-DD HH:mm:ss');
  //   return result;
  // }

  ngOnInit() {
  }

}
