import { PRODUCTS, CATEGORIES, FORMAT_INR } from "../data/products.js";

export function renderHomePage() {
  const spotlightProducts = PRODUCTS.filter(p => p.featured).slice(0, 6);

  return `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container hero-grid">
          <!-- Hero Left Column -->
          <div class="hero-content">
            <h1 class="hero-title">
              Software, ready <br>
              <span class="highlight-line">when you are</span>
            </h1>

            <p class="hero-lead">
              Discover professional software, trusted antivirus solutions, and engineering literature. Purchase with transparent INR pricing, access keys immediately, and manage your licenses in one place
            </p>

            <div class="hero-cta-group">
              <a href="#/software" class="btn btn-primary" id="hero-explore-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="12 8 8 12 12 16 12 8"></polygon>
                  <line x1="16" y1="12" x2="8" y2="12"></line>
                </svg>
                Explore software
              </a>
              <a href="#/security" class="btn btn-secondary" id="hero-security-btn">
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
                <span>Perpetual Ownership Available</span>
              </div>
            </div>
          </div>

          <!-- Hero Right Column: Classy High-End Executive Workstation Showcase -->
          <div class="hero-classy-showcase">
            <div class="hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85" 
                alt="Executive bright modern architectural workstation" 
                class="hero-classy-img"
                loading="eager"
              />
              <div class="hero-image-overlay-gradient"></div>
              
              <!-- Floating Glass Badge 1 (Top Left): Verified Authenticity -->
              <div class="hero-floating-glass-badge top-badge">
                <div class="badge-icon-node">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <div class="badge-glass-title">100% Genuine Digital Licenses</div>
                  <div class="badge-glass-sub">Direct Developer Signatures</div>
                </div>
              </div>

              <!-- Floating Glass Badge 2 (Bottom Right): Instant Dispatch Stream -->
              <div class="hero-floating-glass-badge bottom-badge">
                <div class="badge-icon-node live-indicator">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <div class="badge-glass-title">Instant Key Dispatch</div>
                  <div class="badge-glass-sub">Vault Stored &bull; Offline Validated</div>
                </div>
              </div>

              <!-- Floating Glass Badge 3 (Bottom Left): INR Transparent Pricing -->
              <div class="hero-floating-metric-chip">
                <span class="currency-tag">₹ INR</span>
                <span class="chip-text">Zero Forex Markups &bull; 18% GST Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Discovery Bar -->
      <section class="quick-discovery-section">
        <div class="container">
          <div class="quick-discovery-grid">
            <a href="#/software" class="quick-cat-btn">
              <div class="quick-cat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>
              <div class="quick-cat-name">Developer Tools</div>
              <div class="quick-cat-desc">Compilers, systems IDEs, APIs, and debuggers</div>
            </a>

            <a href="#/security" class="quick-cat-btn">
              <div class="quick-cat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="quick-cat-name">Antivirus &amp; Security</div>
              <div class="quick-cat-desc">AI Antivirus, rootkit shields, and firewalls</div>
            </a>

            <a href="#/productivity" class="quick-cat-btn">
              <div class="quick-cat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div class="quick-cat-name">Productivity</div>
              <div class="quick-cat-desc">Keyboard automation and pipeline triggers</div>
            </a>

            <a href="#/software" class="quick-cat-btn">
              <div class="quick-cat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m12 19 7-7 3 3-7 7-3-3z"></path>
                  <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                </svg>
              </div>
              <div class="quick-cat-name">Design &amp; Creative</div>
              <div class="quick-cat-desc">Parametric UI tools and spatial audio DAWs</div>
            </a>

            <a href="#/productivity" class="quick-cat-btn">
              <div class="quick-cat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <div class="quick-cat-name">Utilities &amp; Data</div>
              <div class="quick-cat-desc">High-throughput parsers and cloud backup</div>
            </a>

            <a href="#/ebooks" class="quick-cat-btn">
              <div class="quick-cat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div class="quick-cat-name">E-books &amp; Guides</div>
              <div class="quick-cat-desc">Distributed systems engineering literature</div>
            </a>

            <a href="#/deals" class="quick-cat-btn">
              <div class="quick-cat-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div class="quick-cat-name">Deals &amp; Bundles</div>
              <div class="quick-cat-desc">Commercial packs with up to 35% savings</div>
            </a>
          </div>
        </div>
      </section>

      <!-- Featured Software Spotlight -->
      <section class="section-wrapper">
        <div class="container">
          <div class="section-header-block">
            <div>
              <h2 class="section-heading-title">Featured Software Releases</h2>
              <p class="section-subtext">
                Hand-picked tools, AI antivirus suites, and architecture books available for immediate cryptographic license delivery.
              </p>
            </div>
            <a href="#/software" class="btn btn-secondary btn-sm">View All Software &rarr;</a>
          </div>

          <!-- Product Grid with Real Images (No Heart Symbols) -->
          <div class="product-grid">
            ${spotlightProducts.map(product => `
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
        </div>
      </section>

      <!-- Trust & Verification Section -->
      <section class="section-wrapper alt-bg">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
              <div style="width: 40px; height: 40px; border-radius: var(--radius-xs); background: var(--accent-lime-dim); color: var(--accent-lime); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Zero-Telemetry Guarantee</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                All security suites and antivirus packages run on 100% local heuristic models without uploading private code, telemetry, or user keystrokes.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
              <div style="width: 40px; height: 40px; border-radius: var(--radius-xs); background: var(--accent-cyan-dim); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Cryptographic Offline Keys</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Every license key is cryptographically signed using Ed25519 tokens. Activate tools on air-gapped systems without constant DRM pings.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
              <div style="width: 40px; height: 40px; border-radius: var(--radius-xs); background: var(--accent-amber-dim); color: var(--accent-amber); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Permanent License Vault</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Your purchased software, serial keys, and SHA-256 installer checksums are archived in your account portal for permanent redownloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Enterprise Infrastructure Standards -->
      <section class="section-wrapper">
        <div class="container">
          <div class="section-header-block">
            <div>
              <h2 class="section-heading-title">Enterprise Infrastructure Standards</h2>
              <p class="section-subtext">
                Direct native binary distributions verified against tamper-proof SHA-256 integrity hashes with full GST tax compliance
              </p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 1rem;">
            <div style="padding: 1.5rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-lime); font-weight: 700; display: block; margin-bottom: 0.5rem;">01 / PROTOCOL</span>
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">Airgap License Delivery</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5;">
                Every tool includes offline cryptographic activation keys (.vkey) designed for secured corporate firewalls
              </p>
            </div>

            <div style="padding: 1.5rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700; display: block; margin-bottom: 0.5rem;">02 / INTEGRITY</span>
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">SHA-256 Checksums</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5;">
                Cryptographically signed installers accompanied by public hashes for verifiable automated builds
              </p>
            </div>

            <div style="padding: 1.5rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-amber); font-weight: 700; display: block; margin-bottom: 0.5rem;">03 / TAXATION</span>
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">18% Integrated GST</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5;">
                Instant automated B2B tax invoices with GSTIN identification and full input tax credit eligibility
              </p>
            </div>

            <div style="padding: 1.5rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: #8b5cf6; font-weight: 700; display: block; margin-bottom: 0.5rem;">04 / RECOVERY</span>
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">License Vault Access</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5;">
                Permanent access to your software licenses and installation binaries from any authenticated session
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Enterprise FAQ Section -->
      <section class="section-wrapper alt-bg">
        <div class="container">
          <div class="section-header-block" style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem;">
            <h2 class="section-heading-title" style="margin-bottom: 0.5rem;">Frequently Asked Questions</h2>
            <p class="section-subtext">
              Common questions regarding licensing, offline airgap verification, and enterprise procurement
            </p>
          </div>

          <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                How are digital licenses delivered after checkout?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Upon payment confirmation, your cryptographic serial tokens, offline keyfiles (.vkey), and direct download links are immediately displayed on screen, emailed, and archived in your License Vault.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Can these software tools and antivirus packages operate completely offline?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. All tools on Valence support air-gapped authentication via Ed25519 digital signature validation without requiring recurring internet connections or DRM surveillance.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Are payments and invoices compliant with Indian GST?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. All pricing is quoted transparently in Indian Rupees (₹ INR) inclusive of 18% Integrated GST. Businesses can input their company GSTIN during checkout to generate official input tax credit invoices.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Can licenses be transferred to a new workstation or server?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. Perpetual and multi-device licenses allow deactivation from old hardware and instant key re-issuance through your License Vault with zero administrative delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Enterprise Consultation CTA Banner -->
      <section class="section-wrapper" style="padding-top: 1rem;">
        <div class="container">
          <div style="background: linear-gradient(135deg, #091326 0%, #0d1e3d 100%); border-radius: var(--radius-sm); padding: 3rem 2.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem; box-shadow: 0 16px 36px rgba(15, 23, 42, 0.15);">
            <div>
              <span class="badge-mono cyan" style="margin-bottom: 0.75rem;">ENTERPRISE PROCUREMENT</span>
              <h3 style="font-size: 1.85rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">
                Need custom volume licensing or multi-seat deployment
              </h3>
              <p style="color: #94a3b8; font-size: 0.95rem; max-width: 540px; line-height: 1.5;">
                Speak with our technical engineering dispatch team for airgap deployment assistance, custom procurement contracts, and volume discounts.
              </p>
            </div>

            <div style="display: flex; gap: 1rem; align-items: center;">
              <a href="#/security" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
                Explore Security Bundles
              </a>
              <a href="#/deals" class="btn btn-secondary" style="background: transparent; color: #ffffff; border-color: #334155; padding: 0.75rem 1.5rem;">
                Commercial Deals
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
