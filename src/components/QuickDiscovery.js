import { CATEGORIES } from "../data/products.js";
import { store } from "../state/store.js";

export function renderQuickDiscovery() {
  // Exclude 'all' for this 7-item quick discovery bar
  const items = CATEGORIES.filter(c => c.id !== "all");

  const icons = {
    "Productivity": `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    `,
    "Developer Tools": `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </svg>
    `,
    "Security & Antivirus": `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    `,
    "Design & Creative": `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m12 19 7-7 3 3-7 7-3-3z"></path>
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="m2 2 7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    `,
    "Business": `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    `,
    "Utilities": `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    `,
    "E-books & Guides": `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    `
  };

  return `
    <section class="quick-discovery-section" id="quick-discovery-bar">
      <div class="container">
        <div class="quick-discovery-grid">
          ${items.map(item => {
            const isActive = store.selectedCategory === item.id;
            return `
              <button 
                class="quick-cat-btn ${isActive ? 'active' : ''}" 
                data-category="${item.id}"
                title="Browse ${item.name}"
              >
                <div class="quick-cat-icon">
                  ${icons[item.id] || icons["Utilities"]}
                </div>
                <div class="quick-cat-name">${item.name}</div>
                <div class="quick-cat-desc">${item.desc}</div>
              </button>
            `;
          }).join("")}
        </div>
      </div>
    </section>
  `;
}
