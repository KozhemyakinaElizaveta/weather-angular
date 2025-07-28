import { Component } from '@angular/core';
import { PanelLeftComponent } from "./components/panel-left/panel-left.component";
import { PanelRightComponent } from "./components/panel-right/panel-right.component";
import { Subject } from 'rxjs';
import { GetCitiesService } from './services/get-cities.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PanelLeftComponent, PanelRightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'weather-angular';
  data: any | null = null;
  error: string | null = null;
  activeIndex: number = 0;
  city: string = 'Москва';
  
  private destroy$ = new Subject<void>();

  constructor(private weatherService: GetCitiesService) {}

  ngOnInit(): void {
    this.getCity(this.city);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelectIndex(index: number): void {
    this.activeIndex = index;
  }

  private getCity(city: string): void {
    this.weatherService.getCityForecast(city).subscribe({
      next: (response) => {
        this.error = null;
        this.data = response;
      },
      error: (err) => {
        this.data = null;
        this.error = err;
      }
    });
  }
  updateCity(newCity: string): void {
    this.city = newCity;
    this.getCity(this.city);
  }
}
