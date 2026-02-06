import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  selectedDate: string = '';

  @Output() fechaSeleccionada = new EventEmitter<string>();

  enviarFecha() {
    this.fechaSeleccionada.emit(this.selectedDate);
  }
}

