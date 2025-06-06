import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerPreglediComponent } from './menadzer-pregledi.component';

describe('MenadzerPreglediComponent', () => {
  let component: MenadzerPreglediComponent;
  let fixture: ComponentFixture<MenadzerPreglediComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenadzerPreglediComponent]
    });
    fixture = TestBed.createComponent(MenadzerPreglediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
