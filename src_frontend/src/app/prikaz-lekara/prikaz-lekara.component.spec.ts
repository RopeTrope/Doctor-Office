import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazLekaraComponent } from './prikaz-lekara.component';

describe('PrikazLekaraComponent', () => {
  let component: PrikazLekaraComponent;
  let fixture: ComponentFixture<PrikazLekaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrikazLekaraComponent]
    });
    fixture = TestBed.createComponent(PrikazLekaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
