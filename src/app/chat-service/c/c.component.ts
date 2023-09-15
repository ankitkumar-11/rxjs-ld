import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
})
export class CComponent implements OnInit,OnDestroy {

  message: string = '';
  messages: string[] = [];
  private componentSubscription: Subscription;
  private broadcastSubscription: Subscription;


  constructor(private messageService: MessageService) {}

  sendMessage(destination:'a' | 'b' | 'c' | 'broadcast') {
    if (this.message.trim() !== '') {
      this.messageService.sendMessage(destination, this.message);
      this.message = '';
    }
  }

  ngOnInit() {
    this.componentSubscription = this.messageService.getMessages('c').subscribe((message) => {
      this.messages.push(message);
    });

    this.broadcastSubscription = this.messageService.getMessages('broadcast').subscribe((message) => {
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    this.componentSubscription.unsubscribe();
    this.broadcastSubscription.unsubscribe();
  }

}
