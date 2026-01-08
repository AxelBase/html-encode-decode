<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="custom-navbar">
  <nav class="container" style="display: flex; justify-content: space-between; align-items: center;">
   
    <div style="display: flex; align-items: center; gap: 1rem;">
      <a href="{base}/" aria-label="Home">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
      </a>
      <a class="navbar-brand-text" href="{base}/">AxelBase</a>
     
      <div class="bmac-nav-item ms-3" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="button-text">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav-links-container" style="list-style: none; display: flex; align-items: center; gap: 1.5rem; margin: 0;">
      <li><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
      <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main class="container py-4">
  <slot />
</main>

<footer class="custom-footer">
  <div>
    <strong>&copy; AxelBase Markdown to HTML Converter – {currentYear}</strong>
  </div>
  <div>
    <a href="{base}/privacy" class="footer-link">Privacy</a>
    <a href="{base}/terms" class="footer-link">Terms</a>
  </div>
</footer>

<style>
  /* Existing File 2 styles remain unchanged except for the BMAC section below */

  /* --- Navigation Bar Styles (unchanged) --- */
  .navbar-brand-logo {
    width: 32px;
    height: 32px;
    transition: transform 0.2s;
  }
  .navbar-brand-logo:hover {
    transform: rotate(15deg);
  }

  .navbar-brand-text {
    font-weight: 800;
    font-size: 1.25rem;
    color: var(--capri-blue);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .nav-link-custom {
    text-decoration: none;
    color: var(--border-color);
    font-weight: 600;
    font-size: 1rem;
    padding: 0.5rem;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
  }

  .nav-link-custom:hover {
    color: var(--capri-blue);
    border-bottom: 2px solid var(--capri-blue);
  }

  /* --- BMAC Button & Dropdown - Using File 1's style adapted to File 2's neobrutalism theme --- */
  .bmac-nav-item {
    position: relative;
  }

  .bmac-button {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--capri-blue);
    color: white;
    border: 2px solid var(--border-color);
    font-weight: bold;
    padding: 0.4rem 1rem;
    font-size: 0.95rem;
    cursor: pointer;
    box-shadow: 3px 3px 0px var(--border-color);
    transition: all 0.3s ease;
    border-radius: 999px; /* pill shape from File 1 */
  }

  .bmac-button:hover {
    background: var(--capri-dark);
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px var(--border-color);
  }

  .bmac-button svg {
    width: 20px;
    height: 20px;
  }

  .button-text {
    white-space: nowrap;
  }

  .bmac-dropdown {
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: white;
    border: 2px solid var(--border-color);
    box-shadow: 4px 4px 0px var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    z-index: 1100;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: #333;
    text-decoration: none;
    font-size: 0.98rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--capri-blue);
    color: white;
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--capri-blue);
    font-size: 1.1rem;
  }

  .bmac-dropdown a:hover .amount {
    color: white;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--capri-blue);
    border-top: 1px solid #eee;
    justify-content: center !important;
  }

  .bmac-dropdown .custom-amount:hover {
    color: white;
  }

  /* Responsiveness for button text on small screens */
  @media (max-width: 480px) {
    .button-text {
      display: none;
    }
    .bmac-button {
      padding: 0.4rem 0.8rem;
    }
  }
</style>