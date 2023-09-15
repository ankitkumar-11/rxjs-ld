import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  public stringSubject = new Subject<string>();

  constructor() { }


  passValue(data) {
    //passing the data as the next observable
    this.stringSubject.next(data);
  }

  
}
