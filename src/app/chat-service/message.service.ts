import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubjects: { [key: string]: Subject<string> } = {};
  private broadcastSubject = new Subject<string>();

  constructor() {
    this.messageSubjects['a'] = new Subject<string>();
    this.messageSubjects['b'] = new Subject<string>();
    this.messageSubjects['c'] = new Subject<string>();
  }

  sendMessage(destination: 'a' | 'b' | 'c' | 'broadcast', message: string) {
    if (destination === 'broadcast') {
      this.broadcastSubject.next(message);
    } else if (destination in this.messageSubjects) {
      this.messageSubjects[destination].next(message);
    }
  }

  getMessages(destination: 'a' | 'b' | 'c' | 'broadcast'): Observable<string> {
    if (destination === 'broadcast') {
      return this.broadcastSubject.asObservable();
    }
    return this.messageSubjects[destination].asObservable();
  }
}
