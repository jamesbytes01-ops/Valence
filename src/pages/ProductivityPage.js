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
    </div>
  `;
}
