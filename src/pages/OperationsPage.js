import { store } from "../state/store.js";
import { FORMAT_INR } from "../data/products.js";

let activeTab = "pgp";

export function setOperationsActiveTab(tab) {
  activeTab = tab;
}

export function getOperationsActiveTab() {
  return activeTab;
}

export function renderOperationsPage(initialTab = null) {
  if (initialTab) {
    activeTab = initialTab;
  }

  return `
    <div class="page-container">
      <!-- Operations Hero Banner -->
      <div class="page-hero-banner">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1.5rem;">
            <div>
              <span class="badge-mono cyan" style="margin-bottom: 0.75rem;">VALENCE INFRASTRUCTURE // PROTOCOL SPECS</span>
              <h1 class="page-hero-title">Technical Operations &amp; Platform Architecture</h1>
              <p class="page-hero-desc">
                Public PGP trust ring, air-gapped cryptographic signing protocols, automated Indian GST invoicing, and developer sandbox APIs.
              </p>
            </div>

            <div style="display: flex; gap: 1.25rem; align-items: center; background: #ffffff; padding: 1rem 1.5rem; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
              <div>
                <span class="mono" style="font-size: 0.72rem; color: var(--text-muted); display: block;">GATEWAY PROTOCOL</span>
                <strong class="mono" style="color: var(--accent-lime); font-size: 1rem;">TLS 1.3 // ED25519</strong>
              </div>
              <div style="border-left: 1px solid var(--border-subtle); padding-left: 1.25rem;">
                <span class="mono" style="font-size: 0.72rem; color: var(--text-muted); display: block;">PGP FINGERPRINT</span>
                <strong class="mono" style="color: var(--accent-cyan); font-size: 1rem;">0x7F8B92</strong>
              </div>
            </div>
          </div>

          <!-- Technical Operations Navigation Tabs -->
          <div style="display: flex; gap: 0.5rem; margin-top: 2rem; flex-wrap: wrap;" id="operations-tab-bar">
            <button class="discovery-tab-btn op-tab-btn ${activeTab === 'pgp' ? 'active' : ''}" data-op-tab="pgp">
              PGP Public Key (0x7F8B92)
            </button>
            <button class="discovery-tab-btn op-tab-btn ${activeTab === 'airgap' ? 'active' : ''}" data-op-tab="airgap">
              Air-Gapped Key Generation
            </button>
            <button class="discovery-tab-btn op-tab-btn ${activeTab === 'refund' ? 'active' : ''}" data-op-tab="refund">
              Refund &amp; Revocation Protocol
            </button>
            <button class="discovery-tab-btn op-tab-btn ${activeTab === 'invoicing' ? 'active' : ''}" data-op-tab="invoicing">
              Automated Invoicing (GST)
            </button>
            <button class="discovery-tab-btn op-tab-btn ${activeTab === 'api' ? 'active' : ''}" data-op-tab="api">
              API Developer Sandbox
            </button>
          </div>
        </div>
      </div>

      <!-- Tab Content Area -->
      <section class="section-wrapper">
        <div class="container" id="operations-tab-content">
          ${renderTabContent(activeTab)}
        </div>
      </section>

      <!-- Operations SLA & Security Guarantees -->
      <section class="section-wrapper alt-bg">
        <div class="container">
          <div class="section-header-block">
            <div>
              <h2 class="section-heading-title">Platform Operations Guarantees</h2>
              <p class="section-subtext">
                Enterprise infrastructure built for high uptime, local compliance, and tamper-proof verification
              </p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 1rem;">
            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-lime); font-weight: 700; display: block; margin-bottom: 0.5rem;">DISPATCH SLA</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Sub-120ms Key Provisioning</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Every software license and antivirus serial key is provisioned instantly upon payment confirmation without manual queueing.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700; display: block; margin-bottom: 0.5rem;">COMPLIANCE</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Indian GST Input Tax Credits</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Automated generation of official e-invoices with company GSTIN, HSN/SAC classification, and state jurisdiction breakdown.
              </p>
            </div>

            <div style="padding: 1.75rem; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-amber); font-weight: 700; display: block; margin-bottom: 0.5rem;">RESILIENCE</span>
              <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">Permanent Key Escrow</h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Purchased serial keys, cryptographic activation keyfiles, and installation binaries remain accessible permanently in your License Vault.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Operations Contact Banner -->
      <section class="section-wrapper" style="padding-top: 1rem;">
        <div class="container">
          <div style="background: linear-gradient(135deg, #091326 0%, #0d1e3d 100%); border-radius: var(--radius-sm); padding: 3rem 2.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
            <div>
              <span class="badge-mono cyan" style="margin-bottom: 0.75rem;">SECURITY DISPATCH</span>
              <h3 style="font-size: 1.85rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">
                Need custom technical procurement assistance
              </h3>
              <p style="color: #94a3b8; font-size: 0.95rem; max-width: 540px; line-height: 1.5;">
                Our technical operations team provides enterprise PGP verification assistance, vendor onboarding documentation, and airgap deployment consults.
              </p>
            </div>
            <a href="mailto:dispatch@valence.internal" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
              Contact Operations Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderTabContent(tab) {
  if (tab === "pgp") {
    return `
      <div style="display: flex; flex-direction: column; gap: 2.5rem;">
        <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 2.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <span class="badge-mono lime" style="margin-bottom: 0.5rem;">AUTHENTICITY VERIFICATION</span>
              <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-high); margin-bottom: 0.5rem;">
                Official Valence PGP Master Public Key
              </h2>
              <p style="color: var(--text-medium); font-size: 0.95rem; max-width: 680px; line-height: 1.6;">
                All released binaries, SHA-256 checksum catalogs, and automated license dispatch tokens are signed by our offline air-gapped master key. Use this public certificate to verify authenticity prior to execution.
              </p>
            </div>

            <button class="btn btn-secondary btn-sm mono" id="copy-pgp-key-btn" style="padding: 0.6rem 1rem;">
              Copy Public Certificate
            </button>
          </div>

          <!-- Key Details Grid -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; padding: 1.25rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs); margin-bottom: 1.5rem;">
            <div>
              <span class="mono" style="font-size: 0.72rem; color: var(--text-muted); display: block;">KEY ID</span>
              <strong class="mono" style="font-size: 0.95rem; color: var(--accent-cyan);">0x7F8B92C4E10A9831</strong>
            </div>
            <div>
              <span class="mono" style="font-size: 0.72rem; color: var(--text-muted); display: block;">ALGORITHM</span>
              <strong class="mono" style="font-size: 0.95rem; color: var(--text-high);">RSA 4096 / Ed25519</strong>
            </div>
            <div>
              <span class="mono" style="font-size: 0.72rem; color: var(--text-muted); display: block;">CREATED</span>
              <strong class="mono" style="font-size: 0.95rem; color: var(--text-high);">JAN 2026 (RENEWED)</strong>
            </div>
            <div>
              <span class="mono" style="font-size: 0.72rem; color: var(--text-muted); display: block;">STATUS</span>
              <strong class="mono" style="color: var(--accent-lime); font-size: 0.95rem;">● ACTIVE &amp; AUDITED</strong>
            </div>
          </div>

          <!-- Raw Key Block -->
          <div style="background: #091326; color: #38bdf8; padding: 1.5rem; border-radius: var(--radius-xs); font-family: var(--font-mono); font-size: 0.78rem; line-height: 1.45; overflow-x: auto; white-space: pre;" id="raw-pgp-block">-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: Valence Cryptographic Trust Engine v4.8
Comment: https://valence.io/operations/pgp

mQGNBF/9kXgBDADQ8bW2uV6xN6nI2sP1tQ8yL5k3jM7vO9pA4cF2eG1hI3kJ5lM7
oP9qR1sT3uV5wX7yZ9bC1dE3fG5hI7jK9lM1nO3pQ5rS7tU9vW1xY3zA5bC7dE9f
G1hI3jK5lM7nO9pQ1rS3tU5vW7xY9zA1bC3dE5fG7hI9jK1lM3nO5pQ7rS9tU1v
W3xY5zA7bC9dE1fG3hI5jK7lM9nO1pQ3rS5tU7vW9xY1zA3bC5dE7fG9hI1jK3l
M5nO7pQ9rS1tU3vW5xY7zA9bC1dE3fG5hI7jK9lM1nO3pQ5rS7tU9vW1xY3zA5b
C7dE9fG1hI3jK5lM7nO9pQ1rS3tU5vW7xY9zA1bC3dE5fG7hI9jK1lM3nO5pQ7r
=7F8B
-----END PGP PUBLIC KEY BLOCK-----</div>

          <!-- Interactive CLI Verification Example -->
          <div style="margin-top: 2rem;">
            <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-high);">
              How to Verify a Downloaded Binary
            </h4>
            <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55; margin-bottom: 1rem;">
              Run the following terminal commands to import our trust key and verify binary checksums before executing on your system:
            </p>
            <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: var(--radius-xs); font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-high); line-height: 1.6;">
              <div># 1. Download and import the Valence master public key</div>
              <div style="color: var(--accent-cyan);">$ curl -s https://valence.io/keys/pgp.pub | gpg --import</div>
              <br>
              <div># 2. Verify installer package signature</div>
              <div style="color: var(--accent-cyan);">$ gpg --verify aegisroot-installer.v8.4.2.sig aegisroot-installer.exe</div>
              <br>
              <div># 3. Output should confirm: Good signature from "Valence Digital Release Signing &lt;security@valence.internal&gt;"</div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (tab === "airgap") {
    return `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 2.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
          <span class="badge-mono lime" style="margin-bottom: 0.5rem;">SECURE ENCLAVE ENROLLMENT</span>
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-high); margin-bottom: 0.5rem;">
            Air-Gapped Key Generation &amp; Validation Protocol
          </h2>
          <p style="color: var(--text-medium); font-size: 0.95rem; max-width: 680px; line-height: 1.6; margin-bottom: 2rem;">
            Our cryptographic licensing protocol is architected specifically for classified environments, SCADA networks, and air-gapped corporate research laboratories that prohibit outgoing internet pings.
          </p>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
            <div style="padding: 1.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-lime); font-weight: 700; display: block; margin-bottom: 0.5rem;">STEP 01</span>
              <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem;">Offline Request Hash</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5;">
                Run the tool on your isolated machine with the <code class="mono">--gen-request</code> flag to create an anonymous hardware identifier hash (.req).
              </p>
            </div>

            <div style="padding: 1.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700; display: block; margin-bottom: 0.5rem;">STEP 02</span>
              <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem;">Offline Token Signing</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5;">
                From an authorized web connection, upload the .req hash to your License Vault to receive an Ed25519 digitally signed activation payload (.vkey).
              </p>
            </div>

            <div style="padding: 1.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-amber); font-weight: 700; display: block; margin-bottom: 0.5rem;">STEP 03</span>
              <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem;">Local Enclave Ingestion</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5;">
                Transfer the .vkey file via secure USB or optical disc to the target node. The tool activates locally without recurring DRM handshakes.
              </p>
            </div>
          </div>

          <div style="margin-top: 2.5rem; padding: 1.5rem; background: #091326; border-radius: var(--radius-xs); color: #f8fafc;">
            <h4 class="mono" style="color: #38bdf8; font-size: 0.95rem; margin-bottom: 0.5rem;">
              CLI Terminal Example
            </h4>
            <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #e2e8f0; line-height: 1.6;">
              <div># Generate anonymous airgap node request:</div>
              <div style="color: #38bdf8;">$ kernelworks --airgap-init --out ./node-alpha.req</div>
              <br>
              <div># Import signed vault certificate:</div>
              <div style="color: #38bdf8;">$ kernelworks --import-license ./node-alpha.vkey</div>
              <div style="color: #34d399;">&gt; [SUCCESS] Cryptographic signature valid. License initialized for 365 days offline.</div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (tab === "refund") {
    return `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 2.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
          <span class="badge-mono cyan" style="margin-bottom: 0.5rem;">CONSUMER &amp; B2B SATISFACTION</span>
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-high); margin-bottom: 0.5rem;">
            Refund &amp; License Revocation Protocol
          </h2>
          <p style="color: var(--text-medium); font-size: 0.95rem; max-width: 680px; line-height: 1.6; margin-bottom: 2rem;">
            We maintain an automated 14-day technical satisfaction guarantee on all commercial tools, antivirus suites, and technical compendiums.
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div style="padding: 1.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs);">
              <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-high);">
                14-Day Money-Back Technical SLA
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                If any purchased software tool or antivirus suite exhibits technical incompatibility with your target hardware or operating system, you can request an instant full refund through your License Vault.
              </p>
            </div>

            <div style="padding: 1.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs);">
              <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-high);">
                Cryptographic Key Invalidation
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Upon approved refund processing, the associated serial key and Ed25519 certificate are broadcast to our public Certificate Revocation List (CRL) and deactivated from your active vault.
              </p>
            </div>
          </div>

          <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
            <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-high);">
              How to Initiate a Technical Refund
            </h4>
            <ol style="margin-left: 1.25rem; font-size: 0.88rem; color: var(--text-medium); line-height: 1.6;">
              <li>Navigate to your <a href="#/vault" style="color: var(--accent-cyan); font-weight: 600;">License Vault</a>.</li>
              <li>Locate the purchased tool and click "Request Revocation / Refund".</li>
              <li>Provide your technical error code or incompatibility explanation.</li>
              <li>Funds are credited back to your original payment method within 3-5 business days along with a revised GST credit memo.</li>
            </ol>
          </div>
        </div>
      </div>
    `;
  } else if (tab === "invoicing") {
    return `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 2.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
          <span class="badge-mono lime" style="margin-bottom: 0.5rem;">REGULATORY COMPLIANCE</span>
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-high); margin-bottom: 0.5rem;">
            Automated Indian GST Invoicing Architecture
          </h2>
          <p style="color: var(--text-medium); font-size: 0.95rem; max-width: 680px; line-height: 1.6; margin-bottom: 2rem;">
            All commercial transactions on Valence are executed in Indian Rupees (₹ INR) under full compliance with Indian Goods and Services Tax laws.
          </p>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="padding: 1.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-lime); font-weight: 700; display: block; margin-bottom: 0.4rem;">TAX RATE</span>
              <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--text-high);">18% Integrated GST</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5; margin-top: 0.5rem;">
                Standard statutory tax applied to digital software downloads and electronic information services.
              </p>
            </div>

            <div style="padding: 1.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700; display: block; margin-bottom: 0.4rem;">SAC CODE</span>
              <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--text-high);">SAC 997331</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5; margin-top: 0.5rem;">
                Licensing services for the right to use computer software and databases under GST law.
              </p>
            </div>

            <div style="padding: 1.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-xs);">
              <span class="mono" style="font-size: 0.72rem; color: var(--accent-amber); font-weight: 700; display: block; margin-bottom: 0.4rem;">CREDIT ELIGIBILITY</span>
              <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--text-high);">100% Input Tax Credit</h4>
              <p style="font-size: 0.85rem; color: var(--text-medium); line-height: 1.5; margin-top: 0.5rem;">
                B2B purchasers claiming business expenses receive automated GSTR-1 filings for full tax offset.
              </p>
            </div>
          </div>

          <!-- Sample Tax Breakdown Panel -->
          <div style="background: #091326; border-radius: var(--radius-xs); padding: 1.5rem; color: #f8fafc;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e3a5f; padding-bottom: 0.75rem; margin-bottom: 1rem;">
              <span class="mono" style="font-size: 0.82rem; color: #38bdf8;">VALENCE AUTOMATED TAX INVOICE SAMPLE // B2B FORMAT</span>
              <span class="mono" style="font-size: 0.75rem; color: #34d399;">GSTIN: 27AAACV9842F1Z8</span>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.82rem; line-height: 1.7; color: #cbd5e1;">
              <div style="display: flex; justify-content: space-between;">
                <span>Item: KernelWorks Studio (Perpetual Developer License)</span>
                <span>₹4,660.17</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>Integrated GST (IGST @ 18%):</span>
                <span>₹838.83</span>
              </div>
              <div style="display: flex; justify-content: space-between; border-top: 1px dashed #334155; padding-top: 0.5rem; margin-top: 0.5rem; color: #ffffff; font-weight: 700; font-size: 0.95rem;">
                <span>Total Amount Charged:</span>
                <span style="color: #34d399;">₹5,499.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (tab === "api") {
    return `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 2.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
          <span class="badge-mono cyan" style="margin-bottom: 0.5rem;">DEVELOPER PLATFORM</span>
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-high); margin-bottom: 0.5rem;">
            API Developer Sandbox &amp; Webhooks
          </h2>
          <p style="color: var(--text-medium); font-size: 0.95rem; max-width: 680px; line-height: 1.6; margin-bottom: 2rem;">
            Automate license key procurement, seat provisioning, and cryptographic key revocation directly from your company internal portals or CI/CD pipelines.
          </p>

          <!-- Interactive Sandbox Simulation -->
          <div style="background: #091326; border-radius: var(--radius-xs); padding: 1.5rem; color: #f8fafc; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid #1e3a5f; padding-bottom: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="badge-mono lime" style="font-size: 0.7rem;">POST</span>
                <span class="mono" style="font-size: 0.85rem; color: #38bdf8;">https://api.valence.io/v1/licenses/issue</span>
              </div>
              <button class="btn btn-primary btn-sm mono" id="run-api-sandbox-btn" style="padding: 0.35rem 0.85rem; font-size: 0.75rem;">
                Run Test Request
              </button>
            </div>

            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem;">Request Body (JSON):</div>
            <pre style="background: #060b17; padding: 0.85rem; border-radius: var(--radius-xs); font-family: var(--font-mono); font-size: 0.76rem; color: #cbd5e1; margin-bottom: 1rem;">{
  "product_id": "kernelworks-studio",
  "seat_count": 5,
  "client_reference": "CORP-ENG-DEPT-904",
  "offline_signing": true,
  "currency": "INR"
}</pre>

            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem;">Response (200 OK):</div>
            <pre id="api-sandbox-output" style="background: #060b17; padding: 0.85rem; border-radius: var(--radius-xs); font-family: var(--font-mono); font-size: 0.76rem; color: #34d399; line-height: 1.45;">{
  "status": "success",
  "license_id": "lic_9842_x7b1",
  "product": "KernelWorks Studio",
  "seats_provisioned": 5,
  "ed25519_token": "VKEY-KWST-9842-X7B1-Q098",
  "sha256_checksum": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "tax_invoice_number": "VAL-2026-INV-8492"
}</pre>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-high);">
                API Authentication
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Every API request requires a Bearer token issued from your enterprise account portal. All endpoints are rate-limited to 1,000 req/min with TLS 1.3 encryption.
              </p>
            </div>
            <div>
              <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-high);">
                Automated Webhooks
              </h4>
              <p style="font-size: 0.88rem; color: var(--text-medium); line-height: 1.55;">
                Register endpoint URLs to receive cryptographic event notifications for <code class="mono">license.created</code>, <code class="mono">seat.activated</code>, and <code class="mono">crl.revocation</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return "";
}
