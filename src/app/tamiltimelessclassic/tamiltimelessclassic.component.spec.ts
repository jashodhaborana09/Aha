import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamiltimelessclassicComponent } from './tamiltimelessclassic.component';

describe('TamiltimelessclassicComponent', () => {
  let component: TamiltimelessclassicComponent;
  let fixture: ComponentFixture<TamiltimelessclassicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamiltimelessclassicComponent]
    });
    fixture = TestBed.createComponent(TamiltimelessclassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
