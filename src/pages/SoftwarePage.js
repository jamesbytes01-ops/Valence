import { PRODUCTS, FORMAT_INR } from "../data/products.js";
import { store } from "../state/store.js";

export function renderSoftwarePage(categoryFilter = "all") {
  const softwareProducts = PRODUCTS.filter(p => p.category !== "Security & Antivirus" && p.category !== "E-books & Guides");
  const filtered = categoryFilter === "all" 
    ? softwareProducts 
    : softwareProducts.filter(p => p.category.toLowerCase().includes(categoryFilter.toLowerCase()));

  return `
    <div class="page-container">
      <div class="page-hero-banner">
        <div class="container">
          <h1 class="page-hero-title">Software &amp; Developer Tools</h1>
          <p class="page-hero-desc">
            Production-grade systems IDEs, parametric design software, workflow automation pipelines, and memory-mapped schema utilities.
          </p>

          <!-- Category Filter Pills -->
          <div style="display: flex; gap: 0.5rem; margin-top: 1.5rem; flex-wrap: wrap;">
            <button class="discovery-tab-btn software-filter-btn ${categoryFilter === 'all' ? 'active' : ''}" data-filter="all">
              All Software (${softwareProducts.length})
            </button>
            <button class="discovery-tab-btn software-filter-btn ${categoryFilter === 'developer' ? 'active' : ''}" data-filter="developer">
              Developer Tools &amp; IDEs
            </button>
            <button class="discovery-tab-btn software-filter-btn ${categoryFilter === 'design' ? 'active' : ''}" data-filter="design">
              Design &amp; Audio
            </button>
            <button class="discovery-tab-btn software-filter-btn ${categoryFilter === 'productivity' ? 'active' : ''}" data-filter="productivity">
              Productivity &amp; Automation
            </button>
            <button class="discovery-tab-btn software-filter-btn ${categoryFilter === 'utilities' ? 'active' : ''}" data-filter="utilities">
              Data &amp; Cloud Utilities
            </button>
          </div>
        </div>
      </div>

      <section class="section-wrapper">
        <div class="container">
          <div class="product-grid">
            ${filtered.map(product => `
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

      <!-- Enterprise Toolchain Capabilities -->
      <section class="section-wrapper alt-bg">
        <div class="container">
          <div class="section-header-block">
            <div>
              <h2 class="section-heading-title">Engineered For Zero Latency &amp; Local Execution</h2>
              <p class="section-subtext">
                Native binary distributions compiled directly for modern multi-core microarchitectures without cloud bloat
              </p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 1rem;">
            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <div style="width: 38px; height: 38px; border-radius: var(--radius-xs); background: var(--accent-lime-dim); color: var(--accent-lime); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Native Toolchain Binaries</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Every tool is delivered as a native executable for x86_64, aarch64 Apple Silicon, and Linux without electron wrappers or runtime overhead.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <div style="width: 38px; height: 38px; border-radius: var(--radius-xs); background: var(--accent-cyan-dim); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Offline Airgap Validation</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Install and authenticate on air-gapped workstations and secure corporate environments using Ed25519 cryptographic tokens.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <div style="width: 38px; height: 38px; border-radius: var(--radius-xs); background: var(--accent-amber-dim); color: var(--accent-amber); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Perpetual Ownership</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Never worry about software turning off when a subscription expires. Perpetual licenses are yours to keep permanently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Comparison Matrix -->
      <section class="section-wrapper">
        <div class="container">
          <div class="section-header-block">
            <div>
              <h2 class="section-heading-title">Developer Toolchain Specifications</h2>
              <p class="section-subtext">
                Compare memory footprints, compiler targets, and license architectures across tools
              </p>
            </div>
          </div>

          <div class="sec-comparison-table-wrapper">
            <table class="sec-comparison-table">
              <thead>
                <tr>
                  <th>Platform &amp; Metric</th>
                  <th>KernelWorks Studio</th>
                  <th>HexaDocs API Studio</th>
                  <th>DataForge Utility</th>
                  <th>VectorStack Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Primary Role</strong></td>
                  <td>Kernel Systems IDE</td>
                  <td>Contract API Runtime</td>
                  <td>ETL &amp; Schema Processor</td>
                  <td>Parametric Vector UI</td>
                </tr>
                <tr>
                  <td><strong>Supported OS</strong></td>
                  <td>Win 11, macOS, Linux</td>
                  <td>Win, macOS, Linux</td>
                  <td>Universal 64-bit</td>
                  <td>macOS, Windows 11</td>
                </tr>
                <tr>
                  <td><strong>Airgap Execution</strong></td>
                  <td><span style="color: var(--accent-lime); font-weight: 600;">✓ 100% Offline</span></td>
                  <td><span style="color: var(--accent-lime); font-weight: 600;">✓ 100% Offline</span></td>
                  <td><span style="color: var(--accent-lime); font-weight: 600;">✓ 100% Offline</span></td>
                  <td><span style="color: var(--accent-lime); font-weight: 600;">✓ 100% Offline</span></td>
                </tr>
                <tr>
                  <td><strong>License Model</strong></td>
                  <td>Perpetual Desktop</td>
                  <td>5-Dev Team Seat</td>
                  <td>Perpetual Single Seat</td>
                  <td>Perpetual Commercial</td>
                </tr>
                <tr>
                  <td><strong>Price (INR)</strong></td>
                  <td><strong>${FORMAT_INR(5499)}</strong></td>
                  <td><strong>${FORMAT_INR(3499)}</strong></td>
                  <td><strong>${FORMAT_INR(3199)}</strong></td>
                  <td><strong>${FORMAT_INR(4299)}</strong></td>
                </tr>
                <tr>
                  <td><strong>Action</strong></td>
                  <td><button class="btn btn-primary btn-sm" data-action="add-cart" data-id="kernelworks-studio">Add to Cart</button></td>
                  <td><button class="btn btn-primary btn-sm" data-action="add-cart" data-id="hexadocs-api-studio">Add to Cart</button></td>
                  <td><button class="btn btn-primary btn-sm" data-action="add-cart" data-id="dataforge-utility">Add to Cart</button></td>
                  <td><button class="btn btn-primary btn-sm" data-action="add-cart" data-id="vectorstack-pro">Add to Cart</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Software FAQ -->
      <section class="section-wrapper alt-bg">
        <div class="container">
          <div class="section-header-block" style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem;">
            <h2 class="section-heading-title" style="margin-bottom: 0.5rem;">Developer Tools FAQ</h2>
            <p class="section-subtext">
              Common technical questions regarding licensing, floating seats, and CI/CD headless execution
            </p>
          </div>

          <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Do perpetual licenses expire after 1 year?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                No. Perpetual licenses grant you lifetime ownership of the software version you purchased, along with 1 full year of major version updates and security patches included.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Can we run these tools in headless CI/CD pipelines?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. Both KernelWorks Studio and DataForge include headless CLI runner binaries that read cryptographic tokens via environment variables.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Can licenses be moved when a developer upgrades their laptop?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. You can deactivate a seat directly from the application preferences and re-register your cryptographic key on the new machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Enterprise Volume Banner -->
      <section class="section-wrapper" style="padding-top: 1rem;">
        <div class="container">
          <div style="background: linear-gradient(135deg, #091326 0%, #0d1e3d 100%); border-radius: var(--radius-sm); padding: 3rem 2.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
            <div>
              <span class="badge-mono lime" style="margin-bottom: 0.75rem;">TEAM SEAT DISCOUNTS</span>
              <h3 style="font-size: 1.85rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">
                Looking for multi-seat engineering team licenses
              </h3>
              <p style="color: #94a3b8; font-size: 0.95rem; max-width: 540px; line-height: 1.5;">
                We offer floating team licenses and consolidated GST billing for engineering organizations with more than 10 developers.
              </p>
            </div>
            <a href="#/deals" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
              View Team Bundles
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}
