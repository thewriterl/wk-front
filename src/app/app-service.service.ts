import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  private BASE_URL = 'http://localhost:8081/api'

  getDoadores() {
    return this.httpClient.get<any>(`${this.BASE_URL}/statistic/blood-type`);
  }

  getMediaIdadeSange() {
    return this.httpClient.get<any>(`${this.BASE_URL}/statistic/blood`);
  }

  getIMCRateAge() {
    return this.httpClient.get<any>(`${this.BASE_URL}/statistic/age`);
  }

  getTotalByStates() {
    return this.httpClient.get<any>(`${this.BASE_URL}/statistic/state`);
  }


}
