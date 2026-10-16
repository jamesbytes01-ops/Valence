import { PRODUCTS, FORMAT_INR } from "../data/products.js";

export function renderSearchModal(query = "") {
  const q = query.trim().toLowerCase();
  const results = q ? PRODUCTS.filter(p => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.platforms.some(pl => pl.toLowerCase().includes(q)) ||
      p.licenseType.toLowerCase().includes(q)
    );
  }) : PRODUCTS.slice(0, 5); // default show top 5 when empty

  return `
    <div class="modal-overlay open" id="global-search-modal">
      <div class="modal-card" style="max-width: 620px;">
        <div style="padding: 1.25rem; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 0.75rem; background: var(--bg-surface-elevated);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-lime);">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            id="modal-search-input" 
            placeholder="Type tool name, category, platform (e.g. IDE, security, linux)..." 
            value="${query}"
            autofocus
            style="width: 100%; background: none; border: none; outline: none; font-size: 1.05rem; color: var(--text-high); font-family: var(--font-sans);"
          />
          <button class="modal-close-btn" id="search-close-btn" aria-label="Close search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div style="max-height: 400px; overflow-y: auto; padding: 0.75rem;">
          <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); padding: 0.5rem 0.75rem;">
            ${q ? `MATCHING RESULTS (${results.length})` : 'POPULAR SOFTWARE DEPLOYMENTS'}
          </div>

          ${results.length === 0 ? `
            <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
              No packages match "${query}". Try searching "security", "compiler", or "e-books".
            </div>
          ` : results.map(product => `
            <div 
              class="mega-cat-card search-result-item" 
              data-id="${product.id}"
              style="padding: 0.75rem; border-radius: var(--radius-xs); cursor: pointer; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle);"
            >
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div class="mega-cat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <strong style="font-size: 0.9rem; color: var(--text-high);">${product.name}</strong>
                    <span class="badge-mono" style="font-size: 0.62rem;">${product.category}</span>
                  </div>
                  <div class="mono" style="font-size: 0.72rem; color: var(--text-muted);">
                    ${product.platforms.join(" • ")} &bull; ${product.licenseType}
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span class="mono" style="font-weight: 700; color: var(--accent-lime); font-size: 0.95rem;">
                  ${FORMAT_INR(product.price)}
                </span>
                <button class="btn btn-secondary btn-sm" data-action="quick-view" data-id="${product.id}">
                  Specs
                </button>
              </div>
            </div>
          `).join("")}
        </div>

        <div style="padding: 0.6rem 1.25rem; background: var(--bg-canvas); border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">
          <span>ESC to close &bull; Click to view package specs</span>
          <span style="color: var(--accent-lime);">PRESS ENTER TO SELECT</span>
        </div>
      </div>
    </div>
  `;
}
