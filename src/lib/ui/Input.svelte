<script>
  export let placeholder = '';
  export let value = '';
  export let disabled = false;
  export let autofocus = false;
</script>

<input
  type="text"
  {placeholder}
  {disabled}
  {autofocus}
  bind:value
  class="
    w-full px-4 py-3
    bg-ctos-dark-lighter
    border-2 border-ctos-secondary
    text-ctos-light font-primary text-lg
    focus:border-ctos-primary focus:glow focus:outline-none
    transition-all duration-300
    placeholder-ctos-gray
    disabled:opacity-50 disabled:cursor-not-allowed
    scanlines
  "
  on:keydown
  on:input
/>
