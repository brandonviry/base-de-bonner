<script>
  import Title from '../ui/Title.svelte';
  import GlitchText from '../ui/GlitchText.svelte';
  import ScoreDisplay from '../components/ScoreDisplay.svelte';
  import Timer from '../components/Timer.svelte';

  export let score = 0;
  export let timerSeconds = 0;
  export let timerRunning = false;
</script>

<header class="
  w-full bg-ctos-dark-lighter border-b-2 border-ctos-primary
  px-4 md:px-8 py-4
  scanlines
  sticky top-0 z-40
">
  <div class="max-w-7xl mx-auto">
    <!-- Desktop layout -->
    <div class="hidden md:flex items-center justify-between">
      <Title level={3} glitch={true}>
        <GlitchText text="ctOS" intensity="medium" />
        <span class="text-ctos-light text-base ml-3 font-primary">Mini-Jeu</span>
      </Title>

      <div class="flex items-center gap-8">
        <Timer seconds={timerSeconds} running={timerRunning} />
        <ScoreDisplay {score} />
      </div>
    </div>

    <!-- Mobile layout -->
    <div class="md:hidden">
      <div class="flex items-center justify-between mb-3">
        <Title level={4} glitch={true}>
          <GlitchText text="ctOS" />
        </Title>
        <Timer seconds={timerSeconds} running={timerRunning} />
      </div>
      <ScoreDisplay {score} />
    </div>
  </div>
</header>
