<script>
  import Card from '../ui/Card.svelte';
  import Title from '../ui/Title.svelte';
  import Badge from '../ui/Badge.svelte';
  import Paragraph from '../ui/Paragraph.svelte';

  export let level = null;
  export let isCurrent = false;
  export let isCompleted = false;

  const difficultyVariants = {
    easy: 'primary',
    medium: 'warning',
    hard: 'danger',
    expert: 'danger'
  };

  const difficultyLabels = {
    easy: 'Facile',
    medium: 'Moyen',
    hard: 'Difficile',
    expert: 'Expert'
  };
</script>

{#if level}
  <Card glowing={isCurrent} borderAnimate={isCurrent}>
    <div class="flex items-center justify-between mb-3">
      <Title level={4} color={isCurrent ? 'primary' : 'light'}>
        Niveau {level.id}
      </Title>
      <div class="flex gap-2 items-center">
        <Badge variant={difficultyVariants[level.difficulty]}>
          {difficultyLabels[level.difficulty]}
        </Badge>
        {#if isCompleted}
          <Badge variant="success">
            <i class="fas fa-check"></i> Complété
          </Badge>
        {/if}
      </div>
    </div>

    <Paragraph size="sm" color={isCurrent ? 'primary' : 'gray'}>
      {level.name}
    </Paragraph>

    <div class="mt-3 flex gap-4 text-sm text-ctos-gray">
      <span>
        <i class="fas fa-trophy"></i> {level.basePoints} pts
      </span>
      {#if level.timeLimit}
        <span>
          <i class="fas fa-clock"></i> {Math.floor(level.timeLimit / 60)}:{(level.timeLimit % 60).toString().padStart(2, '0')}
        </span>
      {:else}
        <span>
          <i class="fas fa-infinity"></i> Illimité
        </span>
      {/if}
    </div>
  </Card>
{/if}
