import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzuriranjePacijentaMenadzerComponent } from './azuriranje-pacijenta-menadzer.component';

describe('AzuriranjePacijentaMenadzerComponent', () => {
  let component: AzuriranjePacijentaMenadzerComponent;
  let fixture: ComponentFixture<AzuriranjePacijentaMenadzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzuriranjePacijentaMenadzerComponent]
    });
    fixture = TestBed.createComponent(AzuriranjePacijentaMenadzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
