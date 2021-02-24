import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

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

  constructor(private appService: AppServiceService) { }

  tiles: Tile[] = [
    // {text: 'One', cols: 2, rows: 1, color: 'lightblue', title: 'Total de Pacientes', subtitle: ''},
    // {text: 'Three', cols: 2, rows: 1, color: 'lightpink', title: 'Percentual de Obesidade', subtitle: ''},
    // {text: 'Two', cols: 4, rows: 1, color: 'lightgreen', title: 'IMC Médio', subtitle: ''},
    // {text: 'Four', cols: 4, rows: 1, color: '#DDBDF1', title: 'Média de idade', subtitle: '' },
    // {text: 'Five', cols: 4, rows: 1, color: '#DDBDF1', title: 'Banco de sangue', subtitle: '' },
  ];

  ngOnInit(): void {
    this.appService.getDoadores().subscribe(res => {
      debugger
    })

    this.appService.getMediaIdadeSange().subscribe(res => {
      debugger
    })
    this.appService.getIMCRateAge().subscribe(res => {
      debugger
    })
    this.appService.getTotalByStates().subscribe(res => {
      debugger
    })
  }

}
