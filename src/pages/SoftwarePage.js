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
    </div>
  `;
}
