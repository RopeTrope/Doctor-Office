import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreglediComponent } from './pregledi.component';

describe('PreglediComponent', () => {
  let component: PreglediComponent;
  let fixture: ComponentFixture<PreglediComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreglediComponent]
    });
    fixture = TestBed.createComponent(PreglediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
