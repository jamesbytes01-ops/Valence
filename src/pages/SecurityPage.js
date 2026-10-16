import { PRODUCTS, FORMAT_INR } from "../data/products.js";
import { store } from "../state/store.js";

let selectedSecId = "aegisroot-antivirus";
let secSeats = 3;
let secMultiplier = 1;
let secLabel = "Standard Pack (3 Devices)";

export function setSecuritySelectedProduct(id) {
  selectedSecId = id;
}

export function getSecuritySelectedProduct() {
  return selectedSecId;
}

export function renderSecurityPage() {
  const securityProducts = PRODUCTS.filter(p => p.category === "Security & Antivirus");
  const activeProduct = securityProducts.find(p => p.id === selectedSecId) || securityProducts[0];

  return `
    <div class="page-container">
      <div class="page-hero-banner">
        <div class="container">
          <h1 class="page-hero-title">Antivirus, Threat Defense &amp; Privacy</h1>
          <p class="page-hero-desc">
            Next-generation AI antivirus engines, zero-trust endpoint defenses, and kernel-level rootkit shields running locally without telemetry surveillance.
          </p>

          <!-- Security Suite Switcher Tabs -->
          <div style="display: flex; gap: 0.6rem; overflow-x: auto; margin-top: 1.5rem; padding-bottom: 0.25rem;">
            ${securityProducts.map(p => {
              const isActive = p.id === activeProduct.id;
              return `
                <button 
                  class="discovery-tab-btn sec-tab-btn ${isActive ? 'active' : ''}" 
                  data-sec-id="${p.id}"
                  style="display: flex; align-items: center; gap: 0.5rem;"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>${p.name}</span>
                </button>
              `;
            }).join("")}
          </div>
        </div>
      </div>

      <section class="section-wrapper">
        <div class="container">
          <!-- Featured Security Spotlight Panel -->
          <div class="security-hero-panel">
            <div class="sec-left-info">
              <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                <span class="badge-mono lime">${activeProduct.badge}</span>
                <span class="badge-mono cyan">VERSION ${activeProduct.version}</span>
                <span class="mono" style="font-size: 0.75rem; color: var(--accent-amber);">★ ${activeProduct.rating} (${activeProduct.reviewCount} reviews)</span>
              </div>

              <div>
                <h2 style="font-size: 1.85rem; font-weight: 700; margin-bottom: 0.5rem;">
                  ${activeProduct.name}
                </h2>
                <p style="font-size: 0.95rem; line-height: 1.6; max-width: 620px;">
                  ${activeProduct.fullDesc}
                </p>
              </div>

              <!-- Technical Specs Row -->
              <div class="sec-tech-meta-row">
                <span class="badge-mono">OS: ${activeProduct.platforms.join(" • ")}</span>
                <span class="badge-mono">ARCH: ${activeProduct.architecture}</span>
                <span class="badge-mono">ENGINE: ${activeProduct.securityDetails ? activeProduct.securityDetails.engine : "Behavioral Sandbox"}</span>
              </div>

              <!-- Features Checklist -->
              <div>
                <h5 class="mono" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.75rem; text-transform: uppercase;">
                  SECURITY CAPABILITIES &amp; MODULES
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
              <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 1.15rem; border-radius: var(--radius-xs);">
                <h5 class="mono" style="font-size: 0.75rem; color: var(--accent-lime); margin-bottom: 0.5rem;">
                  WHAT IS INCLUDED IN YOUR PACKAGE:
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

                <div style="padding: 1rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); margin-bottom: 1.25rem;">
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

              <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                <button class="btn btn-primary" id="sec-buy-now-btn" data-id="${activeProduct.id}">
                  Deploy License Key Now
                </button>
                <a href="#/product/${activeProduct.id}" class="btn btn-secondary btn-sm" style="text-align: center;">
                  View Complete Technical Specifications &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- All Security & Antivirus Packages Grid -->
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.25rem; margin-top: 2.5rem;">
            All Antivirus &amp; Security Tools
          </h3>

          <div class="product-grid">
            ${securityProducts.map(product => `
              <div class="product-card" data-product-id="${product.id}">
                <div class="product-visual-container">
                  <img src="${product.imageUrl}" alt="${product.name}" class="product-photo-img" loading="lazy" />
                  <span class="badge-mono lime product-card-badge">${product.badge}</span>
                  <div class="product-platform-badges">
                    ${product.platforms.map(p => `<span class="platform-pill">${p.substring(0, 3).toUpperCase()}</span>`).join("")}
                  </div>
                </div>

                <div class="product-card-body">
                  <div class="product-category-row">
                    <span class="product-category-label">${product.category}</span>
                    <div class="product-rating-box">
                      <span>★</span>
                      <span>${product.rating.toFixed(1)}</span>
                      <span style="color: var(--text-muted); font-size: 0.7rem;">(${product.reviewCount})</span>
                    </div>
                  </div>

                  <h3 class="product-card-title">${product.name}</h3>
                  <p class="product-card-desc">${product.shortDesc}</p>

                  <div class="product-license-tag">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>${product.licenseType}</span>
                  </div>

                  <div class="product-card-footer">
                    <div class="product-price-block">
                      <span class="product-current-price">${FORMAT_INR(product.price)}</span>
                      ${product.previousPrice ? `<span class="product-prev-price">${FORMAT_INR(product.previousPrice)}</span>` : ""}
                    </div>

                    <div class="product-action-group">
                      <a href="#/product/${product.id}" class="btn btn-secondary btn-sm">
                        Specs
                      </a>
                      <button class="btn btn-primary btn-sm" data-action="add-cart" data-id="${product.id}">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Comparison Table -->
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-top: 3.5rem; margin-bottom: 1rem;">
            Security Technical Comparison Matrix
          </h3>

          <div class="sec-comparison-table-wrapper">
            <table class="sec-comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>AegisRoot Antivirus Pro</th>
                  <th>CipherNest Security</th>
                  <th>SentinelWall Enterprise</th>
                  <th>GhostShield Threat Guard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Primary Focus</strong></td>
                  <td>AI Antivirus &amp; Rootkit Killer</td>
                  <td>Zero-Trust Endpoints</td>
                  <td>Network Boundary DPI</td>
                  <td>DNS Threat Sinkhole</td>
                </tr>
                <tr>
                  <td><strong>Memory Footprint</strong></td>
                  <td>Sub-40MB Low RAM</td>
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
                  <td><button class="btn btn-primary btn-sm" data-action="add-cart" data-id="aegisroot-antivirus">Buy Key</button></td>
                  <td><button class="btn btn-primary btn-sm" data-action="add-cart" data-id="ciphernest-security">Buy Key</button></td>
                  <td><button class="btn btn-primary btn-sm" data-action="add-cart" data-id="sentinelwall-enterprise">Buy Key</button></td>
                  <td><button class="btn btn-primary btn-sm" data-action="add-cart" data-id="ghostshield-guard">Buy Key</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  `;
}
