import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahringdataComponent } from './sahringdata.component';

describe('SahringdataComponent', () => {
  let component: SahringdataComponent;
  let fixture: ComponentFixture<SahringdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SahringdataComponent]
    });
    fixture = TestBed.createComponent(SahringdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
