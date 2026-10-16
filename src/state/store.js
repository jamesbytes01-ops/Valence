import { PRODUCTS } from "../data/products.js";

// LocalStorage Keys
const STORAGE_CART = "valence_cart_v1";
const STORAGE_WISHLIST = "valence_wishlist_v1";
const STORAGE_VAULT = "valence_license_vault_v1";

class Store {
  constructor() {
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.vault = this.loadVault();
    this.promoCode = null;
    this.discountAmount = 0;
    this.listeners = [];
    
    // Filter states
    this.selectedCategory = "all";
    this.selectedNeed = "all";
    this.searchQuery = "";
    this.sortBy = "featured";

    // Active Product for Modal
    this.selectedProduct = null;
  }

  loadCart() {
    try {
      const data = localStorage.getItem(STORAGE_CART);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    localStorage.setItem(STORAGE_CART, JSON.stringify(this.cart));
    this.notify();
  }

  loadWishlist() {
    try {
      const data = localStorage.getItem(STORAGE_WISHLIST);
      return data ? JSON.parse(data) : ["ciphernest-security", "kernelworks-studio"];
    } catch (e) {
      return ["ciphernest-security"];
    }
  }

  saveWishlist() {
    localStorage.setItem(STORAGE_WISHLIST, JSON.stringify(this.wishlist));
    this.notify();
  }

  loadVault() {
    try {
      const data = localStorage.getItem(STORAGE_VAULT);
      if (data) return JSON.parse(data);
    } catch (e) {}
    // Seed with 1 initial license for demonstration
    return [
      {
        id: "lic-init-01",
        productId: "kernelworks-studio",
        productName: "KernelWorks Studio",
        licenseKey: "KWST-9842-X7B1-Q098",
        licenseType: "Perpetual License (Single Seat)",
        purchaseDate: "2026-10-12",
        status: "Active",
        devicesUsed: 1,
        devicesMax: 2,
        sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
      }
    ];
  }

  saveVault() {
    localStorage.setItem(STORAGE_VAULT, JSON.stringify(this.vault));
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  // Cart Operations
  addToCart(productId, licenseOption = null, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = this.cart.find(
      item => item.productId === productId && item.licenseOption === (licenseOption || product.licenseType)
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({
        productId,
        product,
        licenseOption: licenseOption || product.licenseType,
        price: product.price,
        quantity
      });
    }

    this.saveCart();
    this.showToast(`Added "${product.name}" to your cart`, "success");
  }

  updateCartQty(productId, licenseOption, delta) {
    const item = this.cart.find(i => i.productId === productId && i.licenseOption === licenseOption);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => !(i.productId === productId && i.licenseOption === licenseOption));
    }
    this.saveCart();
  }

  removeFromCart(productId, licenseOption) {
    this.cart = this.cart.filter(i => !(i.productId === productId && i.licenseOption === licenseOption));
    this.saveCart();
    this.showToast("Item removed from cart");
  }

  clearCart() {
    this.cart = [];
    this.promoCode = null;
    this.discountAmount = 0;
    this.saveCart();
  }

  applyPromo(code) {
    const cleaned = code.trim().toUpperCase();
    if (cleaned === "TECH20" || cleaned === "VALENCE20") {
      this.promoCode = cleaned;
      this.discountAmount = 0.20; // 20%
      this.notify();
      this.showToast("Promo applied: 20% discount!", "success");
      return { success: true, message: "20% discount applied" };
    } else if (cleaned === "SECURITY500") {
      this.promoCode = cleaned;
      this.discountAmount = 500; // Flat 500
      this.notify();
      this.showToast("Promo applied: ₹500 discount!", "success");
      return { success: true, message: "₹500 flat discount applied" };
    } else {
      return { success: false, message: "Invalid promo code. Try TECH20 or SECURITY500" };
    }
  }

  getCartCalculations() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;
    if (this.promoCode) {
      if (this.discountAmount < 1) {
        discount = Math.round(subtotal * this.discountAmount);
      } else {
        discount = Math.min(subtotal, this.discountAmount);
      }
    }
    const taxable = Math.max(0, subtotal - discount);
    const tax = Math.round(taxable * 0.18); // 18% GST standard in India
    const total = taxable + tax;
    const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);

    return { subtotal, discount, tax, total, count };
  }

  // Wishlist Operations
  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      this.showToast(`Removed "${product ? product.name : 'Item'}" from wishlist`);
    } else {
      this.wishlist.push(productId);
      this.showToast(`Saved "${product ? product.name : 'Item'}" to wishlist`, "success");
    }
    this.saveWishlist();
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  // Provisioning & Checkout Completion
  completeCheckout(customerInfo, paymentMethod) {
    const { total } = this.getCartCalculations();
    const newLicenses = [];

    this.cart.forEach(item => {
      for (let i = 0; i < item.quantity; i++) {
        // Generate cryptographic-style license key
        const key = this.generateLicenseKey(item.product.name);
        const lic = {
          id: `lic-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          productId: item.productId,
          productName: item.product.name,
          licenseKey: key,
          licenseType: item.licenseOption,
          purchaseDate: new Date().toISOString().split("T")[0],
          status: "Active",
          customerEmail: customerInfo.email,
          paymentMethod,
          devicesUsed: 1,
          devicesMax: item.product.category.includes("Security") ? 5 : 2,
          sha256: item.product.sha256Checksum
        };
        newLicenses.push(lic);
        this.vault.unshift(lic);
      }
    });

    this.saveVault();
    this.clearCart();
    return newLicenses;
  }

  generateLicenseKey(productName) {
    const prefix = productName.replace(/[^A-Z]/gi, "").substring(0, 4).toUpperCase() || "VALN";
    const segment = () => Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${segment()}-${segment()}-${segment()}`;
  }

  // Toast Messaging
  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast-msg ${type}`;
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === "success" 
          ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
          : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>'
        }
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.2s ease";
      setTimeout(() => toast.remove(), 200);
    }, 3200);
  }
}

export const store = new Store();
