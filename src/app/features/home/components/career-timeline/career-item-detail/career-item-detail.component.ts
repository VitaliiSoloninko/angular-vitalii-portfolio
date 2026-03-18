import { Component, input } from '@angular/core';
import { CareerItem } from '../../../../../core/models';

@Component({
  selector: 'app-career-item-detail',
  imports: [],
  templateUrl: './career-item-detail.component.html',
  styleUrl: './career-item-detail.component.scss',
})
export class CareerItemDetailComponent {
  readonly item = input.required<CareerItem>();
}
