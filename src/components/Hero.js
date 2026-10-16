export function renderHero() {
  return `
    <section class="hero-section" id="hero-section">
      <div class="hero-glow-back"></div>
      <div class="container hero-grid">
        <!-- Hero Left Column -->
        <div class="hero-content">
          <div class="hero-status-tag">
            <span class="status-dot"></span>
            <span>DIRECT DIGITAL DISTRIBUTION // v2026.4</span>
          </div>

          <h1 class="hero-title">
            Software, ready <br>
            <span class="highlight-line">when you are.</span>
          </h1>

          <p class="hero-lead">
            <strong>Your next essential tool is here.</strong> Discover professional software, trusted security solutions, and digital resources. Buy with clarity, access your purchases, and manage your licenses in one place.
          </p>

          <div class="hero-cta-group">
            <a href="#discovery-section" class="btn btn-primary" id="hero-explore-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="12 8 8 12 12 16 12 8"></polygon>
                <line x1="16" y1="12" x2="8" y2="12"></line>
              </svg>
              Explore software
            </a>
            <a href="#security-spotlight" class="btn btn-secondary" id="hero-security-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Browse security tools
            </a>
          </div>

          <div class="hero-security-guarantee">
            <div class="guarantee-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Instant Key Provisioning</span>
            </div>
            <div class="guarantee-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Offline Cryptographic Signing</span>
            </div>
            <div class="guarantee-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Perpetual Ownership Options</span>
            </div>
          </div>
        </div>

        <!-- Hero Right Column: Technical Software & License Console Composition -->
        <div class="hero-visual-terminal" id="hero-terminal">
          <div class="terminal-header">
            <div class="terminal-traffic-lights">
              <span class="traffic-light red"></span>
              <span class="traffic-light yellow"></span>
              <span class="traffic-light green"></span>
            </div>
            <span class="terminal-title">VALENCE LICENSE DISPATCH // NODE #07-BLR</span>
            <span class="badge-mono lime" style="font-size: 0.65rem;">TLS 1.3 OK</span>
          </div>

          <div class="terminal-body">
            <!-- Node Telemetry Line -->
            <div class="terminal-node-status">
              <div>
                <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">ACTIVE REPOSITORY</span>
                <div style="font-weight: 700; font-size: 0.95rem; font-family: var(--font-mono); color: var(--text-high);">
                  kernelworks-studio.v4.2.1-lts.x86_64
                </div>
              </div>
              <span class="badge-mono cyan">SHA-256 VERIFIED</span>
            </div>

            <!-- Technical Specification Matrix -->
            <div class="hero-spec-matrix">
              <div class="matrix-card">
                <span class="matrix-label">PLATFORMS</span>
                <div class="matrix-val">WIN • MAC • LNX</div>
              </div>
              <div class="matrix-card">
                <span class="matrix-label">KEY ARCHITECTURE</span>
                <div class="matrix-val">ED25519 AIRGAP</div>
              </div>
              <div class="matrix-card">
                <span class="matrix-label">DISPATCH TIME</span>
                <div class="matrix-val" style="color: var(--accent-lime);">&lt; 120ms</div>
              </div>
            </div>

            <!-- Interactive Simulated License Generator Panel -->
            <div class="hero-license-box">
              <div class="hero-license-header">
                <span>SIMULATED PROVISIONING STREAM</span>
                <span class="mono" style="color: var(--accent-lime);">STATUS: ACTIVE</span>
              </div>
              <div class="hero-license-key-output" id="hero-key-display">
                <span id="hero-generated-key">KWST-9842-X7B1-Q098</span>
                <button class="btn-sm btn-secondary mono" id="hero-copy-btn" title="Copy Key" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;">
                  COPY
                </button>
              </div>
              <div class="hero-interactive-row" style="margin-top: 0.6rem;">
                <span style="color: var(--text-muted); font-size: 0.72rem; font-family: var(--font-mono);">
                  Click to simulate cryptographic issuance:
                </span>
                <button class="hero-dispatch-btn" id="hero-generate-btn">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                  </svg>
                  Generate New Key
                </button>
              </div>
            </div>

            <!-- Monospace Security & Checksum Line -->
            <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center; padding-top: 0.25rem;">
              <span>HASH: e3b0c44298fc1c149afbf4c8...</span>
              <span style="color: var(--accent-lime);">INSTANT DELIVERY GUARANTEE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
