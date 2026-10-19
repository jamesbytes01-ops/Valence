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

      <!-- DRM-Free Digital Asset Guarantees -->
      <section class="section-wrapper alt-bg">
        <div class="container">
          <div class="section-header-block">
            <div>
              <h2 class="section-heading-title">DRM-Free Digital Asset Standards</h2>
              <p class="section-subtext">
                Permanent ownership with zero restrictive reader apps, private GitHub code repositories, and vector architecture schematics
              </p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 1rem;">
            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-lime); font-weight: 700; display: block; margin-bottom: 0.5rem;">FORMAT 01</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Vector PDF &amp; EPUB</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Crisp typographic vector layouts optimized for high-density 4K displays, tablets, and e-ink e-readers with zero DRM encryption.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700; display: block; margin-bottom: 0.5rem;">FORMAT 02</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Executable Sandboxes</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Every chapter includes companion Go, Rust, and Python Docker containers demonstrating distributed consensus and memory layout principles.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-amber); font-weight: 700; display: block; margin-bottom: 0.5rem;">FORMAT 03</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Lifetime Free Errata</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                As cloud primitives and kernel subsystems evolve, updated revision releases are automatically delivered to your License Vault.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Compendiums FAQ -->
      <section class="section-wrapper">
        <div class="container">
          <div class="section-header-block" style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem;">
            <h2 class="section-heading-title" style="margin-bottom: 0.5rem;">Technical Compendiums FAQ</h2>
            <p class="section-subtext">
              Common questions regarding e-book formats, code licensing, and team sharing
            </p>
          </div>

          <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Can I read these compendiums on Kindle or Apple Books?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. Downloads include standard DRM-free .epub and .pdf files compatible with Kindle, Apple Books, Kobo, and desktop PDF viewers.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 1.25rem 1.5rem;">
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-high);">
                Can our engineering team use the included code sandboxes in our proprietary codebase?
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Yes. All accompanying code sandboxes and consensus implementations are licensed under permissive MIT/Apache-2.0 terms for commercial use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Engineering Team Library Banner -->
      <section class="section-wrapper" style="padding-top: 1rem;">
        <div class="container">
          <div style="background: linear-gradient(135deg, #091326 0%, #0d1e3d 100%); border-radius: var(--radius-sm); padding: 3rem 2.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
            <div>
              <span class="badge-mono lime" style="margin-bottom: 0.75rem;">TEAM LIBRARY PASS</span>
              <h3 style="font-size: 1.85rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">
                Distribute technical literature across your engineering teams
              </h3>
              <p style="color: #94a3b8; font-size: 0.95rem; max-width: 540px; line-height: 1.5;">
                Equip your senior architects and junior engineers with canonical systems references, architecture blueprints, and consensus sandboxes.
              </p>
            </div>
            <a href="#/deals" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
              Explore Bundle Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}
