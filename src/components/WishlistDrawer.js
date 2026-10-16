import { store } from "../state/store.js";
import { PRODUCTS, FORMAT_INR } from "../data/products.js";

export function renderWishlistDrawer(isOpen = false) {
  const wishlistedProducts = PRODUCTS.filter(p => store.wishlist.includes(p.id));

  return `
    <div class="drawer-overlay ${isOpen ? 'open' : ''}" id="wishlist-drawer-overlay"></div>
    <aside class="drawer-panel ${isOpen ? 'open' : ''}" id="wishlist-drawer-panel" aria-label="Wishlist Drawer">
      <!-- Header -->
      <div class="drawer-header">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-danger);">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h3 style="font-size: 1.1rem; font-weight: 700;">Saved Packages</h3>
          <span class="badge-mono" style="font-size: 0.68rem;">${wishlistedProducts.length} ITEMS</span>
        </div>
        <button class="modal-close-btn" id="wishlist-close-btn" aria-label="Close wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Content -->
      <div class="drawer-content">
        ${wishlistedProducts.length === 0 ? `
          <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
            <div style="width: 50px; height: 50px; margin: 0 auto 1rem; border-radius: 50%; background: var(--bg-canvas); border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h4 style="font-size: 1rem; color: var(--text-high); margin-bottom: 0.35rem;">Wishlist is empty</h4>
            <p style="font-size: 0.8rem; margin-bottom: 1.5rem;">Save software, utilities, or e-books for future deployment.</p>
            <button class="btn btn-secondary btn-sm mono" id="wishlist-explore-btn">
              Explore Products &rarr;
            </button>
          </div>
        ` : wishlistedProducts.map(product => `
          <div class="cart-item-card">
            <div class="cart-item-visual">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>

            <div class="cart-item-details">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h4 class="cart-item-title">${product.name}</h4>
                <button 
                  class="btn-sm" 
                  data-action="wishlist-remove" 
                  data-id="${product.id}"
                  style="color: var(--text-muted); padding: 0;"
                  title="Remove from wishlist"
                >
                  ✕
                </button>
              </div>

              <div class="cart-item-license">${product.category} &bull; ${product.licenseType}</div>

              <div class="cart-item-price-row">
                <span class="mono" style="font-weight: 700; color: var(--text-high);">
                  ${FORMAT_INR(product.price)}
                </span>

                <button class="btn btn-primary btn-sm" data-action="wishlist-to-cart" data-id="${product.id}">
                  Move to Cart
                </button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Footer -->
      ${wishlistedProducts.length > 0 ? `
        <div class="drawer-footer">
          <button class="btn btn-secondary" id="wishlist-add-all-btn" style="width: 100%;">
            Move All Items to Cart
          </button>
        </div>
      ` : ""}
    </aside>
  `;
}
