import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorssharingdataComponent } from './corssharingdata.component';

describe('CorssharingdataComponent', () => {
  let component: CorssharingdataComponent;
  let fixture: ComponentFixture<CorssharingdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorssharingdataComponent]
    });
    fixture = TestBed.createComponent(CorssharingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
