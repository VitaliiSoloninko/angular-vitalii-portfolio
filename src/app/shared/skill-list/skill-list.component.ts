
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-skill-list',
    imports: [],
    templateUrl: './skill-list.component.html',
    styleUrl: './skill-list.component.scss'
})
export class SkillListComponent {
  @Input() skills: string[] = [];
  @Input() theme: 'purple' | 'dark' | 'default' = 'default';
  @Input() title: string = '';
  @Input() withPadding: boolean = false;
}
