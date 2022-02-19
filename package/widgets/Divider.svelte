<script >/** Reference to the DOM component element */
export let ref = undefined;
/** CSS class */
let className = null;
export { className as class };
/** Inline styles */
export let style = null;
</script>

<hr bind:this={ref} class={className} {style} />

<style>
  hr {
    border-color: var(--luna-border-color-soft);
    margin: 8px 0;
  }
</style>
