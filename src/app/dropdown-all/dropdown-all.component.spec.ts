import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAllComponent } from './dropdown-all.component';

describe('DropdownAllComponent', () => {
  let component: DropdownAllComponent;
  let fixture: ComponentFixture<DropdownAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownAllComponent]
    });
    fixture = TestBed.createComponent(DropdownAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
