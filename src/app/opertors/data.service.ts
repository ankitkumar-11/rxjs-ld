import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient: HttpClient) { }


  searchUser(name: string): Observable<any[]> {
    return this.HttpClient.get<any[]>(`http://localhost:3000/user?name_like=${name}`);
  }


  getAllUser(){
    return this.HttpClient.get<any[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUserById(id:number){
    return this.HttpClient.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getUserPostById(userid:number){
    return this.HttpClient.get<any[]>(`https://jsonplaceholder.typicode.com/users/${userid}/posts`);
  }

  getCommentPostById(postId:number){
    return this.HttpClient.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

}
