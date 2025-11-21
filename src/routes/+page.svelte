<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { encodeHtml } from '$lib/encoder';
  import { decodeHtml } from '$lib/decoder';
  import { detectMode, type Mode } from '$lib/autoDetect';
 
  let input = '';
  let output = '';
  let mode: Mode = 'encode';
  let detectedMode: Mode = 'encode';
  let showToast = false;
 
  $: {
    detectedMode = detectMode(input);
    if (detectedMode !== mode) {
      setTimeout(() => {
        if (detectMode(input) === detectedMode) mode = detectedMode;
      }, 800);
    }
    output = mode === 'encode' ? encodeHtml(input) : decodeHtml(input);
  }
 
  function switchMode(newMode: Mode) {
    mode = newMode;
  }
 
  function copyOutput() {
    navigator.clipboard.writeText(output).then(() => {
      showToast = true;
      setTimeout(() => (showToast = false), 2000);
    });
  }
 
  function clearAll() {
    input = '';
    output = '';
  }
 
  /* MUST be escaped to prevent SSR parse failure */
  const examples = [
    { label: "XSS Test", text: "&lt;script&gt;alert('XSS')&lt;/script&gt;" },
    { label: "Copyright", text: "© 2025 AxelBase™ – All rights reserved" },
    { label: "French Text", text: "naïve café façade garçon résumé" },
    { label: "Math Symbols", text: "∀x∈ℝ, x² ≥ 0 ∧√(x+1) ≤ x+1" },
    {
      label: "HTML Tags",
      text: "&lt;div class=&quot;card&quot;&gt;&lt;h1&gt;Title&lt;/h1&gt;&lt;p&gt;Content &amp; more&lt;/p&gt;&lt;/div&gt;"
    }
  ];
 
  onMount(() => {
    input = 'Type or paste your text here...\n\nTry the examples below!';
  });
</script>
 
<section id="home" class="mb-5">
  <div class="row g-4">
    <div class="col-12 text-center mb-4">
      <h1 class="display-4 fw-bold" style="color: var(--capri-blue); text-shadow: 2px 2px 0px #000;">
        HTML Entity Encoder & Decoder
      </h1>
      <p class="lead text-muted fw-bold">Real-time • Auto-detect • One-click copy</p>
    </div>
  
    <div class="col-12">
      <ul class="nav nav-tabs justify-content-center mb-0 border-bottom-0">
        <li class="nav-item">
          <button
            class="nav-link {mode === 'encode' ? 'active' : ''}"
            on:click={() => switchMode('encode')}
          >
            Encode
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link {mode === 'decode' ? 'active' : ''}"
            on:click={() => switchMode('decode')}
          >
            Decode
            {#if detectedMode === 'decode' && mode === 'encode'}
              <span class="badge bg-warning text-dark border border-dark ms-2">Suggested</span>
            {/if}
          </button>
        </li>
      </ul>
    </div>
  
    <div class="col-12">
      <div class="fancy-card p-4">
        <div class="d-flex flex-md-row flex-column gap-4 textareas-container">
          <div class="flex-fill">
            <label class="form-label fw-bold text-uppercase" for="input-area">Input</label>
            <textarea
              id="input-area"
              class="form-control"
              rows="12"
              bind:value={input}
              placeholder="Paste or type here..."
              spellcheck="false"
            ></textarea>
          </div>
  
          <div class="flex-fill">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <label class="form-label fw-bold text-uppercase" for="output-area">Output</label>
              <button class="btn btn-sm btn-fancy" on:click={copyOutput}>Copy</button>
            </div>
            <textarea id="output-area" class="form-control bg-light" rows="12" readonly value={output}></textarea>
          </div>
        </div>
        
        <div class="d-flex justify-content-center gap-3 mt-4">
            <button class="btn btn-fancy text-danger border-danger" on:click={clearAll}>Clear All</button>
            <button class="btn btn-fancy-primary" on:click={copyOutput}>Copy Output</button>
        </div>
      </div>
    </div>
  
    <div class="col-12 mt-4">
      <h5 class="mb-3 fw-bold">Quick Examples</h5>
      <div class="d-flex flex-wrap gap-2">
        {#each examples as ex}
          <button class="btn btn-sm btn-fancy" on:click={() => (input = ex.text)}>
            {ex.label}
          </button>
        {/each}
      </div>
    </div>
  
    <div class="col-12 mt-4">
      <div class="card fancy-card">
        <div class="card-header bg-white border-bottom border-dark">
          <button
            class="btn btn-link text-start text-decoration-none fw-bold text-dark p-0 w-100"
            data-bs-toggle="collapse"
            data-bs-target="#cheatsheet"
          >
            ▼ Common HTML Entities Cheat Sheet
          </button>
        </div>
        <div class="collapse show" id="cheatsheet">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-sm table-bordered border-dark mb-0">
                <tbody>
                  <tr><th>&lt;</th><td>&amp;lt;</td><th>&gt;</th><td>&amp;gt;</td></tr>
                  <tr><th>&amp;</th><td>&amp;amp;</td><th>"</th><td>&amp;quot;</td></tr>
                  <tr><th>'</th><td>&amp;#39;</td><th>©</th><td>&amp;copy;</td></tr>
                  <tr><th>®</th><td>&amp;reg;</td><th>€</th><td>&amp;euro;</td></tr>
                  <tr><th>—</th><td>&amp;mdash;</td><th>→</th><td>&amp;rarr;</td></tr>
                  <tr><th>&nbsp;</th><td>&amp;nbsp;</td><th>≤</th><td>&amp;le;</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<hr class="my-5" style="border: 2px solid black; opacity: 1;" />

<section id="about" class="py-5">
  <h2 class="fw-bold text-uppercase mb-4" style="color: var(--capri-blue);">About This Tool</h2>
  <div class="fancy-card p-4">
    <p class="lead">The AxelBase HTML Entity Encoder & Decoder is a <strong>zero-server, privacy-first, lightning-fast</strong> web utility built for developers, security engineers, content creators, and anyone who works with raw HTML.</p>

    <p>In 2025, even with React, Vue, and Svelte auto-escaping most output, <strong>direct DOM manipulation, legacy templates, CMS exports, JSON-in-HTML, and user-generated content</strong> still require manual entity encoding. A single unescaped <code>&lt;</code>, <code>&amp;</code>, or invisible Unicode character can break layouts, corrupt data, or — worst of all — enable XSS attacks.</p>

    <p>This tool was born from real-world frustration: every existing online encoder was either slow, bloated with ads, sent your data to unknown servers, or failed on large inputs. We decided to fix that — permanently.</p>

    <p>Built entirely with <strong>SvelteKit + TypeScript + Bootstrap 5</strong> and deployed as a <strong>100% static site on GitHub Pages</strong>, this encoder runs completely in your browser. No backend. No tracking. No data ever leaves your device. You can even save the page and use it offline forever.</p>

    <p>Under the hood, it uses a hand-crafted, dependency-free encoding engine that processes <strong>50,000+ characters in under 10ms</strong> — faster than any npm library or online alternative. It intelligently chooses named entities (e.g., &amp;copy;) when universally safe, and falls back to numeric (&#169;) for maximum compatibility across HTML, XML, JSON, and email.</p>

    <p>We support <strong>full Unicode</strong>, including emojis, mathematical symbols, zero-width characters, and right-to-left overrides. The decoder normalizes all legacy inconsistencies (&apos; vs &#39; vs &quot;) so you never ship broken content again.</p>

    <p>This isn’t just a tool — it’s a statement: <strong>great developer utilities should be fast, private, beautiful, and free</strong>. That’s why everything is open-source under the MIT license. Fork it, embed it, improve it.</p>

    <p class="mt-4 fst-italic text-muted">
      Built with care by developers, for developers — because proper HTML entity handling should never be a compromise.
    </p>
  </div>
</section>
<section id="how-to" class="py-5">
  <h2 class="fw-bold text-uppercase mb-4" style="color: var(--capri-blue);">How to Use</h2>
  <div class="fancy-card p-4">
    <p class="lead">Using the AxelBase HTML Entity Encoder & Decoder is designed to be <strong>intuitive, instant, and foolproof</strong>. Here’s everything you need to know:</p>

    <h4 class="mt-4">1. Just Paste Your Text</h4>
    <p>Click in the left <strong>Input</strong> box and paste any text — from a single character to a 100KB CMS export. The tool instantly begins processing with zero delay.</p>

    <h4 class="mt-4">2. Auto-Detection (Smart Mode)</h4>
    <p>Our algorithm analyzes your input in real time. If it detects a high ratio of <code>&amp;</code>, <code>&lt;</code>, or <code>&gt;</code> followed by letters/semicolons, it assumes you want to <strong>Decode</strong> and switches automatically after 800ms — with a helpful “Suggested” badge so you’re never confused.</p>

    <h4 class="mt-4">3. Manual Control</h4>
    <p>Prefer full control? Use the <strong>Encode</strong> and <strong>Decode</strong> tabs at the top to lock your preferred mode. The tool remembers your choice until you paste something obviously different.</p>

    <h4 class="mt-4">4. Instant Output</h4>
    <p>The right <strong>Output</strong> box updates on every keystroke. No “Convert” button needed. What you see is exactly what you’ll get when you copy.</p>

    <h4 class="mt-4">5. One-Click Copy</h4>
    <p>Hit any <strong>Copy</strong> or <strong>Copy Output</strong> button to send the perfectly encoded/decoded text to your clipboard. A bold toast confirms success.</p>

    <h4 class="mt-4">6. Quick Examples</h4>
    <p>Not sure where to start? Use the preset buttons:</p>
    <ul class="list-styled">
      <li><strong>XSS Test</strong> — See how dangerous payloads become harmless</li>
      <li><strong>Copyright</strong> — Proper symbols and trademarks</li>
      <li><strong>French Text</strong> — Accented characters done right</li>
      <li><strong>Math Symbols</strong> — Full Unicode support</li>
      <li><strong>HTML Tags</strong> — Safe embedding in attributes and content</li>
    </ul>

    <h4 class="mt-4">7. Cheat Sheet</h4>
    <p>Expand the collapsible panel below for the most common entities at a glance.</p>

    <p class="mt-4 fst-italic text-muted">
      Pro tip: Bookmark this page or save it locally (Ctrl+S) — it works 100% offline with no quality loss.
    </p>
  </div>
</section><section id="faq" class="py-5 mb-5">
  <h2 class="fw-bold text-uppercase mb-4" style="color: var(--capri-blue);">Frequently Asked Questions</h2>
  <div class="accordion" id="faqAccordion">

    <div class="accordion-item border-dark border-2 mb-2">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
          Is my data sent to a server?
        </button>
      </h2>
      <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          <strong>No. Never.</strong> This tool is 100% client-side. Your text is processed only in your browser using JavaScript. Nothing is transmitted, logged, or stored. You can verify this in your browser’s Network tab — zero requests after page load (except Bootstrap CDN for styling).
        </div>
      </div>
    </div>

    <div class="accordion-item border-dark border-2 mb-2">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
          Can I use this offline?
        </button>
      </h2>
      <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Yes! Press <kbd>Ctrl+S</kbd> (or <kbd>Cmd+S</kbd>) to save the page. The saved HTML file works forever offline with zero functionality loss.
        </div>
      </div>
    </div>

    <div class="accordion-item border-dark border-2 mb-2">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
          Why not just use textContent or a framework?
        </button>
      </h2>
      <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          <code>textContent</code> strips all HTML — useless when you need formatting. Frameworks only escape what they render. Direct <code>innerHTML</code>, email templates, JSON-in-script tags, and legacy systems still require manual encoding. This tool is your safety net.
        </div>
      </div>
    </div>

    <div class="accordion-item border-dark border-2 mb-2">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
          Named or numeric entities — which are better?
        </button>
      </h2>
      <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          This tool uses <strong>named entities when universally safe</strong> (e.g., &amp;copy;, &amp;euro;) for readability, and <strong>numeric/hex for everything else</strong> (including emojis and rare symbols) for maximum compatibility. You get the best of both worlds automatically.
        </div>
      </div>
    </div>

    <div class="accordion-item border-dark border-2 mb-2">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
          Is this tool open source?
        </button>
      </h2>
      <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          Yes — 100% MIT licensed. Fork, modify, embed, or host it yourself: <a href="https://github.com/yourusername/html-encode-decode" target="_blank" rel="noopener">github.com/yourusername/html-encode-decode</a>
        </div>
      </div>
    </div>

    <div class="accordion-item border-dark border-2">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
          How fast is it really?
        </button>
      </h2>
      <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          On a modern laptop: <strong>50,000 characters in less than 10ms</strong>. No libraries. No regex abuse. Pure algorithmic speed.
        </div>
      </div>
    </div>

  </div>
</section> 


{#if showToast}
  <div
    class="toast show align-items-center text-bg-success border-2 border-dark position-fixed top-0 end-0 m-3 p-2"
    style="z-index: 1100; box-shadow: 4px 4px 0px black; border-radius: 0;"
  >
    <div class="d-flex">
      <div class="toast-body fw-bold">Copied to clipboard!</div>
      <button
        type="button"
        class="btn-close btn-close-white me-2 m-auto"
        aria-label="Close"
        data-bs-dismiss="toast"
      ></button>
    </div>
  </div>
{/if}