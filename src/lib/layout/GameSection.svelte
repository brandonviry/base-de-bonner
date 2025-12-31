<script>
  import Card from '../ui/Card.svelte';
  import Title from '../ui/Title.svelte';
  import Paragraph from '../ui/Paragraph.svelte';
  import Badge from '../ui/Badge.svelte';
  import PasswordField from '../components/PasswordField.svelte';
  import AttemptCounter from '../components/AttemptCounter.svelte';

  export let level = null;
  export let userAnswer = '';
  export let attemptsRemaining = 0;
  export let onSubmit = () => {};
  export let canPlay = true;
</script>

{#if level}
  <section class="w-full px-4 md:px-8 py-8">
    <div class="max-w-4xl mx-auto">
      <Card glowing={true} borderAnimate={true}>
        <!-- Level Header -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <Title level={2} color="primary">
                Niveau {level.id}
              </Title>
              <Badge variant={
                level.difficulty === 'easy' ? 'primary' :
                level.difficulty === 'medium' ? 'warning' :
                level.difficulty === 'hard' ? 'danger' : 'danger'
              }>
                {level.difficulty === 'easy' ? 'Facile' :
                 level.difficulty === 'medium' ? 'Moyen' :
                 level.difficulty === 'hard' ? 'Difficile' : 'Expert'}
              </Badge>
            </div>
            <Paragraph color="primary">{level.name}</Paragraph>
          </div>

          <AttemptCounter
            {attemptsRemaining}
            maxAttempts={level.maxAttempts}
          />
        </div>

        <!-- Enigma -->
        <div class="bg-ctos-dark p-6 rounded border-2 border-ctos-primary mb-6">
          <Paragraph size="lg" color="light">
            <pre class="font-primary whitespace-pre-wrap">{level.enigma}</pre>
          </Paragraph>
        </div>

        <!-- Password Input -->
        <PasswordField
          bind:value={userAnswer}
          placeholder="Entrez votre réponse..."
          disabled={!canPlay}
          {onSubmit}
        />

        <!-- Info -->
        <div class="mt-4 flex flex-wrap gap-4 text-sm text-ctos-gray">
          <span>
            <i class="fas fa-trophy"></i> {level.basePoints} points de base
          </span>
          {#if level.timeLimit}
            <span>
              <i class="fas fa-clock"></i> Temps limite: {Math.floor(level.timeLimit / 60)}min {level.timeLimit % 60}s
            </span>
          {/if}
          <span>
            <i class="fas fa-lightbulb"></i> {level.hints.length} indices disponibles
          </span>
        </div>
      </Card>
    </div>
  </section>
{/if}
