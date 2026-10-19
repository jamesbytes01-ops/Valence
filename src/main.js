import "./style.css";
import { store } from "./state/store.js";
import { PRODUCTS, FORMAT_INR } from "./data/products.js";
import { renderHeader } from "./components/Header.js";
import { renderFooter } from "./components/Footer.js";
import { renderCartDrawer } from "./components/CartDrawer.js";
import { renderCheckoutModal, triggerConfetti } from "./components/CheckoutModal.js";
import { renderWishlistDrawer } from "./components/WishlistDrawer.js";
import { renderSearchModal } from "./components/SearchModal.js";

// Pages
import { renderHomePage } from "./pages/HomePage.js";
import { renderSoftwarePage } from "./pages/SoftwarePage.js";
import { renderSecurityPage, setSecuritySelectedProduct, getSecuritySelectedProduct } from "./pages/SecurityPage.js";
import { renderProductivityPage } from "./pages/ProductivityPage.js";
import { renderEbooksPage } from "./pages/EbooksPage.js";
import { renderDealsPage } from "./pages/DealsPage.js";
import { renderVaultPage } from "./pages/VaultPage.js";
import { renderProductDetailPage } from "./pages/ProductDetailPage.js";
import { renderOperationsPage, setOperationsActiveTab, getOperationsActiveTab } from "./pages/OperationsPage.js";

// Global Modal & Drawer State
let activeModal = null; // 'checkout', 'search'
let isCartOpen = false;
let isWishlistOpen = false;
let checkoutStep = 1;
let checkoutOrderResult = null;
let searchQueryGlobal = "";
let softwareFilter = "all";

// Security spotlight state
let secSelectedSeats = 3;
let secMultiplier = 1;
let secTierLabel = "Standard Pack (3 Devices)";

function getCurrentRoute() {
  const hash = window.location.hash || "#/";
  return hash;
}

function renderApp() {
  const app = document.getElementById("app");
  if (!app) return;

  const route = getCurrentRoute();
  let mainContent = "";

  if (route === "#/" || route === "" || route === "#") {
    mainContent = renderHomePage();
  } else if (route.startsWith("#/product/")) {
    const prodId = route.replace("#/product/", "");
    mainContent = renderProductDetailPage(prodId);
  } else if (route === "#/software") {
    mainContent = renderSoftwarePage(softwareFilter);
  } else if (route === "#/security") {
    mainContent = renderSecurityPage();
  } else if (route === "#/productivity") {
    mainContent = renderProductivityPage();
  } else if (route === "#/ebooks") {
    mainContent = renderEbooksPage();
  } else if (route === "#/deals") {
    mainContent = renderDealsPage();
  } else if (route === "#/vault") {
    mainContent = renderVaultPage();
  } else if (route.startsWith("#/operations")) {
    const urlParams = new URLSearchParams(route.split("?")[1] || "");
    const tab = urlParams.get("tab") || "pgp";
    mainContent = renderOperationsPage(tab);
  } else {
    mainContent = renderHomePage();
  }

  app.innerHTML = `
    <div id="toast-container" class="toast-container"></div>
    
    ${renderHeader(route)}
    <main>
      ${mainContent}
    </main>
    ${renderFooter()}

    <!-- Dynamic Overlays -->
    <div id="modal-container">
      ${activeModal === "checkout" ? renderCheckoutModal(checkoutStep, checkoutOrderResult) : ""}
      ${activeModal === "search" ? renderSearchModal(searchQueryGlobal) : ""}
    </div>

    <!-- Drawers -->
    <div id="drawer-container">
      ${renderCartDrawer(isCartOpen)}
      ${renderWishlistDrawer(isWishlistOpen)}
    </div>
  `;

  bindEvents();
}

function bindEvents() {
  // Sticky header scroll shadow
  window.addEventListener("scroll", () => {
    const header = document.getElementById("site-header");
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }, { passive: true });

  // 1. Brand Logo: Navigate to Homepage & Scroll to Top
  const brandHomeLink = document.getElementById("brand-home-link");
  if (brandHomeLink) {
    brandHomeLink.onclick = (e) => {
      e.preventDefault();
      if (window.location.hash !== "#/" && window.location.hash !== "" && window.location.hash !== "#") {
        window.location.hash = "#/";
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  }

  const footerLogoLink = document.getElementById("footer-logo-link");
  if (footerLogoLink) {
    footerLogoLink.onclick = (e) => {
      e.preventDefault();
      if (window.location.hash !== "#/" && window.location.hash !== "" && window.location.hash !== "#") {
        window.location.hash = "#/";
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  }

  // 2. Header Actions
  const cartBtn = document.getElementById("header-cart-btn");
  if (cartBtn) cartBtn.onclick = () => openCart(true);

  const wishlistBtn = document.getElementById("header-wishlist-btn");
  if (wishlistBtn) wishlistBtn.onclick = () => openWishlist(true);

  const searchBtn = document.getElementById("header-search-btn");
  if (searchBtn) searchBtn.onclick = () => openModal("search");

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-trigger");
  if (mobileMenuBtn) {
    mobileMenuBtn.onclick = () => {
      openModal("search");
    };
  }

  // 2. Hero Interactive Elements (on Home Page)
  const heroGenBtn = document.getElementById("hero-generate-btn");
  if (heroGenBtn) {
    heroGenBtn.onclick = () => {
      const display = document.getElementById("hero-generated-key");
      if (display) {
        const sampleProducts = ["AGIS", "CPHR", "VCTR", "TCIR", "DFRG", "ATLS"];
        const rand = sampleProducts[Math.floor(Math.random() * sampleProducts.length)];
        const newKey = store.generateLicenseKey(rand);
        display.innerText = newKey;
        store.showToast(`Simulated token issued: ${newKey}`, "success");
      }
    };
  }

  const heroCopyBtn = document.getElementById("hero-copy-btn");
  if (heroCopyBtn) {
    heroCopyBtn.onclick = () => {
      const display = document.getElementById("hero-generated-key");
      if (display) {
        navigator.clipboard.writeText(display.innerText).catch(() => {});
        store.showToast("License token copied to clipboard!", "success");
      }
    };
  }

  // 3. Software Page Category Filter Buttons
  document.querySelectorAll(".software-filter-btn").forEach(btn => {
    btn.onclick = () => {
      softwareFilter = btn.getAttribute("data-filter");
      renderApp();
    };
  });

  // 4. Product Action Clicks (Add to Cart)
  document.querySelectorAll('[data-action="add-cart"]').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      store.addToCart(id);
      openCart(true);
    };
  });

  // 5. Operations Page Tab Switching & Interactive Sandbox
  document.querySelectorAll(".op-tab-btn").forEach(btn => {
    btn.onclick = () => {
      const tab = btn.getAttribute("data-op-tab");
      setOperationsActiveTab(tab);
      window.location.hash = `#/operations?tab=${tab}`;
    };
  });

  const copyPgpBtn = document.getElementById("copy-pgp-key-btn");
  if (copyPgpBtn) {
    copyPgpBtn.onclick = () => {
      const block = document.getElementById("raw-pgp-block");
      if (block) {
        navigator.clipboard.writeText(block.innerText).catch(() => {});
        store.showToast("Valence PGP Master Key copied to clipboard", "success");
      }
    };
  }

  const runApiBtn = document.getElementById("run-api-sandbox-btn");
  if (runApiBtn) {
    runApiBtn.onclick = () => {
      const out = document.getElementById("api-sandbox-output");
      if (out) {
        out.innerText = "Dispatching TLS 1.3 request to https://api.valence.io/v1/licenses/issue...\nVerifying Ed25519 token signatures...";
        setTimeout(() => {
          out.innerText = JSON.stringify({
            status: "success",
            timestamp: new Date().toISOString(),
            license_id: "lic_" + Math.random().toString(36).substring(2, 9),
            product: "KernelWorks Studio",
            seats_provisioned: 5,
            ed25519_token: "VKEY-KWST-" + Math.random().toString(36).substring(2, 6).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase(),
            sha256_checksum: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            tax_invoice_number: "VAL-2026-INV-" + Math.floor(1000 + Math.random() * 9000),
            signature_verification: "VALID // SIGNED_BY_0x7F8B92"
          }, null, 2);
          store.showToast("Sandbox API test request succeeded (200 OK)", "success");
        }, 350);
      }
    };
  }

  // 6. Security Page Product Switcher & Multi-Device Tier Selector
  document.querySelectorAll(".sec-tab-btn").forEach(tab => {
    tab.onclick = () => {
      const secId = tab.getAttribute("data-sec-id");
      setSecuritySelectedProduct(secId);
      secMultiplier = 1;
      secSelectedSeats = 3;
      secTierLabel = "Standard Pack (3 Devices)";
      renderApp();
    };
  });

  document.querySelectorAll("#sec-tier-group .tier-option-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("#sec-tier-group .tier-option-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      secSelectedSeats = parseInt(btn.getAttribute("data-seats"), 10);
      secMultiplier = parseFloat(btn.getAttribute("data-multiplier"));
      secTierLabel = btn.getAttribute("data-label");

      const currentSecId = getSecuritySelectedProduct();
      const currentProduct = PRODUCTS.find(p => p.id === currentSecId) || PRODUCTS.find(p => p.id === "aegisroot-antivirus");
      const calculatedPrice = Math.round(currentProduct.price * secMultiplier);
      const priceDisplay = document.getElementById("sec-calc-price");
      if (priceDisplay) {
        priceDisplay.innerText = FORMAT_INR(calculatedPrice);
      }
    };
  });

  const secBuyNowBtn = document.getElementById("sec-buy-now-btn");
  if (secBuyNowBtn) {
    secBuyNowBtn.onclick = () => {
      const id = secBuyNowBtn.getAttribute("data-id");
      store.addToCart(id, `Multi-Device (${secSelectedSeats} Seats - ${secTierLabel})`);
      openCart(true);
    };
  }

  // 6. Cart Drawer Operations
  const cartCloseBtn = document.getElementById("cart-close-btn");
  if (cartCloseBtn) cartCloseBtn.onclick = () => openCart(false);

  const cartOverlay = document.getElementById("cart-drawer-overlay");
  if (cartOverlay) cartOverlay.onclick = () => openCart(false);

  const cartEmptyExplore = document.getElementById("cart-empty-explore-btn");
  if (cartEmptyExplore) {
    cartEmptyExplore.onclick = () => {
      openCart(false);
      window.location.hash = "#/software";
    };
  }

  document.querySelectorAll('[data-action="cart-qty"]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      const license = btn.getAttribute("data-license");
      const delta = parseInt(btn.getAttribute("data-delta"), 10);
      store.updateCartQty(id, license, delta);
    };
  });

  document.querySelectorAll('[data-action="cart-remove"]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      const license = btn.getAttribute("data-license");
      store.removeFromCart(id, license);
    };
  });

  // Promo Code
  const promoApplyBtn = document.getElementById("promo-apply-btn");
  if (promoApplyBtn) {
    promoApplyBtn.onclick = () => {
      const input = document.getElementById("promo-input-field");
      if (input) store.applyPromo(input.value);
    };
  }

  // Proceed to Checkout
  const proceedCheckoutBtn = document.getElementById("cart-proceed-checkout-btn");
  if (proceedCheckoutBtn) {
    proceedCheckoutBtn.onclick = () => {
      openCart(false);
      checkoutStep = 1;
      checkoutOrderResult = null;
      openModal("checkout");
    };
  }

  // 7. Checkout Modal Progression
  const checkoutCloseBtn = document.getElementById("checkout-close-btn");
  if (checkoutCloseBtn) checkoutCloseBtn.onclick = () => openModal(null);

  const step1Form = document.getElementById("checkout-step1-form");
  if (step1Form) {
    step1Form.onsubmit = (e) => {
      e.preventDefault();
      checkoutStep = 2;
      renderApp();
    };
  }

  const backStep1Btn = document.getElementById("checkout-back-step1");
  if (backStep1Btn) {
    backStep1Btn.onclick = () => {
      checkoutStep = 1;
      renderApp();
    };
  }

  // Payment Method selection
  document.querySelectorAll("#checkout-pay-methods .tier-option-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll("#checkout-pay-methods .tier-option-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };
  });

  // Authorize Payment & Generate Instant Digital Licenses
  const authBtn = document.getElementById("checkout-authorize-btn");
  if (authBtn) {
    authBtn.onclick = () => {
      authBtn.innerText = "Provisioning Cryptographic Tokens...";
      authBtn.disabled = true;

      setTimeout(() => {
        const email = document.getElementById("checkout-email")?.value || "engineer@valence.internal";
        const name = document.getElementById("checkout-name")?.value || "Valence Customer";

        const issuedLicenses = store.completeCheckout({ name, email }, "UPI Verified");
        checkoutOrderResult = { licenses: issuedLicenses };
        checkoutStep = 3;
        renderApp();
        triggerConfetti();
      }, 700);
    };
  }

  const checkoutViewVaultBtn = document.getElementById("checkout-view-vault-btn");
  if (checkoutViewVaultBtn) {
    checkoutViewVaultBtn.onclick = () => {
      openModal(null);
      window.location.hash = "#/vault";
    };
  }

  const checkoutFinishBtn = document.getElementById("checkout-finish-btn");
  if (checkoutFinishBtn) {
    checkoutFinishBtn.onclick = () => {
      openModal(null);
      window.location.hash = "#/";
    };
  }

  // 8. License Copy and Download Handlers
  document.querySelectorAll(".copy-lic-btn").forEach(btn => {
    btn.onclick = () => {
      const key = btn.getAttribute("data-key");
      navigator.clipboard.writeText(key).catch(() => {});
      btn.innerText = "COPIED ✓";
      store.showToast(`License token copied: ${key}`, "success");
      setTimeout(() => { btn.innerText = "Copy Key"; }, 2000);
    };
  });

  // Download Installer Simulation
  document.querySelectorAll(".download-installer-sim-btn").forEach(btn => {
    btn.onclick = () => {
      const prodName = btn.getAttribute("data-name") || "Software";
      btn.innerText = "Downloading Binary (42%)...";
      store.showToast(`Initiating verified download for ${prodName}...`, "info");
      setTimeout(() => {
        btn.innerText = "Verifying SHA-256...";
      }, 900);
      setTimeout(() => {
        btn.innerText = "Download Complete ✓";
        store.showToast(`SHA-256 integrity match! ${prodName} binary saved.`, "success");
        setTimeout(() => {
          btn.innerText = "Download Installer (.exe / .dmg)";
        }, 3000);
      }, 1800);
    };
  });

  // 9. Wishlist Drawer Handlers
  const wishlistCloseBtn = document.getElementById("wishlist-close-btn");
  if (wishlistCloseBtn) wishlistCloseBtn.onclick = () => openWishlist(false);

  const wishlistOverlay = document.getElementById("wishlist-drawer-overlay");
  if (wishlistOverlay) wishlistOverlay.onclick = () => openWishlist(false);

  const wishlistExploreBtn = document.getElementById("wishlist-explore-btn");
  if (wishlistExploreBtn) {
    wishlistExploreBtn.onclick = () => {
      openWishlist(false);
      window.location.hash = "#/software";
    };
  }

  document.querySelectorAll('[data-action="wishlist-remove"]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      store.toggleWishlist(id);
    };
  });

  document.querySelectorAll('[data-action="wishlist-to-cart"]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      store.addToCart(id);
      store.toggleWishlist(id);
      openWishlist(false);
      openCart(true);
    };
  });

  const wishlistAddAll = document.getElementById("wishlist-add-all-btn");
  if (wishlistAddAll) {
    wishlistAddAll.onclick = () => {
      store.wishlist.forEach(id => store.addToCart(id));
      store.wishlist = [];
      store.saveWishlist();
      openWishlist(false);
      openCart(true);
      store.showToast("All wishlisted software moved to cart!", "success");
    };
  }

  // 10. Search Modal Handlers
  const searchCloseBtn = document.getElementById("search-close-btn");
  if (searchCloseBtn) searchCloseBtn.onclick = () => openModal(null);

  const modalSearchInput = document.getElementById("modal-search-input");
  if (modalSearchInput) {
    modalSearchInput.oninput = (e) => {
      searchQueryGlobal = e.target.value;
      const modalCont = document.getElementById("modal-container");
      if (modalCont) {
        modalCont.innerHTML = renderSearchModal(searchQueryGlobal);
        bindSearchEvents();
      }
    };
    modalSearchInput.focus();
  }

  bindSearchEvents();

  // Modal backdrop click to close
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.onclick = (e) => {
      if (e.target === overlay) {
        openModal(null);
      }
    };
  });
}

function bindSearchEvents() {
  document.querySelectorAll(".search-result-item").forEach(item => {
    item.onclick = (e) => {
      const id = item.getAttribute("data-id");
      openModal(null);
      window.location.hash = `#/product/${id}`;
    };
  });
}

function openModal(modalName) {
  activeModal = modalName;
  if (!modalName) {
    checkoutStep = 1;
    checkoutOrderResult = null;
  }
  renderApp();
}

function openCart(open) {
  isCartOpen = open;
  if (open) isWishlistOpen = false;
  renderApp();
}

function openWishlist(open) {
  isWishlistOpen = open;
  if (open) isCartOpen = false;
  renderApp();
}

// Global Keyboard Shortcuts (Ctrl+K for search, Escape to close modals)
window.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openModal("search");
  } else if (e.key === "Escape") {
    if (activeModal) openModal(null);
    if (isCartOpen) openCart(false);
    if (isWishlistOpen) openWishlist(false);
  }
});

// Hashchange Router
window.addEventListener("hashchange", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderApp();
});

// Subscribe store changes to auto re-render
store.subscribe(() => {
  renderApp();
});

// Initial boot
renderApp();
