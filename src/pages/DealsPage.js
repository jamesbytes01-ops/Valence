import { PRODUCTS, FORMAT_INR } from "../data/products.js";

export function renderDealsPage() {
  const dealProducts = PRODUCTS.filter(p => p.previousPrice && p.previousPrice > p.price);

  return `
    <div class="page-container">
      <div class="page-hero-banner">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h1 class="page-hero-title">Special Commercial License Deals</h1>
              <p class="page-hero-desc">
                Limited-time verified digital software licenses with savings up to 35%. All purchases include permanent key archiving.
              </p>
            </div>

            <div style="padding: 0.85rem 1.25rem; background: rgba(5, 150, 105, 0.1); border: 1px solid rgba(5, 150, 105, 0.3); border-radius: var(--radius-xs);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-lime); display: block; font-weight: 700;">PROMO CODE ACTIVE</span>
              <strong class="mono" style="font-size: 1.1rem; color: var(--text-high);">TECH20 (EXTRA 20% OFF)</strong>
            </div>
          </div>
        </div>
      </div>

      <section class="section-wrapper">
        <div class="container">
          <div class="product-grid">
            ${dealProducts.map(product => {
              const savings = product.previousPrice - product.price;
              const percent = Math.round((savings / product.previousPrice) * 100);
              return `
                <div class="product-card" data-product-id="${product.id}">
                  <div class="product-visual-container">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-photo-img" loading="lazy" />
                    <span class="badge-mono danger product-card-badge">SAVE ${percent}% (₹${savings.toLocaleString('en-IN')})</span>
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
                        <span class="product-prev-price">${FORMAT_INR(product.previousPrice)}</span>
                      </div>

                      <div class="product-action-group">
                        <a href="#/product/${product.id}" class="btn btn-secondary btn-sm">
                          Specs
                        </a>
                        <button class="btn btn-primary btn-sm" data-action="add-cart" data-id="${product.id}">
                          Claim Deal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </section>

      <!-- Transparent Commercial Pricing Guarantees -->
      <section class="section-wrapper alt-bg">
        <div class="container">
          <div class="section-header-block">
            <div>
              <h2 class="section-heading-title">Transparent Commercial Pricing Guarantees</h2>
              <p class="section-subtext">
                Direct developer pricing with zero hidden renewal markups and full Indian GST input tax credit compliance
              </p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 1rem;">
            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-lime); font-weight: 700; display: block; margin-bottom: 0.5rem;">GUARANTEE 01</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Locked Renewal Rates</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Annual tools purchased on sale renew at the same promotional discount rate for life without surprise price hikes.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700; display: block; margin-bottom: 0.5rem;">GUARANTEE 02</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Official GST Tax Invoicing</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Input your corporate GSTIN at checkout to generate compliant Indian B2B tax invoices with instant input tax credit eligibility.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-amber); font-weight: 700; display: block; margin-bottom: 0.5rem;">GUARANTEE 03</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Instant Vault Archiving</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                All promo codes and discount licenses receive the same permanent archive storage and redownload rights in your License Vault.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Deals FAQ -->
      <section class="section-wrapper">
        <div class="container">
          <div class="section-header-block" style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem;">
            <h2 class="section-heading-title" style="margin-bottom: 0.5rem;">Commercial Deals FAQ</h2>
            <p class="section-subtext">
              Frequently asked questions on discount coupons, volume packages, and refund policies
            </p>
          </div>

          <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Can coupon codes like TECH20 be stacked with current discounts?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. Enter coupon code TECH20 during checkout to take an additional 20% off already discounted prices.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                What is the refund policy on discounted licenses?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                We offer a 14-day technical satisfaction guarantee on all software tools and antivirus suites if they fail to meet your system specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Enterprise Volume Quote Banner -->
      <section class="section-wrapper" style="padding-top: 1rem;">
        <div class="container">
          <div style="background: linear-gradient(135deg, #091326 0%, #0d1e3d 100%); border-radius: var(--radius-sm); padding: 3rem 2.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
            <div>
              <span class="badge-mono cyan" style="margin-bottom: 0.75rem;">CUSTOM BUNDLE QUOTES</span>
              <h3 style="font-size: 1.85rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">
                Need a tailored multi-software bundle for your engineering team
              </h3>
              <p style="color: #94a3b8; font-size: 0.95rem; max-width: 540px; line-height: 1.5;">
                Combine KernelWorks Studio, CipherNest Security, and DataForge Utility into a unified team package with consolidated billing.
              </p>
            </div>
            <a href="#/software" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
              Browse Full Catalog
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}
