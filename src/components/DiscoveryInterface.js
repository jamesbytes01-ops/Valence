import { PRODUCTS, NEEDS, CATEGORIES, FORMAT_INR } from "../data/products.js";
import { store } from "../state/store.js";
import { getProductArtwork } from "../utils/productVisuals.js";

export function renderDiscoveryInterface() {
  // Filter products based on selectedNeed, selectedCategory, and searchQuery
  let filtered = PRODUCTS.filter(p => {
    // Need filter
    if (store.selectedNeed !== "all" && p.needCategory !== store.selectedNeed) {
      return false;
    }
    // Category filter
    if (store.selectedCategory !== "all" && p.category !== store.selectedCategory) {
      return false;
    }
    // Search query
    if (store.searchQuery.trim()) {
      const q = store.searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.shortDesc.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchPlatform = p.platforms.some(pl => pl.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchCat && !matchPlatform) {
        return false;
      }
    }
    return true;
  });

  // Sorting
  if (store.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (store.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (store.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return `
    <section class="section-wrapper alt-bg" id="discovery-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header-block">
          <div>
            <span class="section-label-tag">CATALOG DISPATCH MATRIX</span>
            <h2 class="section-heading-title">Explore by specialized need</h2>
            <p class="section-subtext">
              Targeted digital tooling filtered by engineering domain, operational requirements, and deployment scope.
            </p>
          </div>
          <div class="mono" style="font-size: 0.8rem; color: var(--text-muted);">
            SHOWING: <strong style="color: var(--accent-lime);">${filtered.length}</strong> / ${PRODUCTS.length} PACKAGES
          </div>
        </div>

        <!-- Interactive Filter Toolbar -->
        <div class="discovery-toolbar">
          <!-- Need Navigation Tabs -->
          <div class="discovery-tabs" role="tablist">
            ${NEEDS.map(n => {
              const isActive = store.selectedNeed === n.id;
              return `
                <button 
                  class="discovery-tab-btn ${isActive ? 'active' : ''}" 
                  data-need="${n.id}" 
                  role="tab" 
                  aria-selected="${isActive}"
                  title="${n.desc}"
                >
                  ${n.label}
                </button>
              `;
            }).join("")}
          </div>

          <!-- Secondary Filter Row: Search & Category Filter -->
          <div class="discovery-filter-row">
            <div class="discovery-search-input-wrap">
              <svg class="discovery-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                class="discovery-search-input" 
                id="discovery-search-field"
                placeholder="Filter by package name, architecture, platform..." 
                value="${store.searchQuery}"
              />
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
              <!-- Category Select -->
              <div class="discovery-sort-wrap">
                <span>Category:</span>
                <select class="discovery-select" id="discovery-cat-select">
                  ${CATEGORIES.map(c => `
                    <option value="${c.id}" ${store.selectedCategory === c.id ? "selected" : ""}>
                      ${c.name}
                    </option>
                  `).join("")}
                </select>
              </div>

              <!-- Sort Select -->
              <div class="discovery-sort-wrap">
                <span>Sort:</span>
                <select class="discovery-select" id="discovery-sort-select">
                  <option value="featured" ${store.sortBy === "featured" ? "selected" : ""}>Featured First</option>
                  <option value="price-low" ${store.sortBy === "price-low" ? "selected" : ""}>Price: Low to High</option>
                  <option value="price-high" ${store.sortBy === "price-high" ? "selected" : ""}>Price: High to Low</option>
                  <option value="rating" ${store.sortBy === "rating" ? "selected" : ""}>Highest Rated</option>
                </select>
              </div>

              <!-- Reset Filters -->
              ${(store.selectedCategory !== "all" || store.selectedNeed !== "all" || store.searchQuery) ? `
                <button class="btn btn-secondary btn-sm mono" id="discovery-reset-filters" style="font-size: 0.75rem;">
                  ✕ Clear Filters
                </button>
              ` : ""}
            </div>
          </div>
        </div>

        <!-- Filtered Product Grid -->
        <div class="product-grid" id="discovery-products-grid">
          ${filtered.length === 0 ? `
            <div class="empty-state-card">
              <div style="width: 48px; height: 48px; margin: 0 auto 1rem; border-radius: var(--radius-xs); background: var(--bg-canvas); border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.4rem;">No matching packages found</h4>
              <p style="font-size: 0.85rem; max-width: 400px; margin: 0 auto 1.25rem;">
                No tools match your current filter parameters: "${store.searchQuery || store.selectedNeed}".
              </p>
              <button class="btn btn-primary btn-sm mono" id="empty-state-reset-btn">
                Reset All Filters
              </button>
            </div>
          ` : filtered.map(product => {
            const isWishlisted = store.isInWishlist(product.id);
            return `
              <div class="product-card" data-product-id="${product.id}">
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

                  <div class="product-platform-badges">
                    ${product.platforms.map(p => `
                      <span class="platform-pill">${p.substring(0, 3).toUpperCase()}</span>
                    `).join("")}
                  </div>
                </div>

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
                      >
                        Specs
                      </button>
                      <button 
                        class="btn btn-primary btn-sm" 
                        data-action="add-cart" 
                        data-id="${product.id}"
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
