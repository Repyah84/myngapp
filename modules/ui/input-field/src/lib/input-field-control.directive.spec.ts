import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputFieldControlDirective } from './input-field-control.directive';

describe('InputFieldControlDirective', () => {
  let component: InputFieldControlDirective;
  let fixture: ComponentFixture<InputFieldControlDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFieldControlDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFieldControlDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
