<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>XSS Prevention: One Line of Encoding That Stops 90% of Attacks | AxelBase Blog</title>
  <meta name="description" content="Reflected, stored, and DOM-based XSS — how proper HTML entity encoding defeats the vast majority of real-world injection attacks." />
  <meta property="og:title" content="XSS Prevention: One Line of Encoding | AxelBase Blog" />
  <meta property="og:description" content="How proper HTML entity encoding defeats 90% of real-world XSS attacks." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>XSS Prevention</p>
  </div>

  <article class="prose">
    <h1>XSS Prevention: One Line of Encoding That Stops 90% of Attacks</h1>
    <p class="post-meta">Published: November 16, 2025</p>

    <p>According to OWASP 2025, improper output encoding remains in the top 3 web vulnerabilities. The fix? One line:</p>
    <p><code>element.innerHTML = encodeHtml(userInput);</code></p>

    <h2>Why It Works</h2>
    <p>XSS requires the browser to interpret user input as code. HTML entity encoding turns <code>&lt;script&gt;</code> into harmless text: <code>&amp;lt;script&amp;gt;</code>.</p>

    <h2>Attack Types Stopped</h2>
    <ul>
      <li>Reflected XSS (URL parameters)</li>
      <li>Stored XSS (comments, forums)</li>
      <li>DOM-based XSS via innerHTML</li>
    </ul>

    <h2>When CSP and Frameworks Aren’t Enough</h2>
    <p>Content Security Policy blocks inline scripts, but many legacy apps can’t use it. Frameworks help only if you stay in their rendering path. Direct DOM writes bypass everything — except encoding.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Isn’t XSS dead in 2025?</summary>
      <p>No. 68% of reported breaches in 2024 still involved some form of injection.</p>
    </details>

    <p class="italic-note">The simplest defense is often the strongest.</p>
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