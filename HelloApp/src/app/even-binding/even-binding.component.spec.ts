import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenBindingComponent } from './even-binding.component';

describe('EvenBindingComponent', () => {
  let component: EvenBindingComponent;
  let fixture: ComponentFixture<EvenBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
