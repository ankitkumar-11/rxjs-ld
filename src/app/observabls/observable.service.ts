import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { take } from 'rxjs/internal/operators/take'
import { map } from 'rxjs/internal/operators'


@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor(private HttpClient: HttpClient) { }

  fetchData(): Observable<any[]> {
    return this.HttpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(map((data: any[]) => data.slice(0, 10)));
  }
}
