<script>
  export let size = 'base'; // sm, base, lg
  export let color = 'light'; // primary, light, gray

  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg'
  };

  const colors = {
    primary: 'text-ctos-primary',
    light: 'text-ctos-light',
    gray: 'text-ctos-gray'
  };
</script>

<p class="font-primary {sizes[size]} {colors[color]} leading-relaxed">
  <slot />
</p>
