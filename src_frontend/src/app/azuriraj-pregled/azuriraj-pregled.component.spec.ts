import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurirajPregledComponent } from './azuriraj-pregled.component';

describe('AzurirajPregledComponent', () => {
  let component: AzurirajPregledComponent;
  let fixture: ComponentFixture<AzurirajPregledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzurirajPregledComponent]
    });
    fixture = TestBed.createComponent(AzurirajPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
