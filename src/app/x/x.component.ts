import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
})
export class XComponent implements OnInit {

  data$ = interval(5)
  constructor() { }

  ngOnInit(): void {
    // this.data$.subscribe(res => { console.log("component x : ", res) });
  }

}
