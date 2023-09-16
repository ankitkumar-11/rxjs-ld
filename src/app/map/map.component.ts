import { Component, OnInit } from '@angular/core';
import { DataService } from '../opertors/data.service';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { mapTo } from 'rxjs/internal/operators/mapTo';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { concatMap } from 'rxjs/internal/operators/concatMap';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {


  test$ = of(1, 2, 3);
  obs1$ = of("A", "B", "C")
  obs2$ = of(1, 2, 3)
  userPosts: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    //map
    // this.test$.pipe(map(el => el * 10)).subscribe((res) => console.log(res))

    //mapTo
    // this.test$.pipe(mapTo("a")).subscribe((res) => console.log(res))
    // const button = document.getElementById('mapToBtn');
    // const clickStream = fromEvent(button, 'click');
    // const clicked = clickStream.pipe(
    //   mapTo(true) // Map each click event to true
    // );
    // clicked.subscribe(isClicked => console.log(`Button clicked: ${isClicked}`));


    //mergeMap
    //simple
    // this.obs1$.pipe(
    //   mergeMap((valueFromObs1) => {
    //     // Inside this function, you can map each value from obs1$ to obs2$.
    //     // In this example, we'll combine them into a single string.
    //     return this.obs2$.pipe(
    //       mergeMap((valueFromObs2) => {
    //         // Combine values from obs1$ and obs2$ into a single string.
    //         return of(`${valueFromObs1}${valueFromObs2}`);
    //       })
    //     );
    //   })
    // ).subscribe((result) => {
    //   console.log(result);
    // });

    //with api
    //no order
    this.dataService.getAllUser().pipe(
      mergeMap((users) => {
        const postRequests = users.map((user) =>
          this.dataService.getUserPostById(user.id).pipe(
            map((posts) => ({
              user,
              posts,
            }))
          )
        )
        return forkJoin(postRequests);
      })
    ).subscribe(userPosts => {
      // console.log("userPosts", res)
      console.log(userPosts, "user and post merge map")
      // res.subscribe(res => console.log(res, "user and post merge map"))
    });

    // concatMap
    // In short, concatMap will be used when one observable is dependent on the response / value of previous observable.
    this.dataService.getAllUser()
    .pipe(
      concatMap((users) => {
        const postRequests = users.map((user) =>
          this.dataService.getUserPostById(user.id)
            .pipe(
              // Map user and posts data into a single object
              map((posts) => ({ user, posts }))
            )
        );

        return forkJoin(postRequests);
      })
    )
    .subscribe((userPosts) => {
     console.log(userPosts, "user and post concatMap map")
    });

    // this.dataService.getAllUser().pipe(
    //   mergeMap((users) =>
    //     forkJoin(
    //       users.map((user) =>
    //         this.dataService.getUserPostById(user.id).pipe(
    //           map((posts) => ({
    //             user,
    //             posts,
    //           }))
    //         )
    //       )
    //     )
    //   )
    // ).subscribe((combinedData) => {
    //   this.userPosts = combinedData;
    //   console.log('combinedData', combinedData)
    // });

    // this.dataService.getAllUser().pipe(
    //   switchMap((users) => {
    //     const postRequests = users.map((user) =>
    //       this.dataService.getUserPostById(user.id).pipe(
    //         map((posts) => ({
    //           user,
    //           posts,
    //         }))
    //       )
    //     );
    //     console.log("postRequests", postRequests)
    //     return forkJoin(postRequests);
    //   })
    // ).subscribe((userPosts) => {
    //   console.log("userPosts switchMap", userPosts);
    // });

    // The main difference between using mergeMap and switchMap in this context lies in 
    // how they handle the inner Observables:

    // mergeMap(formerly known as flatMap): 
    // With mergeMap, all inner Observables are executed concurrently, 
    // and their emissions are merged into the output Observable in the order they complete.
    // This means that if you have multiple HTTP requests for user posts, 
    // they may complete in a different order than they were initiated.
    // This is useful when you want to perform operations concurrently 
    // and don't care about the order of completion.

    // switchMap: With switchMap, 
    // each time a new source value is emitted(in this case, when getAllUser() emits a new 
    // list of users), it switches to a new inner Observable, 
    // canceling the previous inner Observable.
    // This ensures that only the data from the most recent inner Observable is taken into account.
    // This is useful when you want to switch to the latest data source and ignore any previous incomplete requests.
    

    // this.dataService
    //   .getUserById(5)
    //   .pipe(
    //     concatMap((userDetails) => {
    //       // Store user details
    //       // Load recent post
    //       return this.dataService.getUserPostById(userDetails.id);
    //     })
    //   )
    //   .subscribe((post) => {
    //     // Store recent post
    //     console.log("recent post",post)
    //   });

  }

}
