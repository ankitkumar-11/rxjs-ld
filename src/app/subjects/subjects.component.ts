import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { AsyncSubject } from 'rxjs/internal/AsyncSubject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent implements OnInit {

  myTextVal: string;

  constructor(private _subService: SubjectsService) { }

  // subject = new Subject();
  // subject = new BehaviorSubject(Math.random());
  // subject = new ReplaySubject(2);
  subject = new AsyncSubject();




  ngOnInit(): void {
    // subscriber 1
    this.subject.subscribe((data) => {
      console.log('Subscriber A:', data);
    });

    this.subject.next(Math.random());
    this.subject.next(Math.random());

    this.subject.subscribe((data) => {
      console.log('Subscriber B:', data);
    });

    this.subject.next(Math.random());
    this.subject.complete();
    // subscriber 2

    this.fetchData();
    this.fetchData2();
  }

  sendTextValue() {
    this._subService.passValue(this.myTextVal);
  }

  fetchData() {
    this._subService.fetchData().subscribe(res => {
      console.log('data from api:', res);
      this._subService.setCache(res)
    })
  }

  fetchData2() {
    this._subService.fetchData2().subscribe(res => {
      console.log('data from api:', res);
      this._subService.setCache(res)
    })
  }


}
