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


  // this._authService.login(this.loginForm.value)
  // .pipe(
  //   switchMap((token: Tokens) => {
  //     return forkJoin({
  //       companyBranchList: this.getCompanyBranchList(token),
  //       userProfile: this.getUserProfile(token)
  //     }).pipe(map((joinRes) => { return { ...joinRes, token } }));
  //   }),
  //   takeUntil(this.destroy$))
  // .subscribe({
  //   next: (result: LoginRes) => {
  //     if (result.companyBranchList.length == 1) {
  //       this.setUserLoggedIn(result.token, result.companyBranchList[0].id);
  //     } else {
  //       // some code
  //     }
  //   },
  //   error: (error: any) => {
  //     // Set login flag to false and log error to console
  //     this.isLoggingIn = false;
  //     console.log(error)
  //   }
  // })

  //Add catch error also
}
