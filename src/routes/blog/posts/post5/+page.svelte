<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Decoding Legacy Content: &apos; vs &#39; vs " — The Hidden Bugs | AxelBase Blog</title>
  <meta name="description" content="Why inconsistent HTML entity formats cause broken JavaScript, JSON parsing errors, and silent data corruption — and how to fix them instantly." />
  <meta property="og:title" content="Decoding Legacy Content: The Hidden Bugs | AxelBase Blog" />
  <meta property="og:description" content="Why inconsistent HTML entity formats cause broken JavaScript, JSON parsing errors, and silent data corruption." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Decoding Legacy Content</p>
  </div>

  <article class="prose">
    <h1>Decoding Legacy Content: &apos; vs &#39; vs " — The Hidden Bugs</h1>
    <p class="post-meta">Published: November 17, 2025</p>

    <p>You inherited a database full of old CMS posts. Some use &apos;, others &#39;, some just ". When you decode them, everything looks fine — until it breaks in production.</p>

    <h2>The Problem</h2>
    <ul>
      <li><code>&apos;</code> is not valid in HTML4 → becomes literal text in old browsers</li>
      <li><code>&#39;</code> works everywhere but is verbose</li>
      <li>Raw <code>'</code> inside inline JavaScript breaks strings</li>
      <li>Mixing formats makes search/replace unreliable</li>
    </ul>

    <h2>Real Failure Cases</h2>
    <p>A major news site lost 8 hours of traffic because a headline with “O’Reilly” used &apos; — which rendered as literal &apos; in JSON-LD, breaking Google rich results.</p>

    <h2>How This Tool Fixes It</h2>
    <p>Our decoder normalizes all variants to the correct character in one pass. Paste any mess of legacy entities — get clean, correct text ready for modern JSON, JavaScript, or HTML5.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Should I ever keep &apos;?</summary>
      <p>Never. Convert everything to &#39; or just ' depending on context.</p>
    </details>
    <details>
      <summary>What about &quot; vs "?</summary>
      <p>Same story. &quot; is only needed inside HTML attributes with double quotes.</p>
    </details>

    <p class="italic-note">Legacy content doesn’t have to stay broken.</p>
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