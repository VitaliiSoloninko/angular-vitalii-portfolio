import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CareerTab } from '../../../../../data/carrer.model';
import { CAREER_TABS } from '../../../../../data/carrers';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  tabs: CareerTab[] = CAREER_TABS;

  selectedTab = this.tabs[0]?.id ?? 1;

  selectTab(id: number) {
    this.selectedTab = id;
  }
}
