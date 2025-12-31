<script>
  import Paragraph from '../ui/Paragraph.svelte';
  import GlitchText from '../ui/GlitchText.svelte';

  export let score = 0;
</script>

<div class="flex items-center gap-3">
  <i class="fas fa-star text-3xl text-ctos-accent"></i>
  <div>
    <Paragraph size="sm" color="light">Score Total</Paragraph>
    <Paragraph size="lg" color="primary">
      <GlitchText intensity="low">
        <span class="font-mono font-bold text-2xl">{score.toLocaleString()}</span>
      </GlitchText>
    </Paragraph>
  </div>
</div>
