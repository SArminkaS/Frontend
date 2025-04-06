import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() primary_color = ''
@Input() secondary_color = ''
@Input() description = ''
@Input() method = ''
@Input() path = ''
}