import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { DataService } from './data.service';
import { debounce, distinct, switchMap } from 'rxjs/internal/operators';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subject } from 'rxjs/internal/Subject';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-opertors',
  templateUrl: './opertors.component.html',
})
export class OpertorsComponent implements OnInit {


  searchControl: FormControl = new FormControl('')
  userList = [];
  private searchTrigger$ = new Subject();
  @ViewChild('searchButton', { static: true }) searchButton: ElementRef;
  searchButtonClick$: Observable<Event>;
  constructor(private _dataService: DataService) {
  }

  ngOnInit(){
    
  }


  //  debounce debounceTime distinct distinctUntilChanged switchMap
  // ngOnInit(): void {
  //   // this.searchButtonClick$ = fromEvent(this.searchButton.nativeElement, 'click');
  //   // this.searchButtonClick$.subscribe(res => {
  //   //   console.log(res);
  //   //   this.searchTrigger$.next()
  //   // })
  //   this.searchInput();
  // }

  ngAfterViewInit(): void {
    // Your code that selects the element and attaches event listeners
    // this.searchButtonClick$ = fromEvent(this.searchButton.nativeElement, 'click');
  }


  searchInput() {
    this.searchControl.valueChanges.pipe(
      // debounce(() => this.searchTrigger$)
      // debounceTime(300),
      // distinct()
      // distinctUntilChanged(),
      // switchMap((str) => this.searchUserObs(str))
    ).subscribe({
      // next: (res) => { this.searchUser(res) }
      next: (res) => { this.userList = res }

    })
  }

  searchUser(searchStr: string) {
    this._dataService.searchUser(searchStr).subscribe((users) => this.userList = users)
  }

  searchUserObs(searchStr: string): Observable<any[]> {
    return this._dataService.searchUser(searchStr)
  }


  //Combine latest
  public lengthConvForm = new FormGroup({
    answer: new FormControl(),
    action: new FormControl(),
    inputNumber: new FormControl(),
  });

  //combineLatest
  // ngOnInit() {
  //   combineLatest([
  //     this.lengthConvForm.get('action').valueChanges,
  //     this.lengthConvForm.get('inputNumber').valueChanges,
  //   ]).subscribe(([action, number]) => {
  //     action === 'cm'
  //       ? this.lengthConvForm.get('answer').setValue(number * 100)
  //       : this.lengthConvForm.get('answer').setValue(number / 100);
  //   });
  // }

}
