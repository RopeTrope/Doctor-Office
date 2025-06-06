import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajIzvestajComponent } from './dodaj-izvestaj.component';

describe('DodajIzvestajComponent', () => {
  let component: DodajIzvestajComponent;
  let fixture: ComponentFixture<DodajIzvestajComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DodajIzvestajComponent]
    });
    fixture = TestBed.createComponent(DodajIzvestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
