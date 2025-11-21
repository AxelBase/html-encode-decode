<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const paypalUsername = 'AxelLab427'; // REMEMBER TO UPDATE THIS LATER
  const donationAmounts = [1, 3, 5, 10];
  
  let isDropdownOpen = false;
  const currentYear = new Date().getFullYear();

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
        <button class="bmac-button" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
          </svg>
          Buy me a coffee
        </button>
  
        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            {#each donationAmounts as amount}
              <a 
                href="https://paypal.me/{paypalUsername}/{amount}" 
                target="_blank" 
                rel="noopener noreferrer" 
                on:click={closeDropdown}
              >
                ${amount}
              </a>
            {/each}
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