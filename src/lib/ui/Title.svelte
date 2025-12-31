<script>
  export let level = 1; // 1-6 for h1-h6
  export let glitch = false;
  export let color = 'primary'; // primary, danger, success, light

  const colors = {
    primary: 'text-ctos-primary',
    danger: 'text-ctos-danger',
    success: 'text-ctos-success',
    light: 'text-ctos-light'
  };
</script>

{#if level === 1}
  <h1 class="font-display font-bold text-4xl md:text-5xl {colors[color]} {glitch ? 'glitch' : ''} uppercase tracking-wide">
    <slot />
  </h1>
{:else if level === 2}
  <h2 class="font-display font-bold text-3xl md:text-4xl {colors[color]} {glitch ? 'glitch' : ''} uppercase tracking-wide">
    <slot />
  </h2>
{:else if level === 3}
  <h3 class="font-display font-semibold text-2xl md:text-3xl {colors[color]} {glitch ? 'glitch' : ''} uppercase tracking-wide">
    <slot />
  </h3>
{:else if level === 4}
  <h4 class="font-display font-semibold text-xl md:text-2xl {colors[color]} {glitch ? 'glitch' : ''} uppercase">
    <slot />
  </h4>
{:else if level === 5}
  <h5 class="font-display font-medium text-lg md:text-xl {colors[color]} {glitch ? 'glitch' : ''} uppercase">
    <slot />
  </h5>
{:else}
  <h6 class="font-display font-medium text-base md:text-lg {colors[color]} {glitch ? 'glitch' : ''} uppercase">
    <slot />
  </h6>
{/if}
