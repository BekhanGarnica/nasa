import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  apod: any;
  dates: any[] = [];

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getApod().subscribe((resp) => {
      this.apod = resp;
    });
  }

  buscar(date: string) {
    this.nasaService.buscarNeo(date);
    this.dates = this.nasaService.dates;
  }
}
