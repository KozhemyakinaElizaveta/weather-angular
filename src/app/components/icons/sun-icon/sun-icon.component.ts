import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sun-icon',
  standalone: true,
  imports: [],
  templateUrl: './sun-icon.component.html',
})
export class SunIconComponent {
  @Input() color: string = "white";
  @Input() size: number = 54;
}
