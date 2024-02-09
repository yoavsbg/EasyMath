import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-keyboard',
  templateUrl: './mobile-keyboard.component.html',
  styleUrl: './mobile-keyboard.component.scss'
})
export class MobileKeyboardComponent {
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(value: string): void {
    this.buttonClick.emit(value);
  }
}
