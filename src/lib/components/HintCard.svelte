<script>
  import Card from '../ui/Card.svelte';
  import Paragraph from '../ui/Paragraph.svelte';

  export let hint = '';
  export let index = 0;
  export let unlocked = false;
</script>

<Card glowing={unlocked}>
  <div class="flex items-start gap-3">
    <div class="text-2xl {unlocked ? 'text-ctos-primary' : 'text-ctos-gray'}">
      <i class="fas {unlocked ? 'fa-lightbulb' : 'fa-lock'}"></i>
    </div>
    <div class="flex-1">
      {#if unlocked}
        <Paragraph color="light">
          {hint}
        </Paragraph>
      {:else}
        <Paragraph color="light">
          Indice #{index + 1} - Verrouillé
        </Paragraph>
      {/if}
    </div>
  </div>
</Card>
