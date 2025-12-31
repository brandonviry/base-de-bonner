<script>
  export let glowing = false;
  export let borderAnimate = false;
</script>

<div
  class="
    bg-ctos-dark-lighter
    border-2 border-ctos-secondary
    p-6 rounded-lg
    {glowing ? 'glow' : ''}
    {borderAnimate ? 'border-animate' : ''}
    transition-all duration-300
    scanlines
  "
>
  <slot />
</div>
