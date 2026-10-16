import { store } from "../state/store.js";
import { FORMAT_INR } from "../data/products.js";
import confetti from "canvas-confetti";

export function renderCheckoutModal(step = 1, orderResult = null) {
  const { total, count } = store.getCartCalculations();

  return `
    <div class="modal-overlay open" id="checkout-modal">
      <div class="modal-card" style="max-width: 640px;">
        <!-- Header -->
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="status-dot"></span>
            <span class="mono" style="font-size: 0.8rem; font-weight: 700;">
              VALENCE SECURE PROVISIONING // STEP ${step} OF 3
            </span>
          </div>
          <button class="modal-close-btn" id="checkout-close-btn" aria-label="Close checkout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          ${step === 1 ? `
            <!-- Step 1: Customer & Delivery Target -->
            <div>
              <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.4rem;">Digital Delivery Details</h3>
              <p style="font-size: 0.85rem; color: var(--text-medium); margin-bottom: 1.5rem;">
                Your cryptographically signed license keys and installer verification checksums will be dispatched instantly.
              </p>

              <form id="checkout-step1-form" style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <label class="mono" style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 0.35rem;">
                    DEVELOPER / ENTITY NAME *
                  </label>
                  <input 
                    type="text" 
                    required 
                    id="checkout-name" 
                    class="discovery-search-input" 
                    placeholder="e.g. Alex Mercer or Kernel Labs" 
                    value="Antigravity Engineering"
                  />
                </div>

                <div>
                  <label class="mono" style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 0.35rem;">
                    DELIVERY EMAIL (FOR LICENSE KEYS &amp; RECEIPT) *
                  </label>
                  <input 
                    type="email" 
                    required 
                    id="checkout-email" 
                    class="discovery-search-input" 
                    placeholder="engineer@domain.com" 
                    value="lead.architect@valence.internal"
                  />
                </div>

                <!-- Order Summary Pill -->
                <div style="background: var(--bg-canvas); border: 1px solid var(--border-subtle); padding: 1rem; border-radius: var(--radius-xs); margin-top: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">Package Total (${count} items):</span>
                    <div class="mono" style="font-size: 1.25rem; font-weight: 700; color: var(--accent-lime);">${FORMAT_INR(total)}</div>
                  </div>
                  <span class="badge-mono lime">18% GST INCLUDED</span>
                </div>

                <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
                  <button type="submit" class="btn btn-primary">
                    Proceed to Payment &rarr;
                  </button>
                </div>
              </form>
            </div>
          ` : step === 2 ? `
            <!-- Step 2: Payment Simulator -->
            <div>
              <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.4rem;">Select Payment Gateway</h3>
              <p style="font-size: 0.85rem; color: var(--text-medium); margin-bottom: 1.25rem;">
                Instant authorization in INR (₹). Simulated secure test environment.
              </p>

              <!-- Payment Method Tabs -->
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; margin-bottom: 1.5rem;" id="checkout-pay-methods">
                <button class="tier-option-btn active" data-pay="upi" type="button" style="flex-direction: column; align-items: flex-start; gap: 0.3rem;">
                  <strong style="color: var(--text-high);">UPI QR / ID</strong>
                  <span class="mono" style="font-size: 0.7rem; color: var(--accent-lime);">Instant GPay/PhonePe</span>
                </button>
                <button class="tier-option-btn" data-pay="card" type="button" style="flex-direction: column; align-items: flex-start; gap: 0.3rem;">
                  <strong style="color: var(--text-high);">Card (Visa/MC)</strong>
                  <span class="mono" style="font-size: 0.7rem;">Debit / Credit</span>
                </button>
                <button class="tier-option-btn" data-pay="netbanking" type="button" style="flex-direction: column; align-items: flex-start; gap: 0.3rem;">
                  <strong style="color: var(--text-high);">NetBanking</strong>
                  <span class="mono" style="font-size: 0.7rem;">HDFC, ICICI, SBI</span>
                </button>
              </div>

              <!-- UPI Simulation Box -->
              <div id="pay-upi-panel" style="background: var(--bg-canvas); border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: var(--radius-xs); text-align: center; margin-bottom: 1.5rem;">
                <div style="display: inline-block; padding: 0.75rem; background: #ffffff; border-radius: var(--radius-xs); margin-bottom: 0.75rem;">
                  <!-- QR Code Vector -->
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="#000000">
                    <rect width="30" height="30" fill="#000"/>
                    <rect x="5" y="5" width="20" height="20" fill="#fff"/>
                    <rect x="9" y="9" width="12" height="12" fill="#000"/>
                    <rect x="70" width="30" height="30" fill="#000"/>
                    <rect x="75" y="5" width="20" height="20" fill="#fff"/>
                    <rect x="79" y="9" width="12" height="12" fill="#000"/>
                    <rect y="70" width="30" height="30" fill="#000"/>
                    <rect x="5" y="75" width="20" height="20" fill="#fff"/>
                    <rect x="9" y="79" width="12" height="12" fill="#000"/>
                    <rect x="36" y="10" width="8" height="20"/>
                    <rect x="48" y="15" width="14" height="8"/>
                    <rect x="40" y="40" width="20" height="20"/>
                    <rect x="70" y="40" width="20" height="10"/>
                    <rect x="75" y="60" width="15" height="25"/>
                    <rect x="10" y="40" width="20" height="10"/>
                    <rect x="40" y="70" width="25" height="18"/>
                  </svg>
                </div>
                <div class="mono" style="font-size: 0.8rem; color: var(--text-high); margin-bottom: 0.25rem;">
                  VPA: <strong>valence-dispatch@icici</strong>
                </div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">
                  Scan with any UPI App or click "Simulate Instant Payment" below.
                </div>
              </div>

              <!-- Authorize Button -->
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <button class="btn btn-secondary btn-sm mono" id="checkout-back-step1">
                  &larr; Back
                </button>
                <button class="btn btn-primary" id="checkout-authorize-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Authorize ${FORMAT_INR(total)} &amp; Provision Keys
                </button>
              </div>
            </div>
          ` : `
            <!-- Step 3: Instant Provisioning & Cryptographic Key Issuance -->
            <div style="text-align: center; padding: 1rem 0;">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--accent-lime-dim); border: 2px solid var(--accent-lime); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: var(--accent-lime);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <span class="badge-mono lime" style="margin-bottom: 0.5rem;">TRANSACTION CONFIRMED &bull; 0-DELAY DISPATCH</span>
              <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 0.5rem;">Digital Licenses Provisioned!</h3>
              <p style="font-size: 0.85rem; color: var(--text-medium); max-width: 480px; margin: 0 auto 1.5rem;">
                Your payment was authenticated. Below are your freshly generated cryptographic license tokens and installer access points.
              </p>

              <!-- Generated Keys List -->
              <div style="display: flex; flex-direction: column; gap: 0.75rem; text-align: left; margin-bottom: 1.5rem;">
                ${orderResult && orderResult.licenses ? orderResult.licenses.map(lic => `
                  <div style="background: var(--bg-canvas); border: 1px solid var(--border-medium); border-radius: var(--radius-xs); padding: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                      <strong style="font-size: 0.95rem; color: var(--text-high);">${lic.productName}</strong>
                      <span class="badge-mono cyan">${lic.licenseType}</span>
                    </div>

                    <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface); border: 1px solid var(--border-subtle); padding: 0.5rem 0.75rem; border-radius: var(--radius-xs); margin-bottom: 0.6rem;">
                      <span class="mono" style="color: var(--accent-lime); font-weight: 700; font-size: 0.95rem; letter-spacing: 0.05em;">
                        ${lic.licenseKey}
                      </span>
                      <button class="btn btn-secondary btn-sm mono copy-lic-btn" data-key="${lic.licenseKey}" style="padding: 0.25rem 0.6rem; font-size: 0.72rem;">
                        Copy Key
                      </button>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">
                      <span>SHA-256: ${lic.sha256 ? lic.sha256.substring(0, 18) + '...' : 'Verified'}</span>
                      <button class="mono download-installer-sim-btn" data-name="${lic.productName}" style="color: var(--accent-lime); background: none; border: none; cursor: pointer; text-decoration: underline;">
                        Download Binary Package (.exe / .dmg)
                      </button>
                    </div>
                  </div>
                `).join("") : ""}
              </div>

              <!-- Action Links -->
              <div style="display: flex; gap: 0.75rem; justify-content: center;">
                <button class="btn btn-primary" id="checkout-view-vault-btn">
                  Open My License Vault &rarr;
                </button>
                <button class="btn btn-secondary" id="checkout-finish-btn">
                  Continue Browsing
                </button>
              </div>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

export function triggerConfetti() {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F076', '#00E5FF', '#ffffff', '#27C93F']
    });
  } catch (e) {
    console.log("Confetti effect triggered");
  }
}
