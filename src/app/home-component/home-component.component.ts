import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { BloodRateDTO } from '../model/blood-rate';
import { IMCRateAgeDTO } from '../model/dto';
import { GenderDTO } from '../model/gender';
import { IMCMediaDTO } from '../model/imc-media';
import { TotalDonorsDTO } from '../model/total-donors';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  title: string;
  subtitle: string;
  data: Object;
}


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  public painelBancoDeSangue: TotalDonorsDTO;
  public painelIMCAge: IMCRateAgeDTO;
  public painelGender: GenderDTO[];
  public painelBlood: BloodRateDTO[];
  public painelEstado: IMCMediaDTO[];

  constructor(private appService: AppServiceService) {
    
    this.appService.getDoadores().subscribe(res => {
      this.painelBancoDeSangue = res;
    });

    this.appService.getIMCRateAge().subscribe(res => {
      this.painelIMCAge = res;
    });

    this.appService.getMediaByGender().subscribe(res => {
      this.painelGender = res;
    });

    this.appService.getMediaIdadeSange().subscribe(res => {
      this.painelBlood =res;
    });

    this.appService.getTotalByStates().subscribe(res => {
      this.painelEstado = res;
    })
   }

  tiles: Tile[] = [
    // {text: 'One', cols: 2, rows: 1, color: 'lightblue', title: 'Total de Pacientes', subtitle: ''},
    // {text: 'Three', cols: 2, rows: 1, color: 'lightpink', title: 'Percentual de Obesidade', subtitle: ''},
    // {text: 'Two', cols: 4, rows: 1, color: 'lightgreen', title: 'IMC Médio', subtitle: ''},
    // {text: 'Four', cols: 4, rows: 1, color: '#DDBDF1', title: 'Média de idade', subtitle: '' },
    // {text: 'Five', cols: 4, rows: 1, color: '#DDBDF1', title: 'Banco de sangue', subtitle: '' },
  ];

  ngOnInit(): void {


    this.appService.getTotal().subscribe(res => {

    })
  }

}
