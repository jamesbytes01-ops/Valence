import { PRODUCTS, FORMAT_INR } from "../data/products.js";

export function renderEbooksPage() {
  const ebooks = PRODUCTS.filter(p => p.category === "E-books & Guides");

  return `
    <div class="page-container">
      <div class="page-hero-banner">
        <div class="container">
          <h1 class="page-hero-title">Technical E-books &amp; Architecture Guides</h1>
          <p class="page-hero-desc">
            In-depth compendiums on distributed consensus, eBPF telemetry, high-volume payment pipelines, and multi-region chaos engineering. DRM-free with runnable code repositories.
          </p>
        </div>
      </div>

      <section class="section-wrapper">
        <div class="container">
          <div style="display: flex; flex-direction: column; gap: 2.5rem;">
            ${ebooks.map(book => `
              <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); overflow: hidden; display: grid; grid-template-columns: 340px 1fr; gap: 2rem; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
                <div style="height: 100%; min-height: 280px; position: relative; overflow: hidden; background: #f8fafc;">
                  <img src="${book.imageUrl}" alt="${book.name}" style="width: 100%; height: 100%; object-fit: cover;" />
                  <span class="badge-mono lime" style="position: absolute; top: 12px; left: 12px;">
                    ${book.badge}
                  </span>
                </div>

                <div style="padding: 2rem 2rem 2rem 0; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                      <span class="product-category-label">${book.category}</span>
                      <span class="mono" style="font-size: 0.75rem; color: var(--accent-amber);">★ ${book.rating} (${book.reviewCount} verified reviews)</span>
                    </div>

                    <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 0.6rem; color: var(--text-high);">
                      ${book.name}
                    </h2>

                    <p style="font-size: 0.95rem; color: var(--text-medium); line-height: 1.6; margin-bottom: 1.25rem;">
                      ${book.fullDesc}
                    </p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem;">
                      ${book.features.slice(0, 4).map(f => `
                        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-medium);">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-lime)" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>${f}</span>
                        </div>
                      `).join("")}
                    </div>
                  </div>

                  <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle);">
                    <div>
                      <span class="mono" style="font-size: 1.6rem; font-weight: 800; color: var(--text-high);">
                        ${FORMAT_INR(book.price)}
                      </span>
                      ${book.previousPrice ? `
                        <span class="mono" style="font-size: 0.85rem; color: var(--text-muted); text-decoration: line-through; margin-left: 0.5rem;">
                          ${FORMAT_INR(book.previousPrice)}
                        </span>
                      ` : ""}
                      <span class="mono" style="font-size: 0.75rem; color: var(--accent-lime); display: block;">
                        DRM-FREE &bull; PDF + EPUB + GIT REPO
                      </span>
                    </div>

                    <div style="display: flex; gap: 0.6rem;">
                      <a href="#/product/${book.id}" class="btn btn-secondary">
                        View Details
                      </a>
                      <button class="btn btn-primary" data-action="add-cart" data-id="${book.id}">
                        Get Instant Digital Access
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
