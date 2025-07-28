import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rain-icon',
  standalone: true,
  imports: [],
  templateUrl: './rain-icon.component.html',
})
export class RainIconComponent {
  @Input() color: string = "white";
  @Input() size: number = 54;
}
