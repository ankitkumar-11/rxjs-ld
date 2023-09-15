import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-hello-text',
  templateUrl: './hello-text.component.html',
})
export class HelloTextComponent implements OnInit {

  name: string;

  constructor(private _subService: SubjectsService){}

  ngOnInit() {
    this._subService.stringSubject.subscribe(
      data => 
      {
        console.log('next subscribed value: ' + data);
        this.name = data;
      }
    );
  }
}
