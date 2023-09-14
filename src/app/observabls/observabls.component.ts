import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-observabls',
  templateUrl: './observabls.component.html',
})
export class ObservablsComponent implements OnInit {


  data$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
    // subscriber.complete();
  })

  arrayObservable = of(1, 2, 3, 4, 5);

  // iterable = 'Hello';
  iterable = ['Hello', 'World'];
  iterableObservable = from(this.iterable);

  constructor(private _ObService: ObservableService) { }

  ngOnInit(): void {
    this.arrayObservable.subscribe(value => console.log(value));
    this.iterableObservable.subscribe(char => console.log(char));

    this.data$.subscribe({
      next: (data) => { console.log(data) },
      error: (err) => { console.error(err) },
      complete: () => console.log('Custom observable completed'),
    })

    this.fetchData();
  }

  fetchData() {
    this._ObService.fetchData().subscribe({
      next: (response) => {
        console.table(response)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => console.log('Custom observable completed'),
    })
  }

}
