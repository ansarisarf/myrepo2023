import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazylodingComponent } from './lazyloding.component';

describe('LazylodingComponent', () => {
  let component: LazylodingComponent;
  let fixture: ComponentFixture<LazylodingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazylodingComponent]
    });
    fixture = TestBed.createComponent(LazylodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
