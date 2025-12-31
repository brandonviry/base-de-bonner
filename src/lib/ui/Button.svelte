<script>
  export let variant = 'primary'; // primary, secondary, danger, success
  export let size = 'md'; // sm, md, lg
  export let disabled = false;
  export let onClick = () => {};

  const variants = {
    primary: 'bg-gradient-primary hover:glow border-ctos-primary text-ctos-dark',
    secondary: 'bg-ctos-dark-lighter hover:glow border-ctos-secondary text-ctos-primary',
    danger: 'bg-gradient-danger hover:glow-danger border-ctos-danger text-white',
    success: 'bg-ctos-success hover:glow-success border-ctos-success text-ctos-dark'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
</script>

<button
  class="
    {variants[variant]}
    {sizes[size]}
    font-display font-bold
    border-2
    uppercase tracking-wider
    transition-all duration-300
    hover:scale-105
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    scanlines
  "
  {disabled}
  on:click={onClick}
>
  <slot />
</button>
