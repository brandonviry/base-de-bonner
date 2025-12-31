<script>
  import { fade, fly } from 'svelte/transition';
  import Card from '../ui/Card.svelte';
  import Paragraph from '../ui/Paragraph.svelte';

  export let message = '';
  export let type = 'info'; // info, success, error, easter-egg
  export let visible = false;

  const icons = {
    info: 'fa-info-circle',
    success: 'fa-check-circle',
    error: 'fa-times-circle',
    'easter-egg': 'fa-gift'
  };

  const colors = {
    info: 'text-ctos-primary',
    success: 'text-ctos-success',
    error: 'text-ctos-danger',
    'easter-egg': 'text-ctos-accent'
  };
</script>

{#if visible && message}
  <div
    class="fixed top-4 right-4 z-50 max-w-md"
    transition:fly={{ y: -50, duration: 300 }}
  >
    <Card glowing={type === 'easter-egg'}>
      <div class="flex items-start gap-3">
        <i class="fas {icons[type]} text-2xl {colors[type]}"></i>
        <Paragraph color={type === 'error' ? 'light' : 'light'}>
          {message}
        </Paragraph>
      </div>
    </Card>
  </div>
{/if}
