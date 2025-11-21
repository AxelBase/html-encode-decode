<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Named vs Numeric Entities: Which Should You Use in 2025? | AxelBase Blog</title>
  <meta name="description" content="A complete comparison of named HTML entities vs numeric ones — readability, compatibility, performance, and when to choose which." />
  <meta property="og:title" content="Named vs Numeric Entities: Which Should You Use? | AxelBase Blog" />
  <meta property="og:description" content="A complete comparison of named HTML entities vs numeric ones — readability, compatibility, performance, and when to choose which." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Named vs Numeric Entities</p>
  </div>

  <article class="prose">
    <h1>Named vs Numeric Entities: Which Should You Use in 2025?</h1>
    <p class="post-meta">Published: November 19, 2025</p>

    <p>Should you write <code>&copy;</code> or <code>&#169;</code>? <code>&euro;</code> or <code>&#8364;</code>? The debate has raged for decades — here’s the definitive answer for modern development.</p>

    <h2>Named Entities (e.g. &amp;copy;, &amp;mdash;)</h2>
    <p>Pros:</p>
    <ul>
      <li>Human readable in source code</li>
      <li>Shorter for common symbols</li>
      <li>Self-documenting intent</li>
    </ul>
    <p>Cons:</p>
    <ul>
      <li>Not all are universally supported (e.g. &amp;apos; missing in HTML4)</li>
      <li>Case-sensitive in XHTML</li>
      <li>Can break when parsed as XML</li>
    </ul>

    <h2>Numeric Entities (e.g. &#169;, &#x1F60A;)</h2>
    <p>Pros:</p>
    <ul>
      <li>100% compatibility across HTML, XML, JSON, and email</li>
      <li>Support every Unicode character</li>
      <li>Never case-sensitive</li>
      <li>Work inside CDATA and script tags</li>
    </ul>

    <h2>Performance Reality</h2>
    <p>Modern browsers parse both equally fast. File size difference is negligible (named entities are often shorter). The real difference is reliability.</p>

    <h2>Our Recommendation</h2>
    <p>Use <strong>named entities for the 100 most common symbols</strong> (copyright, euro, quotes, etc.) — they’re readable and safe in HTML5. Use <strong>numeric for everything else</strong> — especially emojis, mathematical symbols, and rare characters.</p>

    <p>That’s exactly what the AxelBase encoder does automatically: maximum readability with zero risk.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Should I ever use &amp;apos;?</summary>
      <p>Never in HTML5. Use &amp;#39; instead — it’s universally supported.</p>
    </details>
    <details>
      <summary>Are hex and decimal numeric entities different?</summary>
      <p>No. &#xA9; and &#169; are identical. This tool uses hex for consistency.</p>
    </details>

    <p class="italic-note">Readability when possible. Compatibility always.</p>
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
  
  /* Only include these if the post actually uses lists */
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  
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