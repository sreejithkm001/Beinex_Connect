import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.scss'],
})
export class FooterCardComponent {
  @Input() image!: string;
  @Input() heading!: string;
  @Input() addresslines!: string[];
  @Input() phone!: string;
  @Input() email!: string;
}
