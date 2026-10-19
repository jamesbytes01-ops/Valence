/**
 * Generates custom, rich, vector-based technical artwork for each software product
 */
export function getProductArtwork(type, accent = "#00F076") {
  switch (type) {
    case "terminal":
      return `
        <svg class="product-visual-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#080A0F"/>
          <g opacity="0.15">
            <line x1="0" y1="40" x2="400" y2="40" stroke="#2B3648" stroke-width="1"/>
            <line x1="0" y1="80" x2="400" y2="80" stroke="#2B3648" stroke-width="1"/>
            <line x1="0" y1="120" x2="400" y2="120" stroke="#2B3648" stroke-width="1"/>
            <line x1="0" y1="160" x2="400" y2="160" stroke="#2B3648" stroke-width="1"/>
            <line x1="0" y1="200" x2="400" y2="200" stroke="#2B3648" stroke-width="1"/>
          </g>
          <!-- Window Chrome -->
          <rect x="24" y="24" width="352" height="192" rx="4" fill="#0E121B" stroke="#222C3D"/>
          <rect x="24" y="24" width="352" height="26" fill="#151B27"/>
          <circle cx="40" cy="37" r="3" fill="#FF5F56"/>
          <circle cx="52" cy="37" r="3" fill="#FFBD2E"/>
          <circle cx="64" cy="37" r="3" fill="#27C93F"/>
          <text x="82" y="40" fill="#5F708A" font-family="JetBrains Mono, monospace" font-size="9">debug_session.ebpf — 64-bit kernel</text>
          
          <!-- Code Lines & Terminal Inspection -->
          <text x="44" y="74" fill="#6A7C96" font-family="JetBrains Mono, monospace" font-size="10">01  fn attach_kprobe(ring: &amp;mut RingBuffer) -&gt; Result&lt;()&gt; {</text>
          <text x="44" y="92" fill="#00E5FF" font-family="JetBrains Mono, monospace" font-size="10">02    let telemetry = bpf::trace_alloc_calls(PID_MASK);</text>
          <text x="44" y="110" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="10">03    telemetry.stream_events(128_000 /* events/sec */);</text>
          <text x="44" y="128" fill="#6A7C96" font-family="JetBrains Mono, monospace" font-size="10">04    inspect_stack_trace(&amp;telemetry.frame_root)?;</text>
          <text x="44" y="146" fill="#889BB5" font-family="JetBrains Mono, monospace" font-size="10">05  }</text>
          
          <!-- Memory Allocation Sparkline Graph -->
          <rect x="44" y="162" width="312" height="38" rx="2" fill="#0A0D14" stroke="#1D2636"/>
          <path d="M48 185 L90 180 L130 188 L170 172 L210 178 L250 166 L290 174 L330 168 L350 170" stroke="${accent}" stroke-width="1.5" fill="none"/>
          <circle cx="250" cy="166" r="3" fill="${accent}"/>
          <text x="54" y="174" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="8">HEAP: 2.14 GB / 0.02ms LATENCY</text>
        </svg>
      `;

    case "shield":
      return `
        <svg class="product-visual-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#080A0F"/>
          <!-- Hexagonal Defense Matrix Grid -->
          <g opacity="0.12" stroke="${accent}" stroke-width="1">
            <polygon points="170,40 190,30 210,30 230,40 230,60 210,70 190,70 170,60"/>
            <polygon points="130,65 150,55 170,55 190,65 190,85 170,95 150,95 130,85"/>
            <polygon points="210,65 230,55 250,55 270,65 270,85 250,95 230,95 210,85"/>
            <polygon points="170,90 190,80 210,80 230,90 230,110 210,120 190,120 170,110"/>
            <polygon points="130,115 150,105 170,105 190,115 190,135 170,145 150,145 130,135"/>
            <polygon points="210,115 230,105 250,105 270,115 270,135 250,145 230,145 210,135"/>
          </g>
          
          <!-- Central Shield Core -->
          <circle cx="200" cy="115" r="70" fill="radial-gradient(circle, rgba(0,240,118,0.1) 0%, transparent 70%)"/>
          <path d="M200 48 L256 70 V122 C256 160 200 186 200 186 C200 186 144 160 144 122 V70 L200 48 Z" fill="#0E1420" stroke="${accent}" stroke-width="2"/>
          <path d="M200 62 L242 78 V120 C242 148 200 170 200 170 C200 170 158 148 158 120 V78 L200 62 Z" fill="#141C2A" stroke="#29394E" stroke-width="1"/>
          
          <!-- Lock Node / Sensor Rings -->
          <circle cx="200" cy="108" r="14" fill="#080A0F" stroke="${accent}" stroke-width="2"/>
          <path d="M196 104 V98 C196 95.8 197.8 94 200 94 C202.2 94 204 95.8 204 98 V104" stroke="${accent}" stroke-width="2"/>
          <circle cx="200" cy="118" r="3" fill="${accent}"/>
          
          <!-- Status Telemetry Badges -->
          <rect x="50" y="196" width="130" height="24" rx="2" fill="#0B1017" stroke="#1D2A3B"/>
          <text x="60" y="212" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="8.5">● ZERO-TRUST SHIELD</text>
          
          <rect x="220" y="196" width="130" height="24" rx="2" fill="#0B1017" stroke="#1D2A3B"/>
          <text x="230" y="212" fill="#00E5FF" font-family="JetBrains Mono, monospace" font-size="8.5">SHA-256 VERIFIED</text>
        </svg>
      `;

    case "vector":
      return `
        <svg class="product-visual-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#080A0F"/>
          <!-- Parametric Ruler Grid -->
          <g opacity="0.12" stroke="#485A75" stroke-width="1">
            <line x1="40" y1="0" x2="40" y2="240"/>
            <line x1="80" y1="0" x2="80" y2="240"/>
            <line x1="120" y1="0" x2="120" y2="240"/>
            <line x1="160" y1="0" x2="160" y2="240"/>
            <line x1="200" y1="0" x2="200" y2="240"/>
            <line x1="240" y1="0" x2="240" y2="240"/>
            <line x1="280" y1="0" x2="280" y2="240"/>
            <line x1="320" y1="0" x2="320" y2="240"/>
            <line x1="360" y1="0" x2="360" y2="240"/>
            <line x1="0" y1="40" x2="400" y2="40"/>
            <line x1="0" y1="80" x2="400" y2="80"/>
            <line x1="0" y1="120" x2="400" y2="120"/>
            <line x1="0" y1="160" x2="400" y2="160"/>
            <line x1="0" y1="200" x2="400" y2="200"/>
          </g>
          
          <!-- Bezier Curves with Control Handles -->
          <path d="M60 160 C 120 40, 200 200, 340 70" stroke="${accent}" stroke-width="2.5" fill="none"/>
          <line x1="60" y1="160" x2="120" y2="40" stroke="#00E5FF" stroke-width="1" stroke-dasharray="3 3"/>
          <circle cx="120" cy="40" r="4" fill="#00E5FF"/>
          <circle cx="60" cy="160" r="5" fill="#080A0F" stroke="${accent}" stroke-width="2"/>
          
          <line x1="340" y1="70" x2="200" y2="200" stroke="#00E5FF" stroke-width="1" stroke-dasharray="3 3"/>
          <circle cx="200" cy="200" r="4" fill="#00E5FF"/>
          <circle cx="340" cy="70" r="5" fill="#080A0F" stroke="${accent}" stroke-width="2"/>

          <!-- Parametric Component Frame Node -->
          <rect x="220" y="110" width="130" height="74" rx="3" fill="#0F1420" stroke="#253247"/>
          <text x="232" y="128" fill="#758AA6" font-family="JetBrains Mono, monospace" font-size="8">&lt;ModalShell /&gt;</text>
          <rect x="232" y="136" width="60" height="6" rx="2" fill="${accent}"/>
          <rect x="232" y="148" width="100" height="4" rx="1" fill="#243144"/>
          <rect x="232" y="156" width="80" height="4" rx="1" fill="#243144"/>
          <rect x="232" y="166" width="30" height="10" rx="2" fill="#00E5FF"/>
        </svg>
      `;

    case "workflow":
      return `
        <svg class="product-visual-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#080A0F"/>
          <!-- Circuit / Automation Pipeline Nodes -->
          <g opacity="0.1">
            <circle cx="200" cy="120" r="90" stroke="#4B5E7A" stroke-width="1"/>
            <circle cx="200" cy="120" r="140" stroke="#4B5E7A" stroke-width="1"/>
          </g>
          
          <!-- Node 1: Trigger -->
          <rect x="30" y="90" width="85" height="55" rx="3" fill="#0F1522" stroke="#28374D"/>
          <text x="40" y="110" fill="#FFA502" font-family="JetBrains Mono, monospace" font-size="8">TRIGGER: GIT</text>
          <text x="40" y="125" fill="#7B8CA4" font-family="JetBrains Mono, monospace" font-size="7.5">commit: #8fa1</text>
          
          <!-- Connector 1 -->
          <path d="M115 117 L160 117" stroke="${accent}" stroke-width="2" stroke-dasharray="4 2"/>
          <polygon points="160,113 166,117 160,121" fill="${accent}"/>

          <!-- Node 2: Pipeline Transformer -->
          <rect x="166" y="80" width="100" height="75" rx="3" fill="#0E1624" stroke="${accent}" stroke-width="1.5"/>
          <rect x="166" y="80" width="100" height="18" fill="#172236"/>
          <text x="176" y="93" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="8">DAG DISPATCH</text>
          <text x="176" y="112" fill="#8E9EB5" font-family="JetBrains Mono, monospace" font-size="7.5">cargo build --rel</text>
          <text x="176" y="124" fill="#00E5FF" font-family="JetBrains Mono, monospace" font-size="7.5">run_sanitizers()</text>
          <text x="176" y="138" fill="#2ED573" font-family="JetBrains Mono, monospace" font-size="7.5">✓ 0.41s Passed</text>

          <!-- Connector 2 -->
          <path d="M266 117 L305 117" stroke="${accent}" stroke-width="2"/>
          <polygon points="305,113 311,117 305,121" fill="${accent}"/>

          <!-- Node 3: Release Target -->
          <rect x="311" y="90" width="60" height="55" rx="3" fill="#0F1522" stroke="#28374D"/>
          <text x="318" y="110" fill="#2ED573" font-family="JetBrains Mono, monospace" font-size="8">DEPLOY</text>
          <text x="318" y="125" fill="#7B8CA4" font-family="JetBrains Mono, monospace" font-size="7.5">AWS Edge</text>
        </svg>
      `;

    case "circuit":
      return `
        <svg class="product-visual-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#080A0F"/>
          <!-- High-throughput Silicon Engine Die -->
          <rect x="120" y="50" width="160" height="140" rx="4" fill="#0E131E" stroke="${accent}" stroke-width="1.5"/>
          <rect x="135" y="65" width="130" height="110" rx="2" fill="#080B10" stroke="#1E283A"/>
          
          <!-- Inner Core Architecture -->
          <rect x="145" y="75" width="50" height="40" fill="#141C2B" stroke="#25354D"/>
          <text x="150" y="95" fill="#00E5FF" font-family="JetBrains Mono, monospace" font-size="7.5">PARSER 0</text>
          <rect x="205" y="75" width="50" height="40" fill="#141C2B" stroke="#25354D"/>
          <text x="210" y="95" fill="#00E5FF" font-family="JetBrains Mono, monospace" font-size="7.5">PARSER 1</text>
          
          <rect x="145" y="125" width="110" height="38" fill="#121A26" stroke="#25354D"/>
          <text x="155" y="142" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="8">STREAM BUS: 12GB/s</text>
          <text x="155" y="154" fill="#7588A3" font-family="JetBrains Mono, monospace" font-size="7">ZERO-COPY DUCKDB MEMORY</text>

          <!-- External Trace Pins -->
          <g stroke="${accent}" stroke-width="1.5" opacity="0.6">
            <line x1="50" y1="80" x2="120" y2="80"/>
            <line x1="50" y1="100" x2="120" y2="100"/>
            <line x1="50" y1="120" x2="120" y2="120"/>
            <line x1="50" y1="140" x2="120" y2="140"/>
            <line x1="50" y1="160" x2="120" y2="160"/>
            
            <line x1="280" y1="80" x2="350" y2="80"/>
            <line x1="280" y1="100" x2="350" y2="100"/>
            <line x1="280" y1="120" x2="350" y2="120"/>
            <line x1="280" y1="140" x2="350" y2="140"/>
            <line x1="280" y1="160" x2="350" y2="160"/>
          </g>
        </svg>
      `;

    case "book":
      return `
        <svg class="product-visual-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#080A0F"/>
          <!-- Technical Blueprint Grid -->
          <g opacity="0.08" stroke="#4C607C" stroke-width="1">
            <line x1="0" y1="30" x2="400" y2="30"/>
            <line x1="0" y1="70" x2="400" y2="70"/>
            <line x1="0" y1="110" x2="400" y2="110"/>
            <line x1="0" y1="150" x2="400" y2="150"/>
            <line x1="0" y1="190" x2="400" y2="190"/>
          </g>
          
          <!-- Isometric Technical Compendium / Codex Volume -->
          <g transform="translate(130, 40)">
            <rect x="0" y="0" width="140" height="160" rx="3" fill="#101724" stroke="#2E3F58" stroke-width="1.5"/>
            <!-- Book Spine Accent -->
            <rect x="0" y="0" width="16" height="160" rx="2" fill="${accent}"/>
            
            <!-- Book Cover Blueprint Schematics -->
            <rect x="26" y="20" width="100" height="120" rx="2" fill="#0A0F18" stroke="#1D2A3D"/>
            <circle cx="76" cy="60" r="24" stroke="${accent}" stroke-width="1.5" stroke-dasharray="3 3"/>
            <polygon points="76,44 88,68 64,68" stroke="#00E5FF" stroke-width="1" fill="none"/>
            <circle cx="76" cy="60" r="3" fill="${accent}"/>
            
            <text x="34" y="105" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="8.5">ATLAS VOL. VIII</text>
            <text x="34" y="118" fill="#7588A3" font-family="JetBrains Mono, monospace" font-size="6.5">DISTRIBUTED SYSTEMS</text>
            <text x="34" y="128" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="6.5">CONSENSUS ARCHITECTURE</text>
          </g>
        </svg>
      `;

    case "audio":
      return `
        <svg class="product-visual-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#080A0F"/>
          <!-- Spatial Ambisonics Sphere -->
          <circle cx="200" cy="115" r="75" stroke="#223044" stroke-width="1" fill="#0A0E16"/>
          <ellipse cx="200" cy="115" rx="75" ry="24" stroke="#1F2C3E" stroke-width="1"/>
          <ellipse cx="200" cy="115" rx="24" ry="75" stroke="#1F2C3E" stroke-width="1"/>
          
          <!-- Sound Wave Spectrum Bars -->
          <g transform="translate(60, 150)">
            <rect x="0" y="-10" width="4" height="20" fill="#243347"/>
            <rect x="8" y="-25" width="4" height="50" fill="#2D4059"/>
            <rect x="16" y="-38" width="4" height="76" fill="#00E5FF"/>
            <rect x="24" y="-55" width="4" height="110" fill="${accent}"/>
            <rect x="32" y="-42" width="4" height="84" fill="${accent}"/>
            <rect x="40" y="-20" width="4" height="40" fill="#00E5FF"/>
            <rect x="48" y="-12" width="4" height="24" fill="#2D4059"/>
          </g>
          <g transform="translate(290, 150)">
            <rect x="0" y="-12" width="4" height="24" fill="#2D4059"/>
            <rect x="8" y="-20" width="4" height="40" fill="#00E5FF"/>
            <rect x="16" y="-45" width="4" height="90" fill="${accent}"/>
            <rect x="24" y="-60" width="4" height="120" fill="${accent}"/>
            <rect x="32" y="-32" width="4" height="64" fill="#00E5FF"/>
            <rect x="40" y="-18" width="4" height="36" fill="#2D4059"/>
          </g>
          
          <!-- 3D Panned Audio Node -->
          <circle cx="220" cy="95" r="9" fill="${accent}" opacity="0.3"/>
          <circle cx="220" cy="95" r="5" fill="${accent}"/>
          <text x="145" y="215" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="8.5">DOLBY ATMOS 7.1.4 BINAURAL DSP</text>
        </svg>
      `;

    default:
      return `
        <svg class="product-visual-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#080A0F"/>
          <rect x="80" y="40" width="240" height="160" rx="4" fill="#0E1420" stroke="${accent}" stroke-width="1.5"/>
          <text x="110" y="125" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="12">VALENCE ENGINE</text>
        </svg>
      `;
  }
}
