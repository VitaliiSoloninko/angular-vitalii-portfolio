import { Component } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TitleComponent } from '../../../../shared';

@Component({
  selector: 'app-experience',
  imports: [TabsComponent, TitleComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {}
