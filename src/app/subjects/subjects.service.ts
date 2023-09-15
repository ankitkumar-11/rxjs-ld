import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  public stringSubject = new Subject<string>();

  constructor(private HttpClient: HttpClient) { }

  passValue(data) {
    //passing the data as the next observable
    this.stringSubject.next(data);
  }


  // Use Case: User Authentication
  // Suppose you are building an Angular application with user authentication. 
  // You can use a BehaviorSubject to store the user's authentication status. 
  // When the user logs in or logs out, you can update the BehaviorSubject with the current authentication state.
  //  Components throughout your application can subscribe to this BehaviorSubject 
  // to react to changes in authentication status instantly.
  // Example:
  // AuthService
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // When the user logs in
  login() {
    // Perform authentication logic
    this.isAuthenticatedSubject.next(true);
  }


  // Use Case: Caching API Responses

  // In a scenario where you want to cache and replay the most recent API responses for certain requests, 
  // you can use a ReplaySubject. 
  // This is useful for scenarios where you want to provide a history of data to late subscribers or 
  // cache data for future use.

  // ApiService
  private dataCache = new ReplaySubject<any[]>(1);
  dataCache$ = this.dataCache.asObservable();

  setCache(data) {
    this.dataCache.next(data);
  }

  fetchData(): Observable<any[]> {
    return this.HttpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(map((data: any[]) => data.slice(0, 10)));
  }

  fetchData2(): Observable<any[]> {
    return this.HttpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(map((data: any[]) => data.slice(0, 10)));
  }


}
