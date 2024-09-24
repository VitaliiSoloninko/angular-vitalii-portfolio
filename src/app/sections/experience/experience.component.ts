import { Component } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {}
