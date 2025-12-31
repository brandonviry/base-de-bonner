<script>
  export let text = '';
  export let intensity = 'medium'; // low, medium, high

  const intensities = {
    low: 'animate-pulse-slow',
    medium: 'glitch',
    high: 'glitch animate-pulse'
  };
</script>

<span class="font-display {intensities[intensity]}">
  {text || ''}
  <slot />
</span>
