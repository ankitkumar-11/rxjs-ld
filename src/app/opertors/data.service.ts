import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient: HttpClient) { }


  searchUser(name: string): Observable<any[]> {
    return this.HttpClient.get<any[]>(`http://localhost:3000/user?name_like=${name}`)
  }


}
