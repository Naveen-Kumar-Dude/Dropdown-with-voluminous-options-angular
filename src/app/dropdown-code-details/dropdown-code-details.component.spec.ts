import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCodeDetailsComponent } from './dropdown-code-details.component';

describe('DropdownCodeDetailsComponent', () => {
  let component: DropdownCodeDetailsComponent;
  let fixture: ComponentFixture<DropdownCodeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownCodeDetailsComponent]
    });
    fixture = TestBed.createComponent(DropdownCodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
