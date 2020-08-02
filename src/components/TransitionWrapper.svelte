<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<style>
</style>

{#if visible}
  <div in:fade={{delay:250}}>
    <slot />
  </div>
{/if}
