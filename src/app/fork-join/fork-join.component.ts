import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge } from 'rxjs/internal/observable/merge';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { catchError, mergeAll } from 'rxjs/internal/operators';
import { of } from 'rxjs/internal/observable/of';
import { asapScheduler, scheduled } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
})
export class ForkJoinComponent implements OnInit {

  currentWeather: any;
  forecastWeather: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadWeatherData();
  }

  loadWeatherData() {
    const pokemon1$ = this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    const pokemon2$ = this.http.get('https://pokeapi.co/api/v2/pokemon/ditto');

    // Using merge to display current weather and forecast as they arrive
    merge(pokemon1$, pokemon2$).subscribe((data) => {
      console.log("merge",data)
    });

    // Using forkJoin to wait for both current and forecast weather to complete
    // forkJoin([pokemon1$, pokemon2$]).subscribe(([pokemon1, pokemon2]) => {
    //   console.log('pokemon1', pokemon1);
    //   console.log('pokemon2', pokemon2);
    // });

    scheduled([pokemon1$, pokemon2$],asapScheduler)
      .pipe(
        mergeAll()
      )
      .subscribe(
        (data: any) => {
          console.log("merge scheduled",data)
        },
        (error) => {
          console.error('Merged API request failed:', error);
        }
      );

    // forkJoin({
    //   pokemon1:pokemon1$.pipe(catchError((err)=>{return of(null)})),
    //   pokemon2:pokemon2$.pipe(catchError((err)=>{return of(null)}))
    // }).subscribe(data=>{
    //   console.log(data)
    // })
  }

}
