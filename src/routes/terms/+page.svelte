<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | HTML Entity Encoder / Decoder – AxelBase</title>
  <meta name="description" content="Free, open-source HTML entity tool. Use anywhere, no warranty, no liability — pure utility." />
  <meta property="og:title" content="Terms & Conditions – AxelBase" />
  <meta property="og:description" content="Free tool. No warranty. Use at your own risk. MIT licensed." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a> <span>/</span> <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Last Updated: November 21, 2025</p>

    <p>By using the <strong>AxelBase HTML Entity Encoder / Decoder</strong> ("the Tool"), you agree to these Terms.</p>

    <h2>1. Nature of the Tool</h2>
    <p>This is a <strong>free, open-source</strong>, client-side web utility released under the <strong>MIT License</strong>. It is provided <strong>"as is"</strong> with no warranty of any kind.</p>

    <h2>2. Permitted Use</h2>
    <p>You may:</p>
    <ul>
      <li>Use the Tool for personal or commercial purposes</li>
      <li>Fork, modify, and redistribute under the MIT License</li>
      <li>Use it offline after saving the page</li>
      <li>Embed or link to it</li>
    </ul>

    <h2>3. Prohibited Use</h2>
    <p>You may not:</p>
    <ul>
      <li>Claim the Tool is your own original work</li>
      <li>Use it for illegal purposes</li>
      <li>Attempt to reverse-engineer or exploit the code maliciously</li>
    </ul>

    <h2>4. No Warranty</h2>
    <p>The Tool is provided <strong>without warranty of any kind</strong>, express or implied.</p>

    <h2>5. Limitation of Liability</h2>
    <p>In no event shall the authors be liable for any damages arising from use of the Tool.</p>

    <h2>6. Changes</h2>
    <p>We may update these Terms at any time. Continued use constitutes acceptance.</p>

    <p class="italic-note">
      <strong>This tool exists to help you — not to control you.</strong><br>
      Use freely. Share freely. Improve freely.
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