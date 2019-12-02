import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestbookingComponent } from './nearestbooking.component';

describe('NearestbookingComponent', () => {
  let component: NearestbookingComponent;
  let fixture: ComponentFixture<NearestbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
