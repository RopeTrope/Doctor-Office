import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzuriranjeLekaraMenadzerComponent } from './azuriranje-lekara-menadzer.component';

describe('AzuriranjeLekaraMenadzerComponent', () => {
  let component: AzuriranjeLekaraMenadzerComponent;
  let fixture: ComponentFixture<AzuriranjeLekaraMenadzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzuriranjeLekaraMenadzerComponent]
    });
    fixture = TestBed.createComponent(AzuriranjeLekaraMenadzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
