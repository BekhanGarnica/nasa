import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-neows-card',
  templateUrl: './neows-card.component.html',
  styleUrls: ['./neows-card.component.css'],
})
export class NeowsCardComponent {
  @Input() dates: any[] = [];
}
