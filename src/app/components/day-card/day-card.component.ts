import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunIconComponent } from "../icons/sun-icon/sun-icon.component";
import { CloudIconComponent } from "../icons/cloud-icon/cloud-icon.component";
import { RainIconComponent } from "../icons/rain-icon/rain-icon.component";

@Component({
  selector: 'app-day-card',
  standalone: true,
  imports: [
    CommonModule,
    SunIconComponent,
    CloudIconComponent,
    RainIconComponent
],
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent {
  @Input() weatherCode: number = 0;
  @Input() temp: number = 0;
  @Input() date: string = ''; 
  @Input() isActive: boolean = false;

  get iconColor(): string {
    return this.isActive ? "var(--color-primary-inverted)" : "var(--color-primary)";
  }

  get formattedDate(): string {
    const dateObj = new Date(this.date);
    return dateObj.toLocaleDateString("ru-RU", { weekday: "short" });
  }
}