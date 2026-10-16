import { PRODUCTS, FORMAT_INR } from "../data/products.js";
import { store } from "../state/store.js";
import { getProductArtwork } from "../utils/productVisuals.js";

// Currently selected security product in spotlight
let selectedSecProductId = "aegisroot-antivirus";

export function setSecuritySelectedProduct(id) {
  selectedSecProductId = id;
}

export function getSecuritySelectedProduct() {
  return selectedSecProductId;
}

export function renderSecuritySpotlight() {
  const securityProducts = PRODUCTS.filter(p => p.category === "Security & Antivirus");
  const activeProduct = securityProducts.find(p => p.id === selectedSecProductId) || securityProducts[0];

  return `
    <section class="section-wrapper security-spotlight-wrapper" id="security-spotlight">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-block">
          <div>
            <span class="section-label-tag">ENDPOINT DEFENSE &amp; MULTIPLE ANTIVIRUS TOOLS</span>
            <h2 class="section-heading-title">Security &amp; Antivirus Spotlight</h2>
            <p class="section-subtext">
              Comprehensive antivirus engines, zero-trust infrastructure defense, behavioral ransomware shielding, and deep packet boundary analyzers.
            </p>
          </div>

          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="badge-mono lime">
              <span class="status-dot"></span> ${securityProducts.length} SECURITY PACKAGES VERIFIED
            </span>
          </div>
        </div>

        <!-- Security Suite Product Switcher Tabs -->
        <div style="display: flex; gap: 0.6rem; overflow-x: auto; margin-bottom: 1.5rem; padding-bottom: 0.25rem;">
          ${securityProducts.map(p => {
            const isActive = p.id === activeProduct.id;
            return `
              <button 
                class="discovery-tab-btn sec-product-tab ${isActive ? 'active' : ''}" 
                data-sec-id="${p.id}"
                style="display: flex; align-items: center; gap: 0.5rem;"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>${p.name}</span>
                <span class="badge-mono ${p.id.includes('antivirus') ? 'lime' : 'cyan'}" style="font-size: 0.62rem; padding: 0.1rem 0.35rem;">
                  ${p.tag.split(" ")[0]}
                </span>
              </button>
            `;
          }).join("")}
        </div>

        <!-- Featured Security Panel -->
        <div class="security-hero-panel">
          <!-- Left Specs Column -->
          <div class="sec-left-info">
            <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
              <span class="badge-mono lime">${activeProduct.tag}</span>
              <span class="badge-mono cyan">VERSION ${activeProduct.version}</span>
              <span class="mono" style="font-size: 0.75rem; color: var(--accent-amber);">★ ${activeProduct.rating} (${activeProduct.reviewCount} reviews)</span>
            </div>

            <div>
              <h3 style="font-size: 1.85rem; font-weight: 700; margin-bottom: 0.5rem;">
                ${activeProduct.name}
              </h3>
              <p style="font-size: 0.95rem; line-height: 1.6; max-width: 620px;">
                ${activeProduct.fullDesc}
              </p>
            </div>

            <!-- Technical Metadata Row -->
            <div class="sec-tech-meta-row">
              <span class="badge-mono">OS: ${activeProduct.platforms.join(" • ")}</span>
              <span class="badge-mono">ARCH: ${activeProduct.architecture}</span>
              <span class="badge-mono">ENGINE: ${activeProduct.securityDetails ? activeProduct.securityDetails.engine : "Behavioral Sandbox"}</span>
            </div>

            <!-- Features Checklist -->
            <div>
              <h5 class="mono" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.75rem; text-transform: uppercase;">
                CORE CAPABILITIES &amp; DEFENSE MODULES
              </h5>
              <ul class="sec-features-checklist">
                ${activeProduct.features.map(f => `
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>${f}</span>
                  </li>
                `).join("")}
              </ul>
            </div>

            <!-- What's Included -->
            <div style="background: var(--bg-canvas); border: 1px solid var(--border-subtle); padding: 1.15rem; border-radius: var(--radius-xs); margin-top: 0.5rem;">
              <h5 class="mono" style="font-size: 0.75rem; color: var(--accent-lime); margin-bottom: 0.5rem;">
                WHAT IS INCLUDED IN YOUR LICENSE PACKAGE:
              </h5>
              <div style="font-size: 0.85rem; color: var(--text-medium); display: flex; flex-direction: column; gap: 0.4rem;">
                ${activeProduct.whatIsIncluded.map(item => `
                  <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span style="color: var(--accent-lime); font-family: var(--font-mono); font-weight: bold;">›</span>
                    <span>${item}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Right Interactive Multi-Device Tier Box -->
          <div class="sec-interactive-pricing-box">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  <span class="mono" style="font-size: 0.72rem; color: var(--text-muted);">LICENSE PROVISIONING</span>
                  <h4 style="font-size: 1.25rem; font-weight: 700; margin-top: 2px;">Multi-Device Selector</h4>
                </div>
                <span class="badge-mono lime">INSTANT KEY</span>
              </div>

              <!-- Device Tier Selector -->
              <div class="tier-selector-group" id="sec-tier-group">
                <button class="tier-option-btn active" data-seats="3" data-multiplier="1" data-label="Standard (3 Devices)">
                  <span>Standard Pack (3 Devices)</span>
                  <strong class="mono" style="color: var(--accent-lime);">${FORMAT_INR(activeProduct.price)}</strong>
                </button>
                <button class="tier-option-btn" data-seats="1" data-multiplier="0.65" data-label="Single Workstation">
                  <span>1 Workstation (Solo)</span>
                  <strong class="mono">${FORMAT_INR(Math.round(activeProduct.price * 0.65))}</strong>
                </button>
                <button class="tier-option-btn" data-seats="5" data-multiplier="1.45" data-label="Family / Multi-Device (5 Seats)">
                  <span>5 Devices (Cross-Platform)</span>
                  <strong class="mono">${FORMAT_INR(Math.round(activeProduct.price * 1.45))}</strong>
                </button>
                <button class="tier-option-btn" data-seats="10" data-multiplier="2.2" data-label="Team / Studio (10 Devices)">
                  <span>10 Devices (Team/Studio)</span>
                  <strong class="mono">${FORMAT_INR(Math.round(activeProduct.price * 2.2))}</strong>
                </button>
              </div>

              <!-- Live Price Display -->
              <div style="padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); margin-bottom: 1.25rem;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                  <span style="font-size: 0.82rem; color: var(--text-muted);">Total In INR:</span>
                  <span class="mono" id="sec-calc-price" style="font-size: 1.75rem; font-weight: 700; color: var(--text-high);">
                    ${FORMAT_INR(activeProduct.price)}
                  </span>
                </div>
                <div style="font-size: 0.74rem; color: var(--text-muted); margin-top: 4px; display: flex; justify-content: space-between;">
                  <span>Includes 18% Integrated GST</span>
                  <span style="color: var(--accent-lime);">${activeProduct.licenseType}</span>
                </div>
              </div>
            </div>

            <!-- Action CTAs -->
            <div style="display: flex; flex-direction: column; gap: 0.6rem;">
              <button class="btn btn-primary" id="sec-buy-now-btn" data-id="${activeProduct.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Deploy License Key Now
              </button>
              <button class="btn btn-secondary btn-sm" data-action="quick-view" data-id="${activeProduct.id}">
                View Complete Technical Specifications &rarr;
              </button>
            </div>
          </div>
        </div>

        <!-- Technical Comparison Table for Security & Antivirus Engines -->
        <h4 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.15rem;">
          Antivirus &amp; Security Technical Comparison Matrix
        </h4>

        <div class="sec-comparison-table-wrapper">
          <table class="sec-comparison-table">
            <thead>
              <tr>
                <th>Security Parameter</th>
                <th>AegisRoot Antivirus Pro</th>
                <th>CipherNest Security</th>
                <th>SentinelWall Enterprise</th>
                <th>GhostShield Threat Guard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary Focus</strong></td>
                <td><span class="badge-mono lime">AI Antivirus &amp; Rootkits</span></td>
                <td><span class="badge-mono cyan">Zero-Trust Endpoints</span></td>
                <td><span class="badge-mono amber">Network Boundary DPI</span></td>
                <td><span class="badge-mono">DNS &amp; Phishing Barrier</span></td>
              </tr>
              <tr>
                <td><strong>Memory Footprint</strong></td>
                <td>Sub-40MB Low-RAM</td>
                <td>Sub-60MB Kernel Guard</td>
                <td>Dedicated Gateway Server</td>
                <td>Sub-25MB Native Daemon</td>
              </tr>
              <tr>
                <td><strong>Ransomware Rollback</strong></td>
                <td><span style="color: var(--accent-lime); font-weight: 600;">✓ Instant NVMe Shadow</span></td>
                <td><span style="color: var(--accent-lime); font-weight: 600;">✓ Ephemeral Sandbox</span></td>
                <td><span style="color: var(--accent-lime); font-weight: 600;">✓ ZFS Snapshot Detonator</span></td>
                <td>Blocklist Quarantine</td>
              </tr>
              <tr>
                <td><strong>Offline Validation</strong></td>
                <td><span style="color: var(--accent-lime); font-weight: 600;">✓ Airgap Token</span></td>
                <td><span style="color: var(--accent-lime); font-weight: 600;">✓ Ed25519 Keyfile</span></td>
                <td><span style="color: var(--accent-lime); font-weight: 600;">✓ Hardware Token</span></td>
                <td><span style="color: var(--accent-lime); font-weight: 600;">✓ Standalone Key</span></td>
              </tr>
              <tr>
                <td><strong>Price in INR</strong></td>
                <td><strong>${FORMAT_INR(1999)}</strong></td>
                <td><strong>${FORMAT_INR(2899)}</strong></td>
                <td><strong>${FORMAT_INR(6999)}</strong></td>
                <td><strong>${FORMAT_INR(1699)}</strong></td>
              </tr>
              <tr>
                <td><strong>Action</strong></td>
                <td>
                  <button class="btn btn-primary btn-sm" data-action="add-cart" data-id="aegisroot-antivirus">
                    Buy Key
                  </button>
                </td>
                <td>
                  <button class="btn btn-secondary btn-sm" data-action="add-cart" data-id="ciphernest-security">
                    Buy Key
                  </button>
                </td>
                <td>
                  <button class="btn btn-secondary btn-sm" data-action="add-cart" data-id="sentinelwall-enterprise">
                    Buy Key
                  </button>
                </td>
                <td>
                  <button class="btn btn-secondary btn-sm" data-action="add-cart" data-id="ghostshield-guard">
                    Buy Key
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Fictional Demo Product Notice -->
        <div style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-surface); border: 1px dashed var(--border-medium); border-radius: var(--radius-xs); font-size: 0.78rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.75rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-amber); flex-shrink: 0;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>
            <strong>Transparency Notice:</strong> All security suites, antivirus engines, and cryptographic utilities featured on Valence Digital are simulated demonstration products. They provide authentic e-commerce cart, license key generation, and delivery simulation without third-party lab certification claims.
          </span>
        </div>
      </div>
    </section>
  `;
}
