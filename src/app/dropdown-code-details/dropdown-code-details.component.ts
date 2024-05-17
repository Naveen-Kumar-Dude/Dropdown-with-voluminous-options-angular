import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-code-details',
  templateUrl: './dropdown-code-details.component.html',
  styleUrls: ['./dropdown-code-details.component.css']
})
export class DropdownCodeDetailsComponent {

  constructor(private router: Router){}

  primeNGHtmlCode = `<p-dropdown [options]="options"
  placeholder="Select Item" [virtualScroll]="true"
  [virtualScrollItemSize]="5">
 </p-dropdown>`;

  default_DropDown_Html_Code = `<mat-form-field>
  <mat-label>Select Option</mat-label>
  <mat-select placeholder="Select an item"
      (infiniteScroll)="getNextSetOfOptions()" msInfiniteScroll
      [complete]="currentOptions === options.length">
      <mat-option *ngFor="let option of optionsObservable | async"
      [value]="option">
        {{option}}
      </mat-option>
  </mat-select>
</mat-form-field>`;

default_dropDown_typeScript_Code = `
range = 10;
maxNumberOfOptions = 100;
currentOptions = 0;
options = new BehaviorSubject<string[]>([]);
optionsObservable: Observable<string[]>;
dropDownOptions:any = [];
constructor() {
  this.optionsObservable = this.options.asObservable().pipe(
    scan((acc: any, curr: any) => {
      return [...acc, ...curr];
    }, [])
  );
}

ngOnInit() {
  for(let i = 1; i <= this.total; i++) {
    this.dropDownOptions.push('option' + ' ' + i)
  }
  this.getNextSetOfOptions();
}

getNextSetOfOptions() {
  const result: any = this.dropDownOptions.slice(
    this.currentOptions,
    this.currentOptions + this.range
  );
  this.options.next(result);
  this.currentOptions += this.range;
}`;

  goHome(){
    this.router.navigate(['dropdownScroll']);
  }
}
