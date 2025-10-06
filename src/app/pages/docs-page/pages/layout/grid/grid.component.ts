import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-content">
      <h1>🔲 CSS Grid</h1>
      <p class="lead">
        CSS Grid is a two-dimensional layout system for the web.
      </p>

      <h2>🏗️ Basic Grid</h2>
      <div class="example-section">
        <div class="code-example">
          <div class="grid-demo basic-grid">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
          </div>
        </div>
        <p>
          <strong>CSS:</strong>
          <code>display: grid; grid-template-columns: 1fr 1fr;</code>
        </p>
      </div>

      <h2>📱 Responsive Grid</h2>
      <div class="example-section">
        <div class="code-example">
          <div class="grid-demo responsive-grid">
            <div class="grid-item">A</div>
            <div class="grid-item">B</div>
            <div class="grid-item">C</div>
            <div class="grid-item">D</div>
            <div class="grid-item">E</div>
            <div class="grid-item">F</div>
          </div>
        </div>
        <p>
          <strong>CSS:</strong>
          <code
            >grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</code
          >
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .docs-content {
        max-width: 900px;
        line-height: 1.7;
      }

      .lead {
        font-size: 1.2rem;
        color: #4a5568;
        margin-bottom: 2rem;
      }

      .example-section {
        margin: 2rem 0;
        background: #f7fafc;
        border-radius: 8px;
        padding: 2rem;
      }

      .code-example {
        margin: 1rem 0;
      }

      .grid-demo {
        border: 2px dashed #cbd5e0;
        padding: 1rem;
        margin: 1rem 0;
        gap: 1rem;
      }

      .basic-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .responsive-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }

      .grid-item {
        background: #3182ce;
        color: white;
        padding: 2rem;
        text-align: center;
        border-radius: 4px;
        font-weight: bold;
        font-size: 1.2rem;
      }

      code {
        background: #edf2f7;
        padding: 2px 6px;
        border-radius: 3px;
        font-family: monospace;
      }

      @media (max-width: 768px) {
        .basic-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class GridComponent {}
