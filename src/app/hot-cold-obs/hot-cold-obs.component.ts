import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-hot-cold-obs',
  templateUrl: './hot-cold-obs.component.html',
})
export class HotColdObsComponent implements OnInit {


  cold$ = new Observable<number>((observer) => {
    observer.next(Math.round(Math.random() * 10))
  })

  hotSub = new Subject<number>()
  hot$ = this.hotSub.asObservable();
  constructor() {
    this.hot$.subscribe(res => console.log("HOT SUB C:->", res));
    this.hotSub.next(Math.round(Math.random() * 100))
  }

  ngOnInit(): void {

    this.cold$.subscribe(res => console.log("COLD SUB A:->", res));
    this.cold$.subscribe(res => console.log("COLD SUB B:->", res));


    this.hot$.subscribe(res => console.log("HOT SUB A:->", res));
    this.hot$.subscribe(res => console.log("HOT SUB B:->", res));

    this.hotSub.next(Math.round(Math.random() * 100))
  }



}
