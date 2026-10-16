import { store } from "../state/store.js";
import { FORMAT_INR } from "../data/products.js";

export function renderCartDrawer(isOpen = false) {
  const { subtotal, discount, tax, total, count } = store.getCartCalculations();

  return `
    <div class="drawer-overlay ${isOpen ? 'open' : ''}" id="cart-drawer-overlay"></div>
    <aside class="drawer-panel ${isOpen ? 'open' : ''}" id="cart-drawer-panel" aria-label="Shopping Cart Drawer">
      <!-- Drawer Header -->
      <div class="drawer-header">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <h3 style="font-size: 1.1rem; font-weight: 700;">Cart Manifest</h3>
          <span class="badge-mono lime" style="font-size: 0.68rem;">${count} ITEMS</span>
        </div>
        <button class="modal-close-btn" id="cart-close-btn" aria-label="Close cart">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Drawer Content -->
      <div class="drawer-content">
        ${store.cart.length === 0 ? `
          <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
            <div style="width: 50px; height: 50px; margin: 0 auto 1rem; border-radius: 50%; background: var(--bg-canvas); border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <h4 style="font-size: 1rem; color: var(--text-high); margin-bottom: 0.35rem;">Cart is empty</h4>
            <p style="font-size: 0.8rem; margin-bottom: 1.5rem;">Select developer utilities, security tools, or e-books to proceed.</p>
            <button class="btn btn-secondary btn-sm mono" id="cart-empty-explore-btn">
              Explore Products &rarr;
            </button>
          </div>
        ` : store.cart.map(item => `
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
                <h4 class="cart-item-title">${item.product.name}</h4>
                <button 
                  class="btn-sm" 
                  data-action="cart-remove" 
                  data-id="${item.productId}" 
                  data-license="${item.licenseOption}"
                  style="color: var(--text-muted); padding: 0;"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>

              <div class="cart-item-license">${item.licenseOption}</div>

              <div class="cart-item-price-row">
                <span class="mono" style="font-weight: 700; color: var(--text-high);">
                  ${FORMAT_INR(item.price * item.quantity)}
                </span>

                <div class="qty-control">
                  <button 
                    class="qty-btn" 
                    data-action="cart-qty" 
                    data-delta="-1" 
                    data-id="${item.productId}" 
                    data-license="${item.licenseOption}"
                    title="Decrease quantity"
                  >-</button>
                  <span class="qty-val">${item.quantity}</span>
                  <button 
                    class="qty-btn" 
                    data-action="cart-qty" 
                    data-delta="1" 
                    data-id="${item.productId}" 
                    data-license="${item.licenseOption}"
                    title="Increase quantity"
                  >+</button>
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Drawer Footer: Promo & Calculations -->
      ${store.cart.length > 0 ? `
        <div class="drawer-footer">
          <!-- Promo Code Input -->
          <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
            <input 
              type="text" 
              class="discovery-search-input mono" 
              id="promo-input-field" 
              placeholder="Coupon (e.g. TECH20)" 
              value="${store.promoCode || ''}"
              style="padding: 0.4rem 0.6rem; font-size: 0.78rem;"
            />
            <button class="btn btn-secondary btn-sm mono" id="promo-apply-btn" style="padding: 0.4rem 0.8rem;">
              Apply
            </button>
          </div>

          <!-- Price Calculations -->
          <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.82rem; margin-bottom: 1.25rem;">
            <div style="display: flex; justify-content: space-between; color: var(--text-medium);">
              <span>Subtotal:</span>
              <span class="mono">${FORMAT_INR(subtotal)}</span>
            </div>

            ${discount > 0 ? `
              <div style="display: flex; justify-content: space-between; color: var(--accent-lime);">
                <span>Discount (${store.promoCode}):</span>
                <span class="mono">- ${FORMAT_INR(discount)}</span>
              </div>
            ` : ""}

            <div style="display: flex; justify-content: space-between; color: var(--text-medium);">
              <span>Estimated 18% GST:</span>
              <span class="mono">${FORMAT_INR(tax)}</span>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 700; color: var(--text-high); padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);">
              <span>Total:</span>
              <span class="mono" style="color: var(--accent-lime);">${FORMAT_INR(total)}</span>
            </div>
          </div>

          <button class="btn btn-primary" id="cart-proceed-checkout-btn" style="width: 100%;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Proceed to Instant Checkout
          </button>
        </div>
      ` : ""}
    </aside>
  `;
}
