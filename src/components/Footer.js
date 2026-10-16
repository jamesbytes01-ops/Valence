export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <!-- Top Footer Grid -->
        <div class="footer-top-grid">
          <!-- Brand & Philosophy Column -->
          <div class="footer-brand-col">
            <a href="#/" class="footer-brand-link" id="footer-logo-link" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;" title="Valence Digital Home">
              <div class="brand-symbol" style="width: 32px; height: 32px; background: #172554; border: 1px solid #1e40af;">
                <svg viewBox="0 0 24 24" style="width: 17px; height: 17px;">
                  <polygon points="12,2 22,8.5 22,17.5 12,22 2,17.5 2,8.5" fill="none" stroke="#ffffff"/>
                  <circle cx="12" cy="12" r="3" fill="#38bdf8"/>
                </svg>
              </div>
              <span style="font-family: var(--font-display); font-weight: 800; font-size: 1.2rem; color: #f8fafc; letter-spacing: -0.01em;">
                VALENCE<span style="color: #38bdf8;">.IO</span>
              </span>
            </a>

            <p style="color: #94a3b8; line-height: 1.55; font-size: 0.88rem;">
              An engineered digital distribution platform for modern developers, security architects, and technical creators. Direct binary delivery with offline cryptographic licensing.
            </p>

            <div class="footer-status-pill">
              <span class="status-dot"></span>
              <span>VALENCE GATEWAY: 99.99% UPTIME</span>
            </div>
          </div>

          <!-- Column 2: Software Categories -->
          <div class="footer-col">
            <h5>Marketplace Departments</h5>
            <ul class="footer-link-list">
              <li><a href="#/software">Developer Tools &amp; IDEs</a></li>
              <li><a href="#/security">Antivirus &amp; Threat Defense</a></li>
              <li><a href="#/productivity">Workflow Automation</a></li>
              <li><a href="#/software">Parametric Design Engines</a></li>
              <li><a href="#/productivity">High-Throughput Utilities</a></li>
              <li><a href="#/ebooks">Technical Compendiums</a></li>
            </ul>
          </div>

          <!-- Column 3: Platform Architecture -->
          <div class="footer-col">
            <h5>License Architecture</h5>
            <ul class="footer-link-list">
              <li><a href="#/vault">My License Vault</a></li>
              <li><a href="#/deals">Commercial Deals &amp; Bundles</a></li>
              <li><a href="#/security">Multi-Device Deployment Guide</a></li>
              <li><a href="#/">Offline Key Validation Protocol</a></li>
              <li><a href="#/software">SHA-256 Binary Integrity</a></li>
            </ul>
          </div>

          <!-- Column 4: Platform Standards -->
          <div class="footer-col">
            <h5>Technical Operations</h5>
            <ul class="footer-link-list">
              <li><a href="#/">PGP Public Key (0x7F8B92)</a></li>
              <li><a href="#/">Air-gapped Key Generation</a></li>
              <li><a href="#/">Refund &amp; Revocation Protocol</a></li>
              <li><a href="#/">Automated Invoicing (GST)</a></li>
              <li><a href="#/">API Developer Sandbox</a></li>
            </ul>
          </div>

          <!-- Column 5: Localization & Currencies -->
          <div class="footer-col">
            <h5>Commerce Region</h5>
            <div class="footer-commerce-box">
              <span class="mono" style="font-size: 0.72rem; color: #94a3b8; display: block; font-weight: 600;">CURRENCY &amp; TAXATION</span>
              <strong class="mono" style="color: #38bdf8; font-size: 0.95rem;">₹ INR (Indian Rupee)</strong>
              <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 3px;">Includes 18% Integrated GST</div>
            </div>
            <div style="font-size: 0.78rem; color: #94a3b8; line-height: 1.45;">
              Support Hotline: <br>
              <strong class="mono" style="color: #f8fafc;">dispatch@valence.internal</strong>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom-bar">
          <div class="footer-fictional-disclaimer">
            &copy; 2026 VALENCE DIGITAL DISTRIBUTION CORP. ALL RIGHTS RESERVED. 
            <span style="display: block; margin-top: 4px; color: #64748b; font-size: 0.74rem;">
              NOTICE: Valence Digital is a fictional showcase digital products and software licensing marketplace built for technical demonstration. Fictional product names, cryptographic mockups, and software descriptions are illustrative simulations.
            </span>
          </div>

          <div style="display: flex; gap: 1.25rem; align-items: center;">
            <span class="mono" style="color: #38bdf8; font-size: 0.75rem; font-weight: 600;">● SYSTEM OPERATIONAL</span>
            <a href="#site-header" class="footer-back-top" title="Back to top">&uarr; TOP</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
