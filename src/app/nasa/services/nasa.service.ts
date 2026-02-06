import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private _dates: any[] = [];
  private _apodObj: any;

  private apiKey = 'u148wdk891nhb6IMhcg6Miot3TM53cwC7weN3LVc'; // reemplaza con tu API key real
  private apodUrl = 'https://api.nasa.gov/planetary/apod';
  private neoUrl = 'https://api.nasa.gov/neo/rest/v1/feed';

  constructor(private http: HttpClient) {}

  get dates() {
    return [...this._dates];
  }

  get apod() {
    return this._apodObj;
  }

  getApod() {
    const randomDays = Math.floor(Math.random() * 7) + 1;

    const today = new Date();
    today.setDate(today.getDate() - randomDays);

    const date = today.toISOString().split('T')[0];

    const params = new HttpParams()
      .set('api_key', 'u148wdk891nhb6IMhcg6Miot3TM53cwC7weN3LVc')
      .set('date', date);

    return this.http.get<any>('https://api.nasa.gov/planetary/apod', {
      params,
    });
  }

  buscarNeo(date: string) {
    const params = new HttpParams()
      .set('api_key', 'u148wdk891nhb6IMhcg6Miot3TM53cwC7weN3LVc')
      .set('start_date', date)
      .set('end_date', date);

    this.http
      .get<any>('https://api.nasa.gov/neo/rest/v1/feed', { params })
      .subscribe((resp) => {
        this._dates = resp.near_earth_objects[date];
      });
  }
}
