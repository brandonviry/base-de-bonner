<script>
  import Input from '../ui/Input.svelte';
  import Button from '../ui/Button.svelte';

  export let value = '';
  export let placeholder = 'Entrez le mot de passe...';
  export let disabled = false;
  export let onSubmit = () => {};

  function handleKeydown(event) {
    if (event.key === 'Enter' && !disabled) {
      onSubmit();
    }
  }
</script>

<div class="flex gap-3 items-center">
  <div class="flex-1">
    <Input
      bind:value
      {placeholder}
      {disabled}
      autofocus={true}
      on:keydown={handleKeydown}
    />
  </div>
  <Button
    variant="primary"
    onClick={onSubmit}
    {disabled}
  >
    <i class="fas fa-key mr-2"></i>
    Valider
  </Button>
</div>
