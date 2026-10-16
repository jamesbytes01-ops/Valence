import { store } from "../state/store.js";

export function renderLicenseVaultModal() {
  const licenses = store.vault;

  return `
    <div class="modal-overlay open" id="license-vault-modal">
      <div class="modal-card" style="max-width: 760px;">
        <!-- Header -->
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-lime);">
              <path d="M21 2l-2 2m-1-1l-3 3m5 8v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            </svg>
            <h3 style="font-size: 1.2rem; font-weight: 700;">My Digital License Vault</h3>
            <span class="badge-mono lime">${licenses.length} ACTIVE KEYS</span>
          </div>
          <button class="modal-close-btn" id="vault-close-btn" aria-label="Close license vault">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <p style="font-size: 0.85rem; color: var(--text-medium); margin-bottom: 1.5rem;">
            All your authorized digital software licenses, offline keys, and verified binary downloads are stored here. Licenses are tied to your cryptographic account and remain permanently available.
          </p>

          ${licenses.length === 0 ? `
            <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: var(--bg-canvas); border: 1px dashed var(--border-medium); border-radius: var(--radius-xs);">
              <h4 style="font-size: 1rem; color: var(--text-high); margin-bottom: 0.35rem;">No active licenses registered</h4>
              <p style="font-size: 0.8rem; margin-bottom: 1rem;">Complete a purchase to automatically provision and archive keys in your vault.</p>
              <button class="btn btn-primary btn-sm mono" id="vault-explore-btn">
                Browse Digital Store
              </button>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${licenses.map(lic => `
                <div style="background: var(--bg-canvas); border: 1px solid var(--border-medium); border-radius: var(--radius-xs); padding: 1.25rem;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 2px;">
                        <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-high);">${lic.productName}</h4>
                        <span class="badge-mono lime" style="font-size: 0.65rem;">${lic.status.toUpperCase()}</span>
                      </div>
                      <span class="mono" style="font-size: 0.72rem; color: var(--text-muted);">${lic.licenseType} &bull; Issued ${lic.purchaseDate}</span>
                    </div>

                    <div class="mono" style="font-size: 0.75rem; color: var(--text-medium); text-align: right;">
                      <span>Devices: </span>
                      <strong style="color: var(--accent-lime);">${lic.devicesUsed} / ${lic.devicesMax} Active</strong>
                    </div>
                  </div>

                  <!-- Key Container -->
                  <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface); border: 1px solid var(--border-subtle); padding: 0.6rem 0.9rem; border-radius: var(--radius-xs); margin-bottom: 0.85rem;">
                    <div>
                      <span class="mono" style="font-size: 0.65rem; color: var(--text-muted); display: block;">OFFLINE LICENSE KEY</span>
                      <span class="mono" style="font-size: 0.95rem; font-weight: 700; color: var(--accent-lime); letter-spacing: 0.06em;">
                        ${lic.licenseKey}
                      </span>
                    </div>

                    <button class="btn btn-secondary btn-sm mono copy-lic-btn" data-key="${lic.licenseKey}">
                      Copy Key
                    </button>
                  </div>

                  <!-- Actions & Checksum -->
                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; padding-top: 0.4rem; border-top: 1px dashed var(--border-subtle);">
                    <span class="mono" style="color: var(--text-muted); font-size: 0.7rem;">
                      SHA: ${lic.sha256 ? lic.sha256.substring(0, 16) + '...' : 'Verified'}
                    </span>

                    <div style="display: flex; gap: 0.75rem;">
                      <button class="btn btn-secondary btn-sm mono download-installer-sim-btn" data-name="${lic.productName}">
                        Download Installer (.exe / .dmg)
                      </button>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}
