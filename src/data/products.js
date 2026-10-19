export const PRODUCTS = [
  {
    id: "kernelworks-studio",
    name: "KernelWorks Studio",
    tag: "PRO COMPILER",
    category: "Developer Tools",
    needCategory: "developer",
    shortDesc: "Low-latency systems IDE with real-time memory inspection, eBPF telemetry, and native binary debugging.",
    fullDesc: "Engineered for kernel hackers, systems programmers, and embedded engineers. KernelWorks Studio unifies high-performance LLVM/Rust toolchains, eBPF tracing probes, memory sanitizer visuals, and multi-threaded core profiling into a zero-latency native desktop environment.",
    price: 5499,
    previousPrice: 7999,
    rating: 4.9,
    reviewCount: 428,
    platforms: ["Windows", "macOS", "Linux"],
    licenseType: "Perpetual License (1-Year Free Updates)",
    version: "v4.2.1-lts",
    releaseDate: "Oct 2026",
    architecture: "x86_64, aarch64, riscv64",
    sha256Checksum: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    downloadSize: "284 MB installer",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows 11 / macOS 13+ / Ubuntu 22.04 LTS+",
      ram: "16 GB recommended (8 GB minimum)",
      cpu: "Quad-core x86_64 or Apple Silicon M-series",
      storage: "1.2 GB SSD space"
    },
    visualType: "terminal",
    accentColor: "#00F076",
    badge: "FEATURED IDE",
    featured: true,
    features: [
      "Real-time eBPF visual execution graph",
      "Sub-millisecond thread contention analyzer",
      "Hardware breakpoint & ring-buffer logger",
      "Native zero-overhead compiler wrapper",
      "Offline license validation token"
    ],
    whatIsIncluded: [
      "Perpetual desktop client license for 2 developer machines",
      "CLI tools and headless CI/CD debugger runners",
      "12 months of prioritized patch and architecture updates",
      "Offline cryptographic license key (.vkey file)"
    ]
  },
  {
    id: "aegisroot-antivirus",
    name: "AegisRoot Antivirus Pro",
    tag: "AI ANTIVIRUS & MALWARE SHIELD",
    category: "Security & Antivirus",
    needCategory: "security",
    shortDesc: "Next-gen AI antivirus engine with zero-day heuristic scanning, rootkit terminator, and real-time ransomware shield.",
    fullDesc: "AegisRoot Antivirus Pro provides comprehensive real-time protection against polymorphic viruses, trojans, spyware, keyloggers, and stealth rootkits. Its ultra-lightweight heuristic engine uses less than 40MB of RAM and executes instantaneous zero-day behavioral neutralization without slowing down gaming or compilation.",
    price: 1999,
    previousPrice: 2999,
    rating: 4.9,
    reviewCount: 1240,
    platforms: ["Windows", "macOS", "Android"],
    licenseType: "1-Year Multi-Device (3 Devices)",
    version: "v8.4.2",
    releaseDate: "Oct 2026",
    architecture: "x86_64, aarch64",
    sha256Checksum: "4f7a8109bcde902234aa67123910ef87a5441b4421cc89920198deac6210b429",
    downloadSize: "88 MB compact",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows 10/11 (64-bit), macOS 12+, Android 10+",
      ram: "2 GB RAM (sub-40MB runtime footprint)",
      cpu: "Any modern processor",
      storage: "300 MB available space"
    },
    visualType: "shield",
    accentColor: "#00F076",
    badge: "TOP ANTIVIRUS",
    featured: true,
    securityDetails: {
      devicesSupported: "3 Devices (expandable to 10)",
      protectionLevel: "Kernel-level Zero-Day Behavioral Defense",
      engine: "Dual Heuristic AI + Micro-Signature Cloudless",
      duration: "1 Year License (Auto-Renewal Available)"
    },
    features: [
      "Sub-40MB ultra-lightweight memory footprint",
      "Kernel-level rootkit and spyware eliminator",
      "Instant rollback journal for unauthorized crypto-lockers",
      "Automated USB & external storage sanitization",
      "Zero pop-ups and dedicated silent gaming mode"
    ],
    whatIsIncluded: [
      "3-Device license keys for Windows, Mac, and Android",
      "24/7 automated threat definition updates",
      "Bootable emergency virus disinfection rescue USB image",
      "Priority customer and security engineering support"
    ]
  },
  {
    id: "ciphernest-security",
    name: "CipherNest Security",
    tag: "ZERO-TRUST SUITE",
    category: "Security & Antivirus",
    needCategory: "security",
    shortDesc: "Zero-trust endpoint defense suite with heuristic intrusion detection and offline credential vault.",
    fullDesc: "Defend endpoints and local infrastructure against behavioral ransomware, memory injections, and rogue network probes. CipherNest operates strictly with local threat models without telemetry surveillance or cloud dependency, maintaining air-gapped cryptographic integrity.",
    price: 2899,
    previousPrice: 4199,
    rating: 4.8,
    reviewCount: 892,
    platforms: ["Windows", "macOS", "Linux", "Android"],
    licenseType: "1-Year Multi-Device (5 Seats)",
    version: "v6.0.4",
    releaseDate: "Sep 2026",
    architecture: "x86_64, arm64",
    sha256Checksum: "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e",
    downloadSize: "142 MB client",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows 10/11, macOS 12+, Linux kernel 5.15+",
      ram: "4 GB RAM",
      cpu: "Dual-core 2.0 GHz+",
      storage: "500 MB fast storage"
    },
    visualType: "shield",
    accentColor: "#00F076",
    badge: "MOST POPULAR",
    featured: true,
    securityDetails: {
      devicesSupported: "5 Devices included (expandable)",
      protectionLevel: "Military-Grade Endpoint Protection",
      engine: "Local Heuristic AI + Kernel Sandboxing",
      duration: "1 Year Standard (Instant Key)"
    },
    features: [
      "Instant behavioral ransomware rollback buffer",
      "Zero-telemetry local credential enclave",
      "Hardware YubiKey & FIDO2 passkey bridge",
      "Live socket and promiscuous packet monitor",
      "Automated ephemeral honeypot generator"
    ],
    whatIsIncluded: [
      "5-seat digital license keys for desktop & mobile",
      "Emergency recovery bootable ISO toolkit",
      "Automated daily threat definition updates",
      "1-Year 24/7 technical incident hotline"
    ]
  },
  {
    id: "vectorstack-pro",
    name: "VectorStack Pro",
    tag: "PARAMETRIC DESIGN",
    category: "Design & Creative",
    needCategory: "creative",
    shortDesc: "Parametric UI/UX engine with automated token generation, canvas GPU acceleration, and WebAssembly export.",
    fullDesc: "Designed for interface architects and design engineers who crave code-grade vector fidelity. VectorStack converts visual layouts directly to pure CSS, React/Vue tokens, and optimized SVG code trees with zero design debt.",
    price: 4299,
    previousPrice: 5999,
    rating: 4.9,
    reviewCount: 615,
    platforms: ["Windows", "macOS"],
    licenseType: "Perpetual License (Single Seat)",
    version: "v3.8.0",
    releaseDate: "Oct 2026",
    architecture: "Apple Silicon, x86_64 AVX2",
    sha256Checksum: "2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef9f8b1b0ca32",
    downloadSize: "410 MB bundle",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows 11 (64-bit) / macOS Sonoma+",
      ram: "16 GB RAM with dedicated GPU",
      cpu: "Intel i5/AMD Ryzen 5 or Apple M1+",
      storage: "2 GB SSD"
    },
    visualType: "vector",
    accentColor: "#00E5FF",
    badge: "PARAMETRIC STUDIO",
    featured: true,
    features: [
      "GPU-accelerated 120 FPS infinite canvas",
      "Automated design system token pipeline",
      "Bidirectional Figma and code-tree sync",
      "Sub-pixel vector curve mathematical optimizer",
      "Direct WebAssembly shader export"
    ],
    whatIsIncluded: [
      "Perpetual commercial use license",
      "Library of 4,000+ technical UI components",
      "Export plugins for React, Tailwind, and Flutter",
      "Priority feature roadmap voting rights"
    ]
  },
  {
    id: "taskcircuit",
    name: "TaskCircuit",
    tag: "WORKFLOW AUTOMATION",
    category: "Productivity",
    needCategory: "productivity",
    shortDesc: "Keyboard-first workflow automation pipeline linking local shell scripts, webhooks, and team calendars.",
    fullDesc: "Bridge the gap between raw shell scripts and high-level team automation. TaskCircuit executes localized triggers, cron timers, and asynchronous data transformation pipelines with visual telemetry and instant keyboard controls.",
    price: 1899,
    previousPrice: 2499,
    rating: 4.7,
    reviewCount: 340,
    platforms: ["Windows", "macOS", "Linux", "Web"],
    licenseType: "Annual Commercial License",
    version: "v2.4.2",
    releaseDate: "Aug 2026",
    architecture: "Universal 64-bit",
    sha256Checksum: "19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7",
    downloadSize: "78 MB lightweight",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Any modern desktop OS",
      ram: "2 GB RAM",
      cpu: "Any 1 GHz processor",
      storage: "200 MB"
    },
    visualType: "workflow",
    accentColor: "#FFB800",
    badge: "WORKFLOW SUITE",
    featured: true,
    features: [
      "Sub-10ms global command palette",
      "Local script dispatcher (Python, Bash, Node, PowerShell)",
      "Encrypted secret keychain with zero cloud sync",
      "Deterministic DAG execution pipeline visualizer",
      "Multi-monitor status bar widget"
    ],
    whatIsIncluded: [
      "Commercial annual license for unlimited automations",
      "Access to 250+ pre-built integration recipes",
      "Cloud webhook relay tunnel access",
      "Email & Discord community support"
    ]
  },
  {
    id: "dataforge-utility",
    name: "DataForge Utility",
    tag: "ETL & SCHEMA ENGINE",
    category: "Utilities",
    needCategory: "developer",
    shortDesc: "High-throughput database migration, JSON-to-Parquet conversion, and automated synthetic schema generator.",
    fullDesc: "Process gigabytes of unstructured JSON, CSV, and SQL dumps in seconds without exhausting RAM. DataForge leverages memory-mapped streaming pipelines and Rust-backed parsers to cleanse, validate, and convert massive datasets.",
    price: 3199,
    previousPrice: 4499,
    rating: 4.8,
    reviewCount: 219,
    platforms: ["Windows", "macOS", "Linux"],
    licenseType: "Single Seat Perpetual",
    version: "v5.1.0",
    releaseDate: "Sep 2026",
    architecture: "x86_64, arm64",
    sha256Checksum: "3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855e",
    downloadSize: "64 MB native",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows 10/11, macOS 12+, Linux",
      ram: "8 GB RAM (16 GB for >50GB datasets)",
      cpu: "Multi-core 64-bit CPU",
      storage: "1 GB scratch space"
    },
    visualType: "circuit",
    accentColor: "#00F076",
    badge: "HIGH THROUGHPUT",
    featured: true,
    features: [
      "12,000,000 rows/sec streaming conversion",
      "Automated PII detection and cryptographic masking",
      "DuckDB and Apache Arrow integration",
      "Diff & schema drift audit generator",
      "Native CLI & headless server mode"
    ],
    whatIsIncluded: [
      "Perpetual executable with lifetime single-device license",
      "Command-line binaries for Windows, Mac, and Linux",
      "Standard schema dictionary pack",
      "Direct ticket support with core developers"
    ]
  },
  {
    id: "atlas-technical-library",
    name: "Atlas Technical Library",
    tag: "8-VOLUME COMPENDIUM",
    category: "E-books & Guides",
    needCategory: "developer",
    shortDesc: "Comprehensive 8-volume digital compendium on distributed consensus, eBPF observability, and cloud primitives.",
    fullDesc: "The definitive masterwork for senior infrastructure architects and systems programmers. Authored by industry veteran engineers, Atlas spans 1,800+ meticulously illustrated pages accompanied by 45 executable code sandboxes.",
    price: 1499,
    previousPrice: 2299,
    rating: 5.0,
    reviewCount: 512,
    platforms: ["PDF", "EPUB", "Kindle", "Web"],
    licenseType: "Lifetime Digital Access + Code Repos",
    version: "2026 Edition (Rev 3)",
    releaseDate: "Oct 2026",
    architecture: "Digital DRM-free Asset",
    sha256Checksum: "7d1b327b5e40e69b596200234a413d7d4c72d56a31c59bb7f1082c5f74e6f9d2",
    downloadSize: "420 MB PDF + Repos",
    imageUrl: "https://images.unsplash.com/photo-1532012164546-f432f2e37b73?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Any PDF/ePub reader or web browser",
      ram: "N/A",
      cpu: "N/A",
      storage: "500 MB space"
    },
    visualType: "book",
    accentColor: "#FF5E7E",
    badge: "BESTSELLER EBOOK",
    featured: true,
    features: [
      "1,800+ pages of high-density technical analysis",
      "45 runnable Docker-based consensus sandboxes",
      "Printable architectural blueprint posters (Vector SVG)",
      "Free lifetime errata and revised edition downloads",
      "Private GitHub repository access for discussion"
    ],
    whatIsIncluded: [
      "DRM-Free PDF (watermarked with your cryptographic ID)",
      "Interactive EPUB & Kindle-optimized mobi",
      "Private Git repo token for sandbox codebases",
      "Audio commentary files for key architectural chapters"
    ]
  },
  {
    id: "sentinelwall-enterprise",
    name: "SentinelWall Enterprise",
    tag: "NETWORK FIREWALL",
    category: "Security & Antivirus",
    needCategory: "security",
    shortDesc: "Next-gen network packet inspection, DNS sinkholing, and automated malware sandbox quarantine.",
    fullDesc: "Enterprise-grade packet inspection and intrusion prevention condensed into an elegant interface. SentinelWall establishes an active ring-0 network barrier that halts zero-day exploits, unauthorized DNS egress, and botnet command-and-control handshakes.",
    price: 6999,
    previousPrice: 9999,
    rating: 4.9,
    reviewCount: 310,
    platforms: ["Windows", "macOS", "Linux"],
    licenseType: "2-Year Commercial (10 Nodes)",
    version: "v4.5.0",
    releaseDate: "Sep 2026",
    architecture: "x86_64, arm64",
    sha256Checksum: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    downloadSize: "210 MB installer",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows Server / Windows 11 / Linux (Debian, RHEL) / macOS",
      ram: "8 GB RAM",
      cpu: "Quad-core 2.4 GHz+",
      storage: "2 GB SSD"
    },
    visualType: "shield",
    accentColor: "#00F076",
    badge: "ENTERPRISE FIREWALL",
    featured: false,
    securityDetails: {
      devicesSupported: "10 Nodes / Servers included",
      protectionLevel: "Ring-0 Network Boundary Inspection",
      engine: "Deep Packet DPI + Real-time Sinkhole",
      duration: "2 Years Extended Support"
    },
    features: [
      "Deep Packet Inspection at wire speeds (>10Gbps)",
      "Zero-Day sandbox sandbox detonator",
      "Encrypted DNS-over-HTTPS sinkhole",
      "Hardware firewall sync (OPNsense, pfSense)",
      "Automated compliance audit reports (SOC2, ISO27001)"
    ],
    whatIsIncluded: [
      "10-node commercial deployment license",
      "Hardware gateway agent firmware",
      "2-Year live threat feed subscription",
      "Dedicated security engineer onboarding call"
    ]
  },
  {
    id: "ghostshield-guard",
    name: "GhostShield Threat Guard",
    tag: "NETWORK PRIVACY & DNS",
    category: "Security & Antivirus",
    needCategory: "security",
    shortDesc: "Comprehensive privacy and threat barrier with automated phishing protection, encrypted DNS, and tracker sinkhole.",
    fullDesc: "GhostShield creates an impenetrable boundary between your workstations and malicious internet telemetry. It blocks telemetry beacons, phishing domains, and malicious drive-by downloads at the packet layer with military-grade DNS-over-HTTPS encryption.",
    price: 1699,
    previousPrice: 2499,
    rating: 4.8,
    reviewCount: 640,
    platforms: ["Windows", "macOS", "Linux", "iOS", "Android"],
    licenseType: "1-Year Unlimited Devices",
    version: "v3.6.0",
    releaseDate: "Sep 2026",
    architecture: "Universal 64-bit & ARM",
    sha256Checksum: "c1829e701a23849f1295b77821049ecbb481a890982312bca0921098efba4312",
    downloadSize: "52 MB native",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "All desktop & mobile operating systems",
      ram: "1 GB RAM",
      cpu: "Any CPU",
      storage: "150 MB"
    },
    visualType: "shield",
    accentColor: "#00E5FF",
    badge: "PRIVACY SHIELD",
    featured: false,
    securityDetails: {
      devicesSupported: "Unlimited family & workstation devices",
      protectionLevel: "Encrypted DNS-over-HTTPS & Phishing Wall",
      engine: "Real-time Malicious Domain Sinkhole",
      duration: "1 Year Standard"
    },
    features: [
      "Blocks 99.9% of known phishing and ransomware domains",
      "Encrypted DoH and DoT protocol shielding",
      "Zero logging with Swiss privacy jurisdiction compliance",
      "Local hosts-file firewall synchronizer",
      "One-click VPN integration bridge"
    ],
    whatIsIncluded: [
      "Unlimited device activation license",
      "Cross-platform desktop & mobile apps",
      "Custom DNS filtering ruleset editor",
      "Quarterly threat intelligence briefings"
    ]
  },
  {
    id: "kryptonpass-vault",
    name: "KryptonPass Key Enclave",
    tag: "OFFLINE CREDENTIAL VAULT",
    category: "Security & Antivirus",
    needCategory: "security",
    shortDesc: "Air-gapped credential and SSH key vault with zero-knowledge AES-256 encryption and biometric authentication.",
    fullDesc: "Never trust browser password storage or cloud vaults with your master credentials. KryptonPass secures your passwords, SSH private keys, 2FA seeds, and API secrets inside a local encrypted enclave backed by Argon2id memory-hard key derivation.",
    price: 1499,
    previousPrice: 2199,
    rating: 4.9,
    reviewCount: 810,
    platforms: ["Windows", "macOS", "Linux"],
    licenseType: "Perpetual License (Single User)",
    version: "v4.1.0",
    releaseDate: "Oct 2026",
    architecture: "x86_64, Apple Silicon M-series",
    sha256Checksum: "90b2138a7c2901928471bc6293810efa82931bcdd82736192847291038bc2910",
    downloadSize: "44 MB native",
    imageUrl: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows 10/11, macOS 12+, Linux",
      ram: "2 GB RAM",
      cpu: "Any 64-bit CPU",
      storage: "100 MB"
    },
    visualType: "shield",
    accentColor: "#FFB800",
    badge: "KEY ENCLAVE",
    featured: false,
    securityDetails: {
      devicesSupported: "Up to 3 local workstations",
      protectionLevel: "AES-256 GCM + Argon2id Enclave",
      engine: "Local Hardware Token & YubiKey Bridge",
      duration: "Perpetual Lifetime Access"
    },
    features: [
      "Zero cloud sync - 100% local encrypted database",
      "Hardware security key (YubiKey / FIDO2) native bridge",
      "Automated password breach and reuse auditor",
      "Secure developer clipboard wiping with auto-lock",
      "One-click SSH agent integration"
    ],
    whatIsIncluded: [
      "Perpetual single-user license for 3 workstations",
      "CLI secret injection tool (`kp run -- command`)",
      "Browser extension companion (DRM-free)",
      "Free lifetime minor and major version updates"
    ]
  },
  {
    id: "omnisync-vault",
    name: "OmniSync Vault",
    tag: "COLD-STORAGE BACKUP",
    category: "Utilities",
    needCategory: "business",
    shortDesc: "End-to-end encrypted file versioning with deduplication, cold-storage replication, and instant snapshot restore.",
    fullDesc: "Total control over mission-critical backups. OmniSync fragments and encrypts your local files with AES-256 GCM before dispatching to your chosen S3, B2, or private NAS storage, guaranteeing zero data snooping or loss.",
    price: 2199,
    previousPrice: 2999,
    rating: 4.8,
    reviewCount: 780,
    platforms: ["Windows", "macOS", "Linux", "NAS"],
    licenseType: "1-Year Unlimited Vault License",
    version: "v3.1.2",
    releaseDate: "Jul 2026",
    architecture: "x86_64, armv7, aarch64",
    sha256Checksum: "4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a",
    downloadSize: "48 MB native",
    imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows, macOS, Linux, Synology/QNAP NAS",
      ram: "2 GB RAM",
      cpu: "Any 64-bit CPU",
      storage: "150 MB"
    },
    visualType: "circuit",
    accentColor: "#00E5FF",
    badge: "BACKUP RESILIENCE",
    featured: false,
    features: [
      "Client-side zero-knowledge AES-256 encryption",
      "Block-level delta chunking & deduplication",
      "Multi-destination mirroring (Local + S3 + Wasabi)",
      "Point-in-time ransomware rollback snapshots",
      "Lightweight background daemon with sub-1% CPU"
    ],
    whatIsIncluded: [
      "1-Year license for up to 3 local workstations",
      "Unlimited client storage connector plugins",
      "Automated integrity verification cron tools",
      "Priority restore assistance guarantee"
    ]
  },
  {
    id: "hexadocs-api-studio",
    name: "HexaDocs API Studio",
    tag: "API RUNTIME & SPEC",
    category: "Developer Tools",
    needCategory: "developer",
    shortDesc: "Spec-driven API prototyping, mock runtime server, and OpenAPI 3.1 interactive documentation generator.",
    fullDesc: "Eliminate API communication drift. HexaDocs acts as the single source of truth for contract-driven engineering teams, providing ultra-fast local mock servers, schema diffing, and automated SDK generators in TypeScript, Go, and Python.",
    price: 3499,
    previousPrice: 4899,
    rating: 4.7,
    reviewCount: 188,
    platforms: ["Windows", "macOS", "Linux"],
    licenseType: "Team License (5 Developers)",
    version: "v2.9.4",
    releaseDate: "Aug 2026",
    architecture: "x86_64, arm64",
    sha256Checksum: "ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d",
    downloadSize: "115 MB installer",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows 10/11, macOS 12+, Linux",
      ram: "4 GB RAM",
      cpu: "Dual-core CPU",
      storage: "400 MB"
    },
    visualType: "terminal",
    accentColor: "#FFB800",
    badge: "API STUDIO",
    featured: false,
    features: [
      "OpenAPI 3.1 & AsyncAPI visual editor",
      "Zero-code dynamic response mock engine",
      "Automated schema contract testing pipeline",
      "Type-safe client SDK generation in 8 languages",
      "Git-backed spec versioning and PR reviews"
    ],
    whatIsIncluded: [
      "5-Developer team seat license",
      "Self-hosted documentation portal generator",
      "CI/CD spec linting CLI tool",
      "All minor and major updates for 12 months"
    ]
  },
  {
    id: "aurasound-spatial-daw",
    name: "AuraSound Spatial DAW",
    tag: "AUDIO & SOUND DESIGN",
    category: "Design & Creative",
    needCategory: "creative",
    shortDesc: "Ultra-low-latency 64-bit digital audio workstation tailored for game audio, binaural mixing, and procedural Foley.",
    fullDesc: "Construct three-dimensional auditory environments with surgical precision. AuraSound integrates native spatial ambisonic panners, non-destructive spectral audio editors, and game engine audio middleware bridges (Wwise, FMOD).",
    price: 7499,
    previousPrice: 10999,
    rating: 4.9,
    reviewCount: 142,
    platforms: ["Windows", "macOS"],
    licenseType: "Perpetual Professional License",
    version: "v5.0.1",
    releaseDate: "Oct 2026",
    architecture: "64-bit ASIO, CoreAudio, AVX-512",
    sha256Checksum: "8f434346648f6b96df89dda901c5176b10f6002961fcf80e02d4f540e7920182",
    downloadSize: "850 MB installer",
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Windows 11 (ASIO soundcard recommended) / macOS 13+",
      ram: "16 GB RAM minimum",
      cpu: "Intel i7/i9 or Apple Silicon M2/M3",
      storage: "5 GB SSD workspace"
    },
    visualType: "audio",
    accentColor: "#00F076",
    badge: "PRO AUDIO",
    featured: false,
    features: [
      "3D Spatial object panner with Dolby Atmos support",
      "Zero-latency DSP sandbox engine",
      "VST3 & AU64 plugin host with crash isolation",
      "Procedural sound generator for game designers",
      "Hardware MIDI controller surface auto-mapping"
    ],
    whatIsIncluded: [
      "Perpetual professional license (up to 3 machines)",
      "Sound design asset pack (15GB procedural libraries)",
      "Game engine export bridges (Unreal 5 & Unity)",
      "Lifetime forum & technician support"
    ]
  },
  {
    id: "sprintboard-agile-engine",
    name: "SprintBoard Agile Engine",
    tag: "ENGINEERING TRACKER",
    category: "Business",
    needCategory: "business",
    shortDesc: "Self-hostable or cloud-hybrid release engineering tracker with Git commit linking and velocity analytics.",
    fullDesc: "Built for software engineering managers and technical founders who dislike bloated Jira instances. SprintBoard operates with git-native commit linkage, automated burndown matrices, and cycle-time telemetry directly synced with your repos.",
    price: 2699,
    previousPrice: 3599,
    rating: 4.6,
    reviewCount: 295,
    platforms: ["Web", "Windows", "macOS"],
    licenseType: "Annual Commercial (Unlimited Projects)",
    version: "v4.0.0",
    releaseDate: "Sep 2026",
    architecture: "Cross-Platform Electron + Web Docker",
    sha256Checksum: "5c83f5b721869e5d4cb5f448c66e2c366ff809ec0a38210356247c40608fa8fa",
    downloadSize: "120 MB package",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Any modern OS with Docker or desktop client",
      ram: "4 GB RAM",
      cpu: "Dual core",
      storage: "500 MB"
    },
    visualType: "workflow",
    accentColor: "#00E5FF",
    badge: "AGILE TRACKER",
    featured: false,
    features: [
      "Git commit and Pull Request auto-issue transitions",
      "Real-time DORA metrics dashboard (Deploy freq, lead time)",
      "Offline-first board synchronization",
      "Sprint retrospectives and velocity predictive model",
      "No per-user licensing fees"
    ],
    whatIsIncluded: [
      "Commercial license for entire company (unlimited seats)",
      "Docker compose self-hosting package",
      "Desktop companion application for macOS and Windows",
      "12 months of guaranteed security upgrades"
    ]
  },
  {
    id: "systems-architecture-handbook",
    name: "Systems Architecture Handbook",
    tag: "TECHNICAL ARCHITECTURE",
    category: "E-books & Guides",
    needCategory: "developer",
    shortDesc: "Interactive engineering guide for designing fault-tolerant multi-region payment and identity pipelines.",
    fullDesc: "Learn the exact architectures behind high-volume fintech and streaming networks. Over 600 pages of battle-tested design patterns covering Raft consensus, two-phase commits, idempotency keys, and multi-region failover protocols.",
    price: 1299,
    previousPrice: 1999,
    rating: 4.9,
    reviewCount: 430,
    platforms: ["PDF", "EPUB", "Audiobook", "Web"],
    licenseType: "Lifetime Access & Errata",
    version: "Third Edition (2026)",
    releaseDate: "Sep 2026",
    architecture: "Digital PDF & Markdown Repo",
    sha256Checksum: "2aae6c35c94fcfb415dbe95f408b9ce91ee846edef54109fa4f011b697805626",
    downloadSize: "230 MB bundle",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    systemRequirements: {
      os: "Any PDF / EPUB reader",
      ram: "N/A",
      cpu: "N/A",
      storage: "250 MB"
    },
    visualType: "book",
    accentColor: "#FFB800",
    badge: "ARCHITECTURE GUIDE",
    featured: false,
    features: [
      "32 complete architecture blueprints with source specs",
      "Chaos engineering scenario playbooks",
      "Interactive latency budget calculator spreadsheets",
      "Accompanying Go & Rust consensus benchmark suites",
      "Audio version narrated by principal architects"
    ],
    whatIsIncluded: [
      "DRM-Free vector PDF + EPUB format",
      "Full high-res printable system architecture schematics",
      "Access to private GitHub discussion repository",
      "All future errata and updated editions"
    ]
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Solutions", count: 15, icon: "cpu" },
  { id: "Developer Tools", name: "Developer Tools", count: 3, icon: "terminal", desc: "Compilers, systems IDEs, APIs, and debuggers" },
  { id: "Security & Antivirus", name: "Security & Antivirus", count: 5, icon: "shield-check", desc: "Antivirus, zero-trust shields, firewalls, and credential vaults" },
  { id: "Productivity", name: "Productivity", count: 1, icon: "zap", desc: "Keyboard pipelines, local triggers, and workflows" },
  { id: "Design & Creative", name: "Design", count: 2, icon: "pen-tool", desc: "Parametric UI vector tools and spatial audio DAWs" },
  { id: "Business", name: "Business", count: 1, icon: "briefcase", desc: "Release engineering, DORA metrics, and agile pipelines" },
  { id: "Utilities", name: "Utilities", count: 2, icon: "wrench", desc: "High-speed schema parsers, backups, and deduplication" },
  { id: "E-books & Guides", name: "E-books", count: 2, icon: "book-open", desc: "In-depth distributed systems and consensus compendiums" }
];

export const NEEDS = [
  { id: "all", label: "All Needs", desc: "Complete digital distribution catalog" },
  { id: "developer", label: "For developers", desc: "Low-level IDEs, compiler toolchains, schema engines & architecture" },
  { id: "creative", label: "For creative professionals", desc: "Vector parametric engines and high-precision spatial audio" },
  { id: "business", label: "For business teams", desc: "Engineering velocity boards, backup integrity, and team systems" },
  { id: "security", label: "For privacy and security", desc: "Endpoint defense, zero-trust sandboxes, and packet inspection" },
  { id: "productivity", label: "For everyday productivity", desc: "Keyboard automation, workflow pipelines, and local triggers" }
];

export const FORMAT_INR = (amount) => {
  return "₹" + amount.toLocaleString("en-IN");
};
