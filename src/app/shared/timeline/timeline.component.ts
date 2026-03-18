import { Component, input } from '@angular/core';

export interface TimelineItem {
  year: string;
  level: string;
  institution: string;
}

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  items = input.required<TimelineItem[]>();
}
