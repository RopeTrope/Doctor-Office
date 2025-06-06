import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaLozinkeLekarComponent } from './promena-lozinke-lekar.component';

describe('PromenaLozinkeLekarComponent', () => {
  let component: PromenaLozinkeLekarComponent;
  let fixture: ComponentFixture<PromenaLozinkeLekarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromenaLozinkeLekarComponent]
    });
    fixture = TestBed.createComponent(PromenaLozinkeLekarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
