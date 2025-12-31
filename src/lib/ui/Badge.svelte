<script>
  export let variant = 'primary'; // primary, danger, success, warning
  export let size = 'md'; // sm, md, lg

  const variants = {
    primary: 'bg-ctos-primary text-ctos-dark',
    danger: 'bg-ctos-danger text-white',
    success: 'bg-ctos-success text-ctos-dark',
    warning: 'bg-ctos-accent text-white'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };
</script>

<span
  class="
    {variants[variant]}
    {sizes[size]}
    font-display font-bold
    rounded
    uppercase tracking-wider
    inline-block
  "
>
  <slot />
</span>
