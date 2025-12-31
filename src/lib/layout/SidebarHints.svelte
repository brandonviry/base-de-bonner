<script>
  import Title from '../ui/Title.svelte';
  import HintCard from '../components/HintCard.svelte';

  export let level = null;
  export let attemptsMade = 0;
</script>

{#if level}
  <aside class="w-full px-4 md:px-8 py-8">
    <div class="max-w-md mx-auto md:mx-0">
      <Title level={3} color="primary">
        <i class="fas fa-lightbulb"></i>
        Indices
      </Title>

      <div class="mt-6 space-y-4">
        {#each level.hints as hint, index}
          <HintCard
            hint={hint.text}
            {index}
            unlocked={attemptsMade >= hint.unlockAfter}
          />
        {/each}
      </div>
    </div>
  </aside>
{/if}
