import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileKeyboardComponent } from './mobile-keyboard.component';

describe('MobileKeyboardComponent', () => {
  let component: MobileKeyboardComponent;
  let fixture: ComponentFixture<MobileKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileKeyboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
