import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jwt',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-content">
      <h1>🎟️ JWT Authorization</h1>
      <p class="lead">
        Complete guide to JWT (JSON Web Token) authorization with Access and
        Refresh tokens. Learn the theory, implementation, and client-server
        interaction patterns.
      </p>

      <!-- 1. Theory -->
      <div class="theory-section">
        <h2>� 1. Theory</h2>
        <p>
          <strong>JWT (JSON Web Token)</strong> — encoded string consisting of 3
          parts:
        </p>

        <div class="jwt-structure">
          <div class="jwt-part header">
            <h4>Header</h4>
            <p>Stores type and encryption method</p>
            <div class="code-snippet">
              <code>{{ '{' }}"alg": "HS256", "typ": "JWT"{{ '}' }}</code>
            </div>
          </div>

          <div class="jwt-separator">.</div>

          <div class="jwt-part payload">
            <h4>Payload</h4>
            <p>User data and claims</p>
            <div class="code-snippet">
              <code
                >{{ '{' }}"id": 1, "username": "Vitalii", "roles": ["admin"]{{
                  '}'
                }}</code
              >
            </div>
          </div>

          <div class="jwt-separator">.</div>

          <div class="jwt-part signature">
            <h4>Signature</h4>
            <p>Created using secret key</p>
            <div class="code-snippet">
              <code
                >HMACSHA256(base64(header) + "." + base64(payload),
                secret)</code
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Tokens -->
      <div class="tokens-section">
        <h2>🔑 2. Token Types</h2>
        <div class="tokens-grid">
          <div class="token-card access">
            <h3>Access Token</h3>
            <div class="token-details">
              <div class="detail">
                <span class="label">Lifetime:</span>
                <span class="value">15-30 minutes</span>
              </div>
              <div class="detail">
                <span class="label">Purpose:</span>
                <span class="value">API access</span>
              </div>
              <div class="detail">
                <span class="label">Storage:</span>
                <span class="value">localStorage</span>
              </div>
            </div>
          </div>

          <div class="token-card refresh">
            <h3>Refresh Token</h3>
            <div class="token-details">
              <div class="detail">
                <span class="label">Lifetime:</span>
                <span class="value">15-60 days</span>
              </div>
              <div class="detail">
                <span class="label">Purpose:</span>
                <span class="value">Access Token renewal</span>
              </div>
              <div class="detail">
                <span class="label">Storage:</span>
                <span class="value">HttpOnly Cookie</span>
              </div>
              <div class="detail">
                <span class="label">Validation:</span>
                <span class="value">Database check</span>
              </div>
              <div class="detail">
                <span class="label">Security:</span>
                <span class="value">IP + Device binding</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Client-Server Interaction -->
      <div class="interaction-section">
        <h2>🔄 3. Client ↔ Server Interaction</h2>

        <!-- 3.1 Authorization -->
        <div class="interaction-step">
          <h3>3.1 Authorization Flow</h3>
          <div class="flow-sequence">
            <div class="flow-item">
              <div class="step-num">1</div>
              <div class="step-content">
                <h4>Client Request</h4>
                <p>Send email, password in body</p>
                <div class="code-snippet">
                  <code
                    >POST /api/auth/login<br />{{ '{' }} "email":
                    "user&#64;example.com", "password": "password123"
                    {{ '}' }}</code
                  >
                </div>
              </div>
            </div>

            <div class="flow-item">
              <div class="step-num">2</div>
              <div class="step-content">
                <h4>Server Response</h4>
                <p>Generate token pair</p>
                <div class="response-details">
                  <p><strong>accessToken</strong> → localStorage</p>
                  <p><strong>refreshToken</strong> → HttpOnly cookie</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3.2 API Requests -->
        <div class="interaction-step">
          <h3>3.2 API Requests</h3>
          <div class="api-examples">
            <div class="api-request">
              <h4>Request Example:</h4>
              <div class="code-snippet">
                <code
                  >GET /api/messages /api/orders<br />headers:
                  {{ '{' }} Authorization: "Bearer &lt;accessToken&gt;"
                  {{ '}' }}</code
                >
              </div>
            </div>

            <div class="api-responses">
              <div class="response success">
                <h4>✅ Valid Token</h4>
                <p><strong>Status:</strong> 200</p>
                <p>
                  <strong>Response:</strong> {{ '{' }}messages, orders{{ '}' }}
                </p>
              </div>

              <div class="response error">
                <h4>❌ Invalid Token</h4>
                <p><strong>Status:</strong> 401</p>
                <p>
                  <strong>Response:</strong> {{ '{' }}"message": "НЕ
                  АВТОРИЗОВАН"{{ '}' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3.3 Token Refresh -->
        <div class="interaction-step">
          <h3>3.3 Access Token Refresh</h3>
          <div class="refresh-flow">
            <div class="refresh-step">
              <h4>🔍 Interceptor Detection</h4>
              <p>Client interceptor catches 401 response</p>
            </div>
            <div class="refresh-arrow">↓</div>
            <div class="refresh-step">
              <h4>� Automatic Refresh</h4>
              <p>POST /api/refresh (refreshToken in cookie)</p>
            </div>
            <div class="refresh-arrow">↓</div>
            <div class="refresh-step">
              <h4>✅ New Token Pair</h4>
              <p>
                Server returns fresh {{ '{' }}accessToken, refreshToken{{ '}' }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Token Renewal -->
      <div class="renewal-section">
        <h2>🔄 4. Token Renewal Process</h2>
        <div class="renewal-process">
          <div class="process-step">
            <div class="step-icon">🔍</div>
            <h4>Database Validation</h4>
            <p>Server checks refreshToken against database</p>
          </div>

          <div class="process-step">
            <div class="step-icon">✅</div>
            <h4>Token Generation</h4>
            <p>
              If valid → return new token pair {{ '{' }}accessToken,
              refreshToken{{ '}' }}
            </p>
          </div>

          <div class="process-step">
            <div class="step-icon">⏰</div>
            <h4>Automatic Renewal</h4>
            <p>Process repeats every 30 minutes</p>
          </div>
        </div>
      </div>

      <!-- Implementation Guide -->
      <div class="implementation-guide">
        <h2>⚙️ Implementation Checklist</h2>
        <div class="checklist-grid">
          <div class="checklist-section">
            <h3>Frontend (Angular)</h3>
            <ul>
              <li>✅ AuthService with localStorage for accessToken</li>
              <li>✅ HTTP Interceptor for Authorization header</li>
              <li>✅ 401 response handling in interceptor</li>
              <li>✅ Automatic refresh token call</li>
              <li>✅ Route guards for protected pages</li>
            </ul>
          </div>

          <div class="checklist-section">
            <h3>Backend (Node.js/Express)</h3>
            <ul>
              <li>✅ JWT generation with secret key</li>
              <li>✅ HttpOnly cookie setup for refreshToken</li>
              <li>✅ Database storage for refresh tokens</li>
              <li>✅ Token validation middleware</li>
              <li>✅ IP and device binding for security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .docs-content {
        max-width: 1000px;
        line-height: 1.7;
      }

      .lead {
        font-size: 1.2rem;
        color: #4a5568;
        margin-bottom: 2rem;
        font-weight: 400;
      }

      /* Theory Section */
      .theory-section {
        background: #f8fafc;
        border-radius: 12px;
        padding: 2rem;
        margin: 2rem 0;
      }

      .jwt-structure {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .jwt-part {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
        flex: 1;
        min-width: 200px;
        border: 2px solid;
      }

      .jwt-part.header {
        border-color: #e53e3e;
      }
      .jwt-part.payload {
        border-color: #3182ce;
      }
      .jwt-part.signature {
        border-color: #38a169;
      }

      .jwt-part h4 {
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
      }

      .jwt-separator {
        font-size: 2rem;
        font-weight: bold;
        color: #718096;
        margin: 0 0.5rem;
      }

      /* Tokens Section */
      .tokens-section {
        margin: 2rem 0;
      }

      .tokens-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 1.5rem 0;
      }

      .token-card {
        border-radius: 12px;
        padding: 2rem;
        border: 2px solid;
      }

      .token-card.access {
        background: #f0f8ff;
        border-color: #3182ce;
      }

      .token-card.refresh {
        background: #f0fff4;
        border-color: #38a169;
      }

      .token-card h3 {
        margin: 0 0 1rem 0;
        text-align: center;
      }

      .token-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .detail {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .detail:last-child {
        border-bottom: none;
      }

      .label {
        font-weight: 600;
        color: #4a5568;
      }

      .value {
        color: #2d3748;
        font-weight: 500;
      }

      /* Interaction Section */
      .interaction-section {
        margin: 2rem 0;
      }

      .interaction-step {
        background: #fafafa;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 1.5rem 0;
      }

      .flow-sequence {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin: 1rem 0;
      }

      .flow-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex: 1;
      }

      .step-num {
        width: 40px;
        height: 40px;
        background: #3182ce;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
      }

      .step-content h4 {
        margin: 0 0 0.5rem 0;
        color: #2d3748;
      }

      .response-details p {
        margin: 0.25rem 0;
        font-size: 0.9rem;
      }

      .api-examples {
        margin: 1rem 0;
      }

      .api-request {
        margin-bottom: 1rem;
      }

      .api-responses {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      .response {
        padding: 1rem;
        border-radius: 6px;
        border-left: 4px solid;
      }

      .response.success {
        background: #f0fff4;
        border-color: #38a169;
      }

      .response.error {
        background: #fef5e7;
        border-color: #e53e3e;
      }

      .refresh-flow {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0;
      }

      .refresh-step {
        background: white;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
        width: 100%;
        max-width: 400px;
      }

      .refresh-arrow {
        font-size: 1.5rem;
        color: #3182ce;
        font-weight: bold;
      }

      /* Renewal Section */
      .renewal-section {
        background: #f7fafc;
        border-radius: 8px;
        padding: 2rem;
        margin: 2rem 0;
      }

      .renewal-process {
        display: flex;
        justify-content: space-around;
        margin: 1.5rem 0;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .process-step {
        text-align: center;
        flex: 1;
        min-width: 200px;
      }

      .step-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .process-step h4 {
        margin: 0.5rem 0;
        color: #2d3748;
      }

      /* Implementation Guide */
      .implementation-guide {
        background: #f0fff4;
        border: 1px solid #9ae6b4;
        border-radius: 8px;
        padding: 2rem;
        margin: 2rem 0;
      }

      .checklist-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 1rem 0;
      }

      .checklist-section h3 {
        color: #38a169;
        margin-bottom: 1rem;
        border-bottom: 2px solid #9ae6b4;
        padding-bottom: 0.5rem;
      }

      .checklist-section ul {
        list-style: none;
        padding: 0;
      }

      .checklist-section li {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
      }

      /* Code Snippets */
      .code-snippet {
        background: #2d3748;
        border-radius: 6px;
        padding: 1rem;
        margin: 0.5rem 0;
        overflow-x: auto;
      }

      .code-snippet code {
        color: #e2e8f0;
        font-family: 'Monaco', 'Consolas', monospace;
        font-size: 0.85rem;
        line-height: 1.4;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .jwt-structure {
          flex-direction: column;
        }

        .jwt-separator {
          transform: rotate(90deg);
          margin: 0.5rem 0;
        }

        .tokens-grid,
        .api-responses,
        .checklist-grid {
          grid-template-columns: 1fr;
        }

        .flow-sequence {
          flex-direction: column;
          gap: 1rem;
        }
      }
    `,
  ],
})
export class JwtComponent {}
