import { store } from "../state/store.js";

export function renderVaultPage() {
  const licenses = store.vault;

  return `
    <div class="page-container">
      <div class="page-hero-banner">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h1 class="page-hero-title">My Digital License Vault</h1>
              <p class="page-hero-desc">
                Your permanent repository of authorized software keys, offline cryptographic license files, and verified installer downloads.
              </p>
            </div>
            <span class="badge-mono lime" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">
              ${licenses.length} ACTIVE LICENSES REGISTERED
            </span>
          </div>
        </div>
      </div>

      <section class="section-wrapper">
        <div class="container">
          ${licenses.length === 0 ? `
            <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted); background: #ffffff; border: 1px dashed var(--border-medium); border-radius: var(--radius-sm);">
              <h3 style="font-size: 1.25rem; color: var(--text-high); margin-bottom: 0.4rem;">No active licenses yet</h3>
              <p style="font-size: 0.9rem; margin-bottom: 1.25rem;">Explore our software and antivirus marketplace to purchase and provision keys.</p>
              <a href="#/software" class="btn btn-primary btn-sm">
                Explore Software Store &rarr;
              </a>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              ${licenses.map(lic => `
                <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 4px;">
                        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-high);">${lic.productName}</h3>
                        <span class="badge-mono lime" style="font-size: 0.68rem;">${lic.status.toUpperCase()}</span>
                      </div>
                      <span class="mono" style="font-size: 0.76rem; color: var(--text-muted);">
                        ${lic.licenseType} &bull; Issued ${lic.purchaseDate}
                      </span>
                    </div>

                    <div class="mono" style="font-size: 0.82rem; color: var(--text-medium); text-align: right;">
                      <span>Allocated Devices: </span>
                      <strong style="color: var(--accent-lime);">${lic.devicesUsed} / ${lic.devicesMax} Active</strong>
                    </div>
                  </div>

                  <!-- Key Container -->
                  <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-xs); margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
                    <div>
                      <span class="mono" style="font-size: 0.68rem; color: var(--text-muted); display: block;">CRYPTOGRAPHIC OFFLINE SERIAL KEY</span>
                      <span class="mono" style="font-size: 1.05rem; font-weight: 700; color: var(--accent-lime); letter-spacing: 0.06em;">
                        ${lic.licenseKey}
                      </span>
                    </div>

                    <button class="btn btn-secondary btn-sm mono copy-lic-btn" data-key="${lic.licenseKey}">
                      Copy Key
                    </button>
                  </div>

                  <!-- Actions & Checksum -->
                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; padding-top: 0.6rem; border-top: 1px dashed var(--border-subtle); flex-wrap: wrap; gap: 0.5rem;">
                    <span class="mono" style="color: var(--text-muted);">
                      SHA-256 CHECKSUM: ${lic.sha256 ? lic.sha256.substring(0, 24) + '...' : 'Verified Authenticity'}
                    </span>

                    <button class="btn btn-secondary btn-sm mono download-installer-sim-btn" data-name="${lic.productName}">
                      Download Installer (.exe / .dmg)
                    </button>
                  </div>
                </div>
              `).join("")}
            </div>
          `}
        </div>
      </section>

      <!-- Offline Verification & CLI Airgap Protocol -->
      <section class="section-wrapper alt-bg">
        <div class="container">
          <div class="section-header-block">
            <div>
              <h2 class="section-heading-title">Offline Cryptographic Key Validation Protocol</h2>
              <p class="section-subtext">
                Verify digital signatures and run tools in strictly isolated corporate air-gapped workstations without external internet access
              </p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 1rem;">
            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-high);">
                Airgap Terminal Activation Command
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55; margin-bottom: 1rem;">
                Run this command on your air-gapped terminal to validate cryptographic hashes and generate an offline hardware enrollment token:
              </p>
              <div style="background: #091326; color: #38bdf8; padding: 1rem; border-radius: var(--radius-xs); font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto;">
                $ valence-cli activate --key "YOUR-VAULT-TOKEN" --airgap --offline
              </div>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-high);">
                Local Browser Vault Encryption
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55; margin-bottom: 0.75rem;">
                Your license records and cryptographic keyfiles are stored client-side in encrypted localStorage partitions.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; color: var(--text-medium);">
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--accent-lime); font-weight: 700;">✓</span>
                  <span>Zero telemetry or biometric telemetry uploaded</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--accent-lime); font-weight: 700;">✓</span>
                  <span>Instant JSON and CSV license asset export available</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--accent-lime); font-weight: 700;">✓</span>
                  <span>Perpetual entitlement archiving with free installer redownloads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
