import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DocsSection } from './docs-content.interface';

@Component({
  selector: 'app-docs-content-universal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './docs-content-universal.component.html',
  styleUrl: './docs-content-universal.component.scss',
})
export class DocsContentUniversalComponent {
  @Input() title: string = '';
  @Input() sections: DocsSection[] = [];
}
