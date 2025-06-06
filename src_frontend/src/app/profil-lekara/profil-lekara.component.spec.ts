import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilLekaraComponent } from './profil-lekara.component';

describe('ProfilLekaraComponent', () => {
  let component: ProfilLekaraComponent;
  let fixture: ComponentFixture<ProfilLekaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilLekaraComponent]
    });
    fixture = TestBed.createComponent(ProfilLekaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
