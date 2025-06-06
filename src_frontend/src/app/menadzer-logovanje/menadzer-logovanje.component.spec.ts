import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerLogovanjeComponent } from './menadzer-logovanje.component';

describe('MenadzerLogovanjeComponent', () => {
  let component: MenadzerLogovanjeComponent;
  let fixture: ComponentFixture<MenadzerLogovanjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenadzerLogovanjeComponent]
    });
    fixture = TestBed.createComponent(MenadzerLogovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
