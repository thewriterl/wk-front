import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TotalCountDTO } from './model/total';
import { IMCMediaDTO } from './model/imc-media';
import { TotalDonorsDTO } from './model/total-donors';
import { IMCRateAgeDTO } from './model/dto';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  private BASE_URL = 'http://localhost:8081/api'

  getDoadores() {
    return this.httpClient.get<TotalDonorsDTO>(`${this.BASE_URL}/statistic/blood-type`);
  }

  getMediaIdadeSange() {
    return this.httpClient.get<any>(`${this.BASE_URL}/statistic/blood`);
  }

  getMediaByGender() {
    return this.httpClient.get<any>(`${this.BASE_URL}/statistic/obesity`);
  }

  getIMCRateAge() {
    return this.httpClient.get<IMCRateAgeDTO>(`${this.BASE_URL}/statistic/age`);
  }

  getTotalByStates() {
    return this.httpClient.get<IMCMediaDTO>(`${this.BASE_URL}/statistic/state`);
  }

  getTotal() {
    return this.httpClient.get<TotalCountDTO>(`${this.BASE_URL}/statistic/count`);
  }


}
