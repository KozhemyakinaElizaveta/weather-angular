import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {
 private readonly API_ENDPOINT = 'https://api.weatherapi.com/v1';
  private readonly API_KEY = '6b04fbeb8b6a48d2ba6143411252602';

  constructor(private http: HttpClient) {}

  getCityForecast(city: string, days: number = 3): Observable<any> {
    const params = {
      q: city,
      lang: 'ru',
      key: this.API_KEY,
      days: days.toString()
    };

    return this.http.get<any>(
      `${this.API_ENDPOINT}/forecast.json`, 
      { params }
    ).pipe(
      catchError(error => {
        return throwError(() => error.error);
      })
    );
  }
}
