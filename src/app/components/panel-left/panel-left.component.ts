import { Component, Inject, InjectionToken, Input } from '@angular/core';
import { SunIconComponent } from "../icons/sun-icon/sun-icon.component";
import { CloudIconComponent } from "../icons/cloud-icon/cloud-icon.component";
import { RainIconComponent } from "../icons/rain-icon/rain-icon.component";
import { LocationIconComponent } from "../icons/location-icon/location-icon.component";

interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      code: number;
      text: string;
    };
  };
}

@Component({
  selector: 'app-panel-left',
  standalone: true,
  imports: [SunIconComponent, CloudIconComponent, RainIconComponent, LocationIconComponent],
  templateUrl: './panel-left.component.html',
  styleUrl: './panel-left.component.scss'
})
export class PanelLeftComponent {
  @Input() dayData!: ForecastDay;
  @Input() city: string = 'Москва'; 

  get day(): string {
    return new Date(this.dayData.date).toLocaleDateString("ru-RU", {
      weekday: "long",
    });
  }

  get date(): string {
    return new Date(this.dayData.date).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  get weatherCode(): number {
    return this.dayData.day.condition.code;
  }
}
