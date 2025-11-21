<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | HTML Entity Encoder / Decoder – AxelBase</title>
  <meta name="description" content="We collect zero data. Everything runs in your browser. No tracking, no cookies, no servers — complete privacy by design." />
  <meta property="og:title" content="Privacy Policy – AxelBase HTML Entity Tool" />
  <meta property="og:description" content="Zero data collection. 100% client-side. Your text never leaves your device." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 21, 2025</p>

    <p>Welcome to the <strong>AxelBase HTML Entity Encoder / Decoder</strong> — a completely <strong>client-side</strong>, <strong>privacy-first</strong> web utility. We believe privacy should not be a feature; it should be the default.</p>

    <h2>1. We Collect Nothing</h2>
    <p><strong>This tool does not collect, store, transmit, or process any personal data — ever.</strong></p>
    <ul>
      <li><strong>No IP logging</strong> — We don’t know you’re here</li>
      <li><strong>No analytics</strong> — No Google Analytics, Plausible, or any tracking</li>
      <li><strong>No cookies</strong> — Not even session cookies</li>
      <li><strong>No input storage</strong> — Your text exists only in your browser’s memory</li>
      <li><strong>No server</strong> — This is a static site hosted on GitHub Pages</li>
    </ul>

    <h2>2. How It Works (100% In Your Browser)</h2>
    <p>All encoding and decoding happens <strong>exclusively on your device</strong> using pure TypeScript. When you type or paste text:</p>
    <ul>
      <li>It is processed instantly by JavaScript running locally</li>
      <li>No data is sent over the internet</li>
      <li>Copy-to-clipboard and examples work via browser APIs only</li>
      <li>Even Bootstrap CSS/JS is loaded from a trusted CDN — but no tracking occurs</li>
    </ul>

    <h2>3. Offline & Saveable</h2>
    <p>You can save this page (Ctrl+S) and use it forever offline. It will work exactly the same — because there is no backend to connect to.</p>

    <h2>4. Third-Party Services</h2>
    <p>The only external request is Bootstrap 5 from <code>jsDelivr</code> (a public CDN). It serves static files only — no tracking, no profiling.</p>

    <h2>5. Children’s Privacy</h2>
    <p>This tool is safe and appropriate for all ages. No personal information is ever requested or collected.</p>

    <h2>6. Changes to This Policy</h2>
    <p>Any updates will appear on this page with a new effective date. Given our zero-data model, changes are extremely unlikely.</p>

    <h2>7. Contact</h2>
    <p>Questions? Open an issue on our <a href="https://github.com/yourusername/html-encode-decode" target="_blank" rel="noopener">GitHub repository</a>.</p>

    <p class="italic-note">
      <strong>Your data never leaves your device.</strong><br>
      That’s not a promise — it’s how the tool is built.
    </p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 0 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: var(--text-secondary); font-size: .9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: .5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: .5rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; font-size: 1.1rem; }
</style>