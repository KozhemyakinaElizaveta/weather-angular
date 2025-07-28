import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cloud-icon',
  standalone: true,
  imports: [],
  templateUrl: './cloud-icon.component.html',
})
export class CloudIconComponent {
  @Input() color: string = "white";
  @Input() size: number = 54;
}
