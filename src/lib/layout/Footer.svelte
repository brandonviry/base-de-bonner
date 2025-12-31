<script>
  import Paragraph from '../ui/Paragraph.svelte';
</script>

<footer class="
  w-full bg-ctos-dark-lighter border-t-2 border-ctos-secondary
  px-4 md:px-8 py-6
  mt-auto
">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <Paragraph size="sm" color="light">
        <i class="fas fa-code"></i>
        Inspiré de Watch Dogs 1 - ctOS System
      </Paragraph>

      <div class="flex gap-4">
        <Paragraph size="sm" color="light">
          <i class="fab fa-github"></i>
          <a href="https://github.com" class="hover:text-ctos-primary transition-colors">
            GitHub
          </a>
        </Paragraph>
      </div>
    </div>

    <!-- Easter Egg Level 10 - Hidden Password -->
    <div class="ultra-hidden mt-4 text-center">
      <Paragraph size="sm">
        thevigilante
      </Paragraph>
    </div>
  </div>
</footer>
