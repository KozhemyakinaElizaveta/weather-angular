import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CitySelectComponent } from "../city-select/city-select.component";
import { ErrorComponent } from "../error/error.component";
import { CommonModule } from '@angular/common';
import { StatComponent } from "../stat/stat.component";
import { DayCardComponent } from "../day-card/day-card.component";

interface StatItem {
  label: string;
  stat: string;
}

@Component({
  selector: 'app-panel-right',
  standalone: true,
  templateUrl: './panel-right.component.html',
  styleUrl: './panel-right.component.scss',
  imports: [CitySelectComponent, ErrorComponent, CommonModule, StatComponent, DayCardComponent],
})
export class PanelRightComponent {
  @Input() error: string | null = null;
  @Input() data: any | null = null;
  @Input() activeIndex: number = 0;
  
  @Output() selectIndex = new EventEmitter<number>();
  @Output() cityChange = new EventEmitter<string>();

  get statData(): StatItem[] {
    if (!this.data) {
      return [];
    }
    
    const forecastDay = this.data.forecast.forecastday[this.activeIndex];
    if (!forecastDay) {
      return [];
    }

    return [
      {
        label: "Влажность",
        stat: forecastDay.day.avghumidity + " %",
      },
      {
        label: "Вероятность дождя",
        stat: forecastDay.day.daily_chance_of_rain + " %",
      },
      {
        label: "Ветер",
        stat: forecastDay.day.maxwind_kph + " км/ч",
      },
    ];
  }

  get errorDisplay(): string { 
    return 'Произошла ошибка';
  }

  onDayCardClick(index: number): void {
    this.selectIndex.emit(index);
  }

  onCitySelect(city: string): void {
    this.cityChange.emit(city);
  }
}
