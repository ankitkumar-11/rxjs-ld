import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
})
export class YComponent implements OnInit {


  data$ = interval(5)
  constructor() { }

  ngOnInit(): void {
    // this.data$.subscribe(res => { console.log("component y : ", res) });
  }

}
