import { PRODUCTS, FORMAT_INR } from "../data/products.js";

export function renderProductivityPage() {
  const productivityProducts = PRODUCTS.filter(p => p.category === "Productivity" || p.category === "Utilities" || p.category === "Business");

  return `
    <div class="page-container">
      <div class="page-hero-banner">
        <div class="container">
          <h1 class="page-hero-title">Productivity &amp; Data Utilities</h1>
          <p class="page-hero-desc">
            Keyboard-first automation pipelines, memory-mapped ETL processors, encrypted cold backups, and Git-native agile tracking engines.
          </p>
        </div>
      </div>

      <section class="section-wrapper">
        <div class="container">
          <div class="product-grid">
            ${productivityProducts.map(product => `
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

      <!-- Productivity Architecture Pillars -->
      <section class="section-wrapper alt-bg">
        <div class="container">
          <div class="section-header-block">
            <div>
              <h2 class="section-heading-title">Engineering Velocity Without Cloud Bloat</h2>
              <p class="section-subtext">
                Local-first utilities designed for high data throughput, deterministic execution, and zero subscription traps
              </p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 1rem;">
            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <div style="width: 38px; height: 38px; border-radius: var(--radius-xs); background: var(--accent-amber-dim); color: var(--accent-amber); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Sub-10ms Command Execution</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Launch multi-step shell scripts, webhook relays, and environment secrets with zero mouse movements or browser load times.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <div style="width: 38px; height: 38px; border-radius: var(--radius-xs); background: var(--accent-lime-dim); color: var(--accent-lime); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">High-Throughput ETL Engines</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Transform gigabytes of JSON, CSV, and Parquet data using memory-mapped streaming pipelines that consume minimal RAM.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <div style="width: 38px; height: 38px; border-radius: var(--radius-xs); background: var(--accent-cyan-dim); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
              </div>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Client-Side Encrypted Backup</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Encrypt and fragment sensitive project trees with zero-knowledge AES-256 keys before sending data to local NAS or S3 cold storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Productivity FAQ -->
      <section class="section-wrapper">
        <div class="container">
          <div class="section-header-block" style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem;">
            <h2 class="section-heading-title" style="margin-bottom: 0.5rem;">Productivity Tools FAQ</h2>
            <p class="section-subtext">
              Questions on self-hosting, team secrets, and script execution guarantees
            </p>
          </div>

          <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Are scripts executed in an isolated sandbox?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. TaskCircuit executes localized triggers in isolated subprocess sandboxes with configurable memory limits and dedicated timeout controls.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Can SprintBoard be self-hosted on corporate Docker servers?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. The SprintBoard commercial license includes production Docker Compose configurations for behind-the-firewall deployment without external SaaS telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Team Automation Banner -->
      <section class="section-wrapper" style="padding-top: 1rem;">
        <div class="container">
          <div style="background: linear-gradient(135deg, #091326 0%, #0d1e3d 100%); border-radius: var(--radius-sm); padding: 3rem 2.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
            <div>
              <span class="badge-mono cyan" style="margin-bottom: 0.75rem;">ORGANIZATIONAL EFFICIENCY</span>
              <h3 style="font-size: 1.85rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">
                Equip your engineering teams with local automation pipelines
              </h3>
              <p style="color: #94a3b8; font-size: 0.95rem; max-width: 540px; line-height: 1.5;">
                Save hundreds of developer hours every month with keyboard pipelines, automated schema drift analyzers, and Git-native burndown tracking.
              </p>
            </div>
            <a href="#/deals" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
              Explore Commercial Packs
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}
