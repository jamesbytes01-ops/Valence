import { PRODUCTS, FORMAT_INR } from "../data/products.js";

export function renderProductDetailPage(productId) {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  return `
    <div class="page-container">
      <div class="container" style="padding-top: 2.5rem; padding-bottom: 4rem;">
        <!-- Breadcrumb Navigation -->
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <a href="#/" style="color: var(--text-medium);">Home</a>
          <span>/</span>
          <a href="#/software" style="color: var(--text-medium);">${product.category}</a>
          <span>/</span>
          <span style="color: var(--text-high); font-weight: 600;">${product.name}</span>
        </div>

        <!-- Main Product Layout Grid -->
        <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 3rem; margin-bottom: 3rem; align-items: start;">
          <!-- Left: High-Resolution Real Image Container -->
          <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
            <div style="height: 380px; position: relative; background: #f8fafc; overflow: hidden;">
              <img src="${product.imageUrl}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" />
              <span class="badge-mono lime" style="position: absolute; top: 16px; left: 16px; font-size: 0.8rem;">
                ${product.badge}
              </span>
            </div>

            <!-- Platform & Hash strip -->
            <div style="padding: 1rem 1.25rem; background: var(--bg-surface-elevated); border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; gap: 0.4rem;">
                ${product.platforms.map(p => `
                  <span class="platform-pill" style="background: #0f172a; color: #ffffff;">${p}</span>
                `).join("")}
              </div>
              <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">
                VERSION: ${product.version}
              </span>
            </div>
          </div>

          <!-- Right: Product Purchase Details -->
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                <span class="product-category-label">${product.category}</span>
                <span class="mono" style="font-size: 0.8rem; color: var(--accent-amber);">★ ${product.rating} (${product.reviewCount} customer reviews)</span>
              </div>

              <h1 style="font-size: 2.3rem; font-weight: 800; color: var(--text-high); margin-bottom: 0.75rem;">
                ${product.name}
              </h1>

              <p style="font-size: 1.05rem; color: var(--text-medium); line-height: 1.6;">
                ${product.fullDesc}
              </p>
            </div>

            <!-- Pricing & Action Box -->
            <div style="background: #ffffff; border: 1px solid var(--border-medium); border-radius: var(--radius-sm); padding: 1.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.05);">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.75rem;">
                <div>
                  <span class="mono" style="font-size: 2rem; font-weight: 800; color: var(--text-high);">
                    ${FORMAT_INR(product.price)}
                  </span>
                  ${product.previousPrice ? `
                    <span class="mono" style="font-size: 1rem; color: var(--text-muted); text-decoration: line-through; margin-left: 0.6rem;">
                      ${FORMAT_INR(product.previousPrice)}
                    </span>
                  ` : ""}
                </div>
                <span class="badge-mono lime">INCLUDES 18% GST</span>
              </div>

              <div class="product-license-tag" style="margin-bottom: 1.25rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>${product.licenseType}</span>
              </div>

              <div style="display: flex; gap: 0.75rem;">
                <button class="btn btn-primary" data-action="add-cart" data-id="${product.id}" style="flex: 1; padding: 0.85rem 1.5rem; font-size: 1rem;">
                  Add to Cart (${FORMAT_INR(product.price)})
                </button>
              </div>
            </div>

            <!-- Features Checklist -->
            <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem;">
              <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem;">Key Capabilities</h4>
              <div style="display: flex; flex-direction: column; gap: 0.45rem;">
                ${product.features.map(f => `
                  <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; color: var(--text-medium);">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-lime)" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>${f}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>

        <!-- Technical Specification Matrix Block -->
        <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 2rem; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 1.25rem;">Technical Specifications &amp; Verification</h3>

          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 1.5rem;">
            <div>
              <span class="mono" style="font-size: 0.75rem; color: var(--text-muted); display: block;">TARGET ARCHITECTURE</span>
              <strong class="mono" style="font-size: 0.95rem; color: var(--text-high);">${product.architecture}</strong>
            </div>
            <div>
              <span class="mono" style="font-size: 0.75rem; color: var(--text-muted); display: block;">DOWNLOAD PACKAGE SIZE</span>
              <strong class="mono" style="font-size: 0.95rem; color: var(--text-high);">${product.downloadSize}</strong>
            </div>
            <div>
              <span class="mono" style="font-size: 0.75rem; color: var(--text-muted); display: block;">LATEST RELEASE</span>
              <strong class="mono" style="font-size: 0.95rem; color: var(--text-high);">${product.releaseDate}</strong>
            </div>
            <div>
              <span class="mono" style="font-size: 0.75rem; color: var(--text-muted); display: block;">AUTHENTICATION</span>
              <strong class="mono" style="font-size: 0.95rem; color: var(--accent-lime);">OFFLINE ED25519</strong>
            </div>
          </div>

          <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); padding: 0.85rem 1rem; margin-bottom: 1.5rem;">
            <span class="mono" style="font-size: 0.72rem; color: var(--text-muted); display: block;">SHA-256 BINARY CHECKSUM:</span>
            <span class="mono" style="font-size: 0.82rem; color: var(--accent-cyan); word-break: break-all;">${product.sha256Checksum}</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
              <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">System Requirements</h4>
              <div style="font-size: 0.85rem; color: var(--text-medium); display: flex; flex-direction: column; gap: 0.35rem;">
                <div>• <strong>Operating System:</strong> ${product.systemRequirements.os}</div>
                <div>• <strong>System Memory:</strong> ${product.systemRequirements.ram}</div>
                <div>• <strong>Processor:</strong> ${product.systemRequirements.cpu}</div>
                <div>• <strong>Disk Space:</strong> ${product.systemRequirements.storage}</div>
              </div>
            </div>

            <div>
              <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">Package Inclusions</h4>
              <div style="font-size: 0.85rem; color: var(--text-medium); display: flex; flex-direction: column; gap: 0.35rem;">
                ${product.whatIsIncluded.map(item => `
                  <div>✓ ${item}</div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
