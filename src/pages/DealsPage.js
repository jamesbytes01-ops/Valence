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
    </div>
  `;
}
