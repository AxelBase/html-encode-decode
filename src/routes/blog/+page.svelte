<script lang="ts">
  import { base } from '$app/paths';

// src/routes/blog/+page.svelte (inside the script)
const posts = [
  {
    href: '/blog/posts/post1',
    title: 'Why HTML Entity Encoding Is Still Essential in 2025',
    description: 'Even with modern frameworks, raw text output can break HTML or enable XSS. Learn why proper encoding remains a must-have skill.'
  },
  {
    href: '/blog/posts/post2',
    title: 'The Most Dangerous Characters in HTML (and How to Escape Them)',
    description: 'From & to < > " \' and non-breaking spaces — these 7 characters cause 99% of rendering and security bugs.'
  },
  {
    href: '/blog/posts/post3',
    title: 'Named vs Numeric Entities: Which Should You Use?',
    description: 'When to prefer &copy; over &#169;, readability vs compatibility, and real performance differences.'
  },
  {
    href: '/blog/posts/post4',
    title: 'Real-Time Encoding at 50,000 Characters: How We Achieved <10ms',
    description: 'Behind the scenes of the ultra-fast encoder powering this tool — no libraries, pure TypeScript, zero lag.'
  },
  {
    href: '/blog/posts/post5',
    title: 'Decoding Legacy Content: &apos; vs &#39; vs " — The Hidden Bugs',
    description: 'Why inconsistent entity formats break JavaScript, JSON, and innerHTML — and how to normalize them instantly.'
  },
  {
    href: '/blog/posts/post6',
    title: 'XSS Prevention: One Line of Encoding That Stops 90% of Attacks',
    description: 'Real-world examples where encodeHtml() prevented reflected, stored, and DOM-based XSS.'
  },
  {
    href: '/blog/posts/post7',
    title: 'From Idea to GitHub Pages: Building This Tool with SvelteKit',
    description: 'A complete walkthrough of creating a blazing-fast, zero-backend utility using SvelteKit + static adapter.'
  }
];
</script>

<svelte:head>
  <title>Blog | AxelBase Insights</title>
  <meta name="description" content="Explore insights, tutorials, and updates for the AxelBase Markdown Meta Tag Tester." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: AxelBase Insights</h1>
    <p class="subtitle">
      Explore tutorials, updates, and best practices for the Markdown Meta Tag Tester. Learn about new features, usage tips, and more from our <a href="https://github.com/axelbase/html-encode-decode" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>
