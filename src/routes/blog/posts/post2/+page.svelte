<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>The Most Dangerous Characters in HTML (and How to Escape Them) | AxelBase Blog</title>
  <meta name="description" content="Discover the 7 characters that break HTML most often — and how proper entity encoding prevents layout issues and XSS attacks." />
  <meta property="og:title" content="The Most Dangerous Characters in HTML | AxelBase Blog" />
  <meta property="og:description" content="Discover the 7 characters that break HTML most often — and how proper entity encoding prevents layout issues and XSS attacks." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>The Most Dangerous Characters in HTML</p>
  </div>

  <article class="prose">
    <h1>The Most Dangerous Characters in HTML (and How to Escape Them)</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>Only seven characters can destroy your HTML document or open security holes. Master these — and you prevent 99% of rendering and injection bugs.</p>

    <h2>The Dirty Seven</h2>
    <ol>
      <li><code>&lt;</code> → <code>&amp;lt;</code> — Ends tags prematurely</li>
      <li><code>&gt;</code> → <code>&amp;gt;</code> — Can close tags early</li>
      <li><code>&amp;</code> → <code>&amp;amp;</code> — Breaks existing entities</li>
      <li><code>"</code> → <code>&amp;quot;</code> — Breaks attributes</li>
      <li><code>'</code> → <code>&amp;#39;</code> or <code>&amp;apos;</code> — Dangerous in JavaScript</li>
      <li><code>`</code> → <code>&amp;#96;</code> — Template literal killer</li>
      <li><code>&nbsp;</code> (U+00A0) → <code>&amp;nbsp;</code> or <code>&#160;</code> — Invisible layout breaker</li>
    </ol>

    <h2>Real Examples That Broke Production</h2>
    <p>A user named “Tom & Jerry” in a leaderboard → table collapses.<br>A testimonial with curly quotes “smart” → JavaScript syntax error.<br>A French résumé with naïve → garbled text on older browsers.</p>

    <h2>How This Tool Handles Them</h2>
    <p>Our encoder intelligently chooses named entities when available and universally supported (e.g., &amp;quot;), falling back to numeric for maximum compatibility. It also detects and normalizes non-breaking spaces, zero-width characters, and right-to-left overrides that cause invisible damage.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Why not just use textContent everywhere?</summary>
      <p><code>textContent</code> strips all HTML. When you need to preserve formatting while staying safe, encoding is the only solution.</p>
    </details>
    <details>
      <summary>Are numeric entities always safer?</summary>
      <p>Yes. They work in every context: HTML, XML, JSON, and even inside CDATA sections.</p>
    </details>

    <p class="italic-note">Know your enemies. Encode early. Sleep peacefully.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 0 4rem; }
  .breadcrumbs { 
    display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; 
    font-size: .9rem; color: var(--text-secondary); 
  }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  
  .prose { line-height: 1.8; }
  .prose .post-meta { 
    color: var(--text-secondary); font-size: .9rem; margin-bottom: 2rem; 
    border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; 
  }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: .5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: .5rem; }
  

  .prose details { 
    background: var(--secondary-bg); border: 1px solid var(--border-color); 
    border-radius: 6px; padding: 1rem; margin-bottom: 1rem; 
  }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary { 
    cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; 
  }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { 
    content: '+'; margin-right: .75rem; color: var(--accent-primary); 
    font-weight: bold; transition: transform .2s; 
  }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { 
    margin-top: 1rem; padding-left: 1.5rem; 
    border-left: 2px solid var(--accent-primary); color: var(--text-secondary); 
  }
  
  .prose .italic-note { 
    font-style: italic; color: var(--text-secondary); text-align: center; 
    margin-top: 3rem; font-size: 1.1rem; 
  }
</style>