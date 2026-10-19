import { store } from "../state/store.js";
import { CATEGORIES } from "../data/products.js";

export function renderHeader(currentRoute = "#/") {
  const { count: cartCount } = store.getCartCalculations();
  const wishlistCount = store.wishlist.length;
  const vaultCount = store.vault.length;

  return `
    <!-- Main Sticky Header -->
    <header class="site-header" id="site-header">
      <div class="container header-container">
        <!-- Brand Wordmark & Geometric Symbol -->
        <a href="#/" class="brand-link" id="brand-home-link" aria-label="Valence Digital Home">
          <div class="brand-symbol">
            <svg viewBox="0 0 24 24">
              <polygon points="12,2 22,8.5 22,17.5 12,22 2,17.5 2,8.5" fill="none" stroke="currentColor"/>
              <circle cx="12" cy="12" r="3.5" fill="var(--accent-lime)"/>
            </svg>
          </div>
          <div class="brand-text">
            <span class="brand-name">VALENCE<span> IO</span></span>
            <span class="brand-tagline-sub">ENGINEERED SOFTWARE &amp; LICENSES</span>
          </div>
        </a>

        <!-- Desktop Navigation: Streamlined Multi-Page Links (Home via Logo) -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-menu">
            <li class="nav-item has-mega">
              <a href="#/software" class="nav-link ${currentRoute === '#/software' ? 'active' : ''}" id="nav-explore">
                Explore
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>

              <!-- Mega Menu Dropdown -->
              <div class="mega-menu-wrapper">
                <div class="mega-menu-card">
                  <div class="mega-menu-col">
                    <h4>Marketplace Department Portals</h4>
                    <div class="mega-cat-grid">
                      <a href="#/software" class="mega-cat-card">
                        <div class="mega-cat-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                          </svg>
                        </div>
                        <div class="mega-cat-info">
                          <h5>Developer Tools</h5>
                          <p>Compilers, systems IDEs, APIs, and debuggers</p>
                        </div>
                      </a>

                      <a href="#/security" class="mega-cat-card">
                        <div class="mega-cat-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <div class="mega-cat-info">
                          <h5>Antivirus &amp; Security</h5>
                          <p>AI Antivirus, rootkit shields, and firewalls</p>
                        </div>
                      </a>

                      <a href="#/productivity" class="mega-cat-card">
                        <div class="mega-cat-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                          </svg>
                        </div>
                        <div class="mega-cat-info">
                          <h5>Productivity &amp; Data</h5>
                          <p>Workflow pipelines and schema converters</p>
                        </div>
                      </a>

                      <a href="#/ebooks" class="mega-cat-card">
                        <div class="mega-cat-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                          </svg>
                        </div>
                        <div class="mega-cat-info">
                          <h5>E-books &amp; Guides</h5>
                          <p>Distributed consensus engineering literature</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="mega-spotlight-panel">
                    <div>
                      <span class="badge-mono lime" style="margin-bottom: 0.6rem;">HOT DEPLOYMENT</span>
                      <h5>Zero-Telemetry Systems</h5>
                      <p>All software and antivirus binaries undergo local offline cryptographic key signing.</p>
                    </div>
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem; flex-wrap: wrap;">
                      <a href="#/security" class="btn btn-primary btn-sm">
                        Inspect Antivirus &rarr;
                      </a>
                      <a href="#/operations" class="btn btn-secondary btn-sm">
                        Operations &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a href="#/software" class="nav-link ${currentRoute === '#/software' ? 'active' : ''}">
                Software
              </a>
            </li>

            <li class="nav-item">
              <a href="#/security" class="nav-link ${currentRoute === '#/security' ? 'active' : ''}">
                Security &amp; Antivirus
              </a>
            </li>

            <li class="nav-item">
              <a href="#/productivity" class="nav-link ${currentRoute === '#/productivity' ? 'active' : ''}">
                Productivity
              </a>
            </li>

            <li class="nav-item">
              <a href="#/ebooks" class="nav-link ${currentRoute === '#/ebooks' ? 'active' : ''}">
                E-books
              </a>
            </li>

            <li class="nav-item">
              <a href="#/deals" class="nav-link ${currentRoute === '#/deals' ? 'active' : ''}">
                Deals <span class="nav-badge-deal">SAVE 35%</span>
              </a>
            </li>

            <li class="nav-item">
              <a href="#/operations" class="nav-link ${currentRoute.startsWith('#/operations') ? 'active' : ''}">
                Operations
              </a>
            </li>
          </ul>
        </nav>

        <!-- Header Actions: Search (Icon only), Vault, Wishlist, Cart -->
        <div class="header-actions">
          <button class="action-icon-btn" id="header-search-btn" title="Search software, tools &amp; licenses (Ctrl + K)" aria-label="Search Catalog">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <a href="#/vault" class="action-icon-btn" id="header-vault-btn" title="My Purchased Licenses &amp; Keys" aria-label="License Vault">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 2l-2 2m-1-1l-3 3m5 8v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            </svg>
            ${vaultCount > 0 ? `<span class="badge-count">${vaultCount}</span>` : ""}
          </a>

          <button class="action-icon-btn" id="header-wishlist-btn" title="Wishlist" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            ${wishlistCount > 0 ? `<span class="badge-count">${wishlistCount}</span>` : ""}
          </button>

          <button class="action-icon-btn" id="header-cart-btn" title="Cart" aria-label="Shopping Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            ${cartCount > 0 ? `<span class="badge-count">${cartCount}</span>` : ""}
          </button>

          <!-- Mobile Hamburger -->
          <button class="action-icon-btn mobile-menu-btn" id="mobile-menu-trigger" aria-label="Open Navigation Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `;
}
