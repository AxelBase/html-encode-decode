<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>From Idea to GitHub Pages: Building This Tool with SvelteKit | AxelBase Blog</title>
  <meta name="description" content="A complete behind-the-scenes look at creating a blazing-fast, zero-backend HTML entity utility using SvelteKit and static adapter." />
  <meta property="og:title" content="Building This Tool with SvelteKit | AxelBase Blog" />
  <meta property="og:description" content="How we built a privacy-first, offline-capable HTML entity encoder in pure SvelteKit." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Building This Tool with SvelteKit</p>
  </div>

  <article class="prose">
    <h1>From Idea to GitHub Pages: Building This Tool with SvelteKit</h1>
    <p class="post-meta">Published: November 15, 2025</p>

    <p>We needed a fast, private, beautiful HTML entity encoder. Instead of settling for slow online tools that phone home, we built exactly what we wanted — in under 48 hours.</p>

    <h2>Tech Stack</h2>
    <ul>
      <li>SvelteKit + adapter-static → 100% static output</li>
      <li>Bootstrap 5 via CDN → no build step</li>
      <li>Pure TypeScript encoding logic → zero dependencies</li>
      <li>GitHub Pages → free, instant, global CDN</li>
    </ul>

    <h2>Why Static?</h2>
    <p>No server = no logging, no tracking, no rate limits. Works offline. Loads instantly worldwide.</p>

    <h2>Lessons Learned</h2>
    <p>You don’t need a backend for 99% of developer tools. SvelteKit’s static adapter + a few smart optimizations give you native-app performance in a bookmarkable URL.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I fork and customize it?</summary>
      <p>Absolutely. The entire source is open and MIT licensed.</p>
    </details>

    <p class="italic-note">Great tools should be simple, fast, and respect your privacy. We practice what we preach.</p>
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