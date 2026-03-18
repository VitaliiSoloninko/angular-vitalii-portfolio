import { Component, input } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../../shared';

@Component({
  selector: 'app-skill-list',
  imports: [ScrollAnimationDirective],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss',
})
export class SkillListComponent {
  title = input<string>('');
  skills = input<string[]>([]);
  theme = input<'purple' | 'dark' | 'default'>('default');
  withPadding = input<boolean>(false);
}
