import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-content">
      <h1>🚀 Introduction</h1>
    </div>
  `,
})
export class IntroductionComponent {}
