import { Component, EventEmitter, Output } from '@angular/core';
import { LocationIconComponent } from "../icons/location-icon/location-icon.component";
import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-select',
  standalone: true,
  templateUrl: './city-select.component.html',
  styleUrl: './city-select.component.scss',
  imports: [LocationIconComponent, ButtonComponent, InputComponent, CommonModule]
})
export class CitySelectComponent {
  @Output() cityChange = new EventEmitter<string>();

  inputValue: string = '';
  isEdited: boolean = false;

  select(): void {
    this.isEdited = false;
    this.cityChange.emit(this.inputValue);
  }

  edit(): void {
    this.isEdited = true;
  }
}
