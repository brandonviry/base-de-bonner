<script>
  import { onMount, onDestroy } from 'svelte';
  import Paragraph from '../ui/Paragraph.svelte';

  export let seconds = 0;
  export let running = false;

  let interval;

  $: minutes = Math.floor(seconds / 60);
  $: secs = seconds % 60;
  $: formattedTime = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  onMount(() => {
    if (running) {
      interval = setInterval(() => {
        seconds++;
      }, 1000);
    }
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });

  $: {
    if (running && !interval) {
      interval = setInterval(() => {
        seconds++;
      }, 1000);
    } else if (!running && interval) {
      clearInterval(interval);
      interval = null;
    }
  }
</script>

<div class="flex items-center gap-2">
  <i class="fas fa-stopwatch text-ctos-primary text-xl"></i>
  <Paragraph color="primary" size="lg">
    <span class="font-mono font-bold">{formattedTime}</span>
  </Paragraph>
</div>
