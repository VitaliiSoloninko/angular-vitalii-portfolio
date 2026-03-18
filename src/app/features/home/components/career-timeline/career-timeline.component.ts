import { Component } from '@angular/core';
import { TitleComponent } from '../../../../shared';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-career-timeline',
  imports: [TabsComponent, TitleComponent],
  templateUrl: './career-timeline.component.html',
  styleUrl: './career-timeline.component.scss',
})
export class CareerTimelineComponent {}
