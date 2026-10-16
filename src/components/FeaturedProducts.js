import { PRODUCTS, FORMAT_INR } from "../data/products.js";
import { store } from "../state/store.js";
import { getProductArtwork } from "../utils/productVisuals.js";

export function renderFeaturedProducts() {
  // Exactly the 6 highlighted products for the "Tools in focus" section
  const featured = PRODUCTS.filter(p => p.featured);

  return `
    <section class="section-wrapper" id="featured-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-block">
          <div>
            <span class="section-label-tag">CURATED DIGITAL ASSETS</span>
            <h2 class="section-heading-title">Tools in focus</h2>
            <p class="section-subtext">
              Precision-engineered software, zero-trust security tools, and systems literature verified for direct cryptographic distribution.
            </p>
          </div>

          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="badge-mono lime">
              <span class="status-dot"></span> 6 RELEASES SPOTLIGHTED
            </span>
          </div>
        </div>

        <!-- 6-Product Technical Grid -->
        <div class="product-grid">
          ${featured.map(product => {
            const isWishlisted = store.isInWishlist(product.id);
            return `
              <div class="product-card" data-product-id="${product.id}">
                <!-- Artwork Visual Container -->
                <div class="product-visual-container">
                  <span class="badge-mono ${product.accentColor === '#00E5FF' ? 'cyan' : product.accentColor === '#FFB800' ? 'amber' : product.accentColor === '#FF5E7E' ? 'danger' : 'lime'} product-card-badge">
                    ${product.badge}
                  </span>

                  <button 
                    class="product-card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    data-action="wishlist" 
                    data-id="${product.id}"
                    title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
                    aria-label="Wishlist toggle"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>

                  <div class="product-visual-art">
                    ${getProductArtwork(product.visualType, product.accentColor)}
                  </div>

                  <!-- Platform Pills -->
                  <div class="product-platform-badges">
                    ${product.platforms.map(p => `
                      <span class="platform-pill">${p.substring(0, 3).toUpperCase()}</span>
                    `).join("")}
                  </div>
                </div>

                <!-- Product Content -->
                <div class="product-card-body">
                  <div class="product-category-row">
                    <span class="product-category-label">${product.category}</span>
                    <div class="product-rating-box">
                      <span>★</span>
                      <span>${product.rating.toFixed(1)}</span>
                      <span style="color: var(--text-muted); font-size: 0.65rem;">(${product.reviewCount})</span>
                    </div>
                  </div>

                  <h3 class="product-card-title">${product.name}</h3>
                  <p class="product-card-desc">${product.shortDesc}</p>

                  <div class="product-license-tag">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>${product.licenseType}</span>
                  </div>

                  <!-- Footer: Pricing and Primary Actions -->
                  <div class="product-card-footer">
                    <div class="product-price-block">
                      <span class="product-current-price">${FORMAT_INR(product.price)}</span>
                      ${product.previousPrice ? `
                        <span class="product-prev-price">${FORMAT_INR(product.previousPrice)}</span>
                      ` : ""}
                    </div>

                    <div class="product-action-group">
                      <button 
                        class="btn btn-secondary btn-sm" 
                        data-action="quick-view" 
                        data-id="${product.id}"
                        title="View Technical Specifications"
                      >
                        Specs
                      </button>
                      <button 
                        class="btn btn-primary btn-sm" 
                        data-action="add-cart" 
                        data-id="${product.id}"
                        title="Add to Shopping Cart"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Buy
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
  `;
}
