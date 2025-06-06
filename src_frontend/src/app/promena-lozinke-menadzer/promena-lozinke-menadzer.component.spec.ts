import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaLozinkeMenadzerComponent } from './promena-lozinke-menadzer.component';

describe('PromenaLozinkeMenadzerComponent', () => {
  let component: PromenaLozinkeMenadzerComponent;
  let fixture: ComponentFixture<PromenaLozinkeMenadzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromenaLozinkeMenadzerComponent]
    });
    fixture = TestBed.createComponent(PromenaLozinkeMenadzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
