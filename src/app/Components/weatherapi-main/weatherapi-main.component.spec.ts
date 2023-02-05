import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherapiMainComponent } from './weatherapi-main.component';

describe('WeatherapiMainComponent', () => {
  let component: WeatherapiMainComponent;
  let fixture: ComponentFixture<WeatherapiMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherapiMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherapiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
