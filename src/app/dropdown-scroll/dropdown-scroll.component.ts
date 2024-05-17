import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
@Component({
  selector: 'app-dropdown-scroll',
  templateUrl: './dropdown-scroll.component.html',
  styleUrls: ['./dropdown-scroll.component.css'],
})
export class DropdownScrollComponent {
  range = 10;
  maxNumberOfOptions = 100;
  currentOptions = 0;
  options = new BehaviorSubject<string[]>([]);
  optionsObservable: Observable<string[]>;
  dropDownOptions:any = [];
  constructor(private router: Router) {
    this.optionsObservable = this.options.asObservable().pipe(
      scan((acc: any, curr: any) => {
        return [...acc, ...curr];
      }, [])
    );
  }

  ngOnInit() {
    for(let i = 1; i <= this.maxNumberOfOptions; i++) {
      this.dropDownOptions.push('option' + ' ' + i)
    }
    this.getNextSetOfOptions();
  }

  goToCode() {
    this.router.navigate(['dropdownCodeDetails']);
  }
  getNextSetOfOptions() {
    const result: any = this.dropDownOptions.slice(
      this.currentOptions,
      this.currentOptions + this.range
    );
    this.options.next(result);
    this.currentOptions += this.range;
  }
}
