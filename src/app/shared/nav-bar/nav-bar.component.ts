import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @Input() projects: Project[] = [];
  @Input() project!: Project;
  @Input() articles: any[] = [];
  @Input() article: any;

  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  onPrev() {
    this.prev.emit();
  }

  onNext() {
    this.next.emit();
  }
}
