<script>
  import Badge from '../ui/Badge.svelte';
  import Paragraph from '../ui/Paragraph.svelte';

  export let attemptsRemaining = 0;
  export let maxAttempts = 10;

  $: variant = attemptsRemaining > maxAttempts * 0.5 ? 'success' :
               attemptsRemaining > maxAttempts * 0.2 ? 'warning' : 'danger';
</script>

<div class="flex items-center gap-3">
  <i class="fas fa-heart text-2xl text-ctos-danger"></i>
  <div>
    <Paragraph size="sm" color="light">Tentatives restantes</Paragraph>
    <Badge {variant} size="lg">
      {attemptsRemaining} / {maxAttempts}
    </Badge>
  </div>
</div>
