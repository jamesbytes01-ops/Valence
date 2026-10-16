import { FORMAT_INR } from "../data/products.js";
import { store } from "../state/store.js";
import { getProductArtwork } from "../utils/productVisuals.js";

export function renderProductModal() {
  const product = store.selectedProduct;
  if (!product) return "";

  const isWishlisted = store.isInWishlist(product.id);

  return `
    <div class="modal-overlay open" id="product-detail-modal">
      <div class="modal-card">
        <!-- Modal Header -->
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="badge-mono lime">${product.category}</span>
            <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">${product.version}</span>
          </div>
          <button class="modal-close-btn" id="modal-close-btn" aria-label="Close modal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <!-- Left Visual Art Preview -->
            <div style="border: 1px solid var(--border-medium); border-radius: var(--radius-xs); overflow: hidden; background: #080A0F; height: 220px; display: flex; align-items: center; justify-content: center;">
              ${getProductArtwork(product.visualType, product.accentColor)}
            </div>

            <!-- Right Key Info -->
            <div style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
                  <span class="badge-mono cyan">${product.badge}</span>
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-amber);">★ ${product.rating} (${product.reviewCount} reviews)</span>
                </div>
                <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem;">${product.name}</h2>
                <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5;">${product.shortDesc}</p>
              </div>

              <!-- Price Box & License Selector -->
              <div style="background: var(--bg-canvas); border: 1px solid var(--border-subtle); padding: 1rem; border-radius: var(--radius-xs);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.75rem;">
                  <span class="mono" style="font-size: 1.5rem; font-weight: 700; color: var(--text-high);">${FORMAT_INR(product.price)}</span>
                  ${product.previousPrice ? `<span class="mono" style="font-size: 0.85rem; color: var(--text-muted); text-decoration: line-through;">${FORMAT_INR(product.previousPrice)}</span>` : ""}
                </div>

                <div style="display: flex; gap: 0.5rem;">
                  <button class="btn btn-primary" id="modal-add-to-cart" data-id="${product.id}" style="flex-grow: 1;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add to Cart
                  </button>
                  <button 
                    class="action-icon-btn ${isWishlisted ? 'active' : ''}" 
                    id="modal-toggle-wishlist" 
                    data-id="${product.id}"
                    style="height: auto; width: 44px;"
                    title="Toggle Wishlist"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical Tabs / Specifications Grid -->
          <div style="background: var(--bg-canvas); border: 1px solid var(--border-medium); border-radius: var(--radius-xs); padding: 1.25rem;">
            <h4 class="mono" style="font-size: 0.8rem; color: var(--accent-lime); text-transform: uppercase; margin-bottom: 0.75rem;">
              TECHNICAL VERIFICATION &amp; METRICS
            </h4>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 0.82rem;">
              <div>
                <span class="mono" style="color: var(--text-muted); font-size: 0.72rem; display: block;">TARGET ARCHITECTURE</span>
                <strong class="mono" style="color: var(--text-high);">${product.architecture}</strong>
              </div>
              <div>
                <span class="mono" style="color: var(--text-muted); font-size: 0.72rem; display: block;">DOWNLOAD SIZE</span>
                <strong class="mono" style="color: var(--text-high);">${product.downloadSize}</strong>
              </div>
              <div>
                <span class="mono" style="color: var(--text-muted); font-size: 0.72rem; display: block;">RELEASE DATE</span>
                <strong class="mono" style="color: var(--text-high);">${product.releaseDate}</strong>
              </div>
              <div>
                <span class="mono" style="color: var(--text-muted); font-size: 0.72rem; display: block;">LICENSE MODEL</span>
                <strong class="mono" style="color: var(--text-high);">${product.licenseType}</strong>
              </div>
            </div>

            <!-- SHA-256 Checksum -->
            <div style="margin-top: 1rem; padding: 0.65rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); font-family: var(--font-mono); font-size: 0.72rem; word-break: break-all;">
              <span style="color: var(--text-muted); display: block; margin-bottom: 2px;">SHA-256 HASH VERIFICATION:</span>
              <span style="color: var(--accent-cyan);">${product.sha256Checksum}</span>
            </div>

            <!-- System Requirements -->
            <div style="margin-top: 1rem;">
              <h5 class="mono" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.4rem;">SYSTEM REQUIREMENTS:</h5>
              <div style="font-size: 0.8rem; color: var(--text-medium); display: flex; flex-direction: column; gap: 0.25rem;">
                <div>• OS: ${product.systemRequirements.os}</div>
                <div>• Memory: ${product.systemRequirements.ram}</div>
                <div>• Processor: ${product.systemRequirements.cpu}</div>
                <div>• Storage: ${product.systemRequirements.storage}</div>
              </div>
            </div>

            <!-- What's Included -->
            <div style="margin-top: 1rem;">
              <h5 class="mono" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.4rem;">INCLUDED IN PACKAGE:</h5>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.8rem; color: var(--text-medium);">
                ${product.whatIsIncluded.map(item => `
                  <li style="display: flex; gap: 0.5rem; align-items: center;">
                    <span style="color: var(--accent-lime); font-weight: bold;">✓</span>
                    <span>${item}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
