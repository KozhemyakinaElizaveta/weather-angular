import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true
})
export class InputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() placeholder: string = '';

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }

  onKeyup(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    if (event.key === 'Enter') {
      this.valueChange.emit(value);
    }
  }
}