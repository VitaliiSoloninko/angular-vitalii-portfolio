import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flexbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-content">
      <h1>📏 Flexbox</h1>
      <p class="lead">
        Flexbox is a one-dimensional layout method for arranging items.
      </p>

      <h2>🏗️ Basic Flex</h2>
      <div class="example-section">
        <h3>Horizontal Layout</h3>
        <div class="code-example">
          <div class="flex-demo horizontal-flex">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
          </div>
        </div>
        <p><strong>CSS:</strong> <code>display: flex;</code></p>
      </div>

      <h2>🎯 Justify Content</h2>
      <div class="example-section">
        <h3>Center</h3>
        <div class="code-example">
          <div class="flex-demo justify-center">
            <div class="flex-item small">A</div>
            <div class="flex-item small">B</div>
            <div class="flex-item small">C</div>
          </div>
        </div>
        <p><strong>CSS:</strong> <code>justify-content: center;</code></p>
      </div>

      <h2>🔄 Flex Grow</h2>
      <div class="example-section">
        <div class="code-example">
          <div class="flex-demo grow-demo">
            <div class="flex-item">Fixed</div>
            <div class="flex-item grow">Grows</div>
            <div class="flex-item">Fixed</div>
          </div>
        </div>
        <p><strong>CSS:</strong> <code>flex: 1;</code></p>
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

      .flex-demo {
        border: 2px dashed #cbd5e0;
        padding: 1rem;
        margin: 1rem 0;
        min-height: 80px;
      }

      .horizontal-flex {
        display: flex;
        gap: 1rem;
      }

      .justify-center {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }

      .grow-demo {
        display: flex;
        gap: 1rem;
      }

      .flex-item {
        background: #3182ce;
        color: white;
        padding: 1rem;
        border-radius: 4px;
        text-align: center;
        font-weight: bold;
      }

      .flex-item.small {
        padding: 0.5rem 1rem;
      }

      .flex-item.grow {
        flex: 1;
        background: #38a169;
      }

      code {
        background: #edf2f7;
        padding: 2px 6px;
        border-radius: 3px;
        font-family: monospace;
      }
    `,
  ],
})
export class FlexboxComponent {}
