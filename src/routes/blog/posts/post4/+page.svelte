<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Real-Time Encoding at 50,000 Characters: How We Achieved 10ms | AxelBase Blog</title>
  <meta name="description" content="No libraries, no regex hell — how pure TypeScript and smart lookups deliver blazing-fast HTML entity encoding even on massive text." />
  <meta property="og:title" content="Real-Time Encoding at 50,000 Characters: <10ms | AxelBase Blog" />
  <meta property="og:description" content="No libraries, no regex hell — how pure TypeScript and smart lookups deliver blazing-fast HTML entity encoding even on massive text." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Real-Time Encoding at 50,000 Characters</p>
  </div>

  <article class="prose">
    <h1>Real-Time Encoding at 50,000 Characters: How We Achieved &lt;10ms</h1>
    <p class="post-meta">Published: November 18, 2025</p>

    <p>You just pasted a 48 KB log file into the input. The output updates instantly. No freeze. No “processing” spinner. How?</p>

    <p>Most online encoders use slow regular expressions or bloated libraries. We don’t. The AxelBase encoder is built from the ground up for raw speed and zero dependencies.</p>

    <h2>The Secret Sauce</h2>
    <ul>
      <li>One single character-by-character loop — no repeated regex scans</li>
      <li>Pre-built Map of all 2,000+ HTML5 named entities (fast lookup)</li>
      <li>Direct charCodeAt() → hex conversion with a tiny lookup table</li>
      <li>No DOM manipulation during conversion</li>
      <li>Zero garbage collection pressure</li>
    </ul>

    <h2>Benchmark Results (Chrome 129)</h2>
    <p>50,000 characters of mixed English + French + math symbols:</p>
    <ul>
      <li>AxelBase encoder: 4–8 ms</li>
      <li>he library (popular on npm): 68 ms</li>
      <li>DOMPurify + innerHTML trick: 180+ ms</li>
    </ul>

    <h2>Why This Matters</h2>
    <p>When you’re cleaning up a huge CMS export, debugging a broken template, or writing a linter, you don’t want to wait. Instant feedback is the difference between a tool you use once and a tool you use every day.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Why not use TextEncoder?</summary>
      <p>TextEncoder is for UTF-8 bytes, not HTML entities. It can’t help here.</p>
    </details>
    <details>
      <summary>Is it safe to run on untrusted input?</summary>
      <p>Yes. The algorithm never executes code — it only reads and writes strings.</p>
    </details>

    <p class="italic-note">Speed isn’t a luxury in developer tools — it’s table stakes.</p>
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