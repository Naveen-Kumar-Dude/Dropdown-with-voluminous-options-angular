import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-all',
  templateUrl: './dropdown-all.component.html',
  styleUrls: ['./dropdown-all.component.css']
})
export class DropdownAllComponent {
  @Input() name:string='';
@Input()count:number=0;
@Input() range:string='';

// selectedItem: any;
}
