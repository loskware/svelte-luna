<script lang="ts">
  /** Reference to the DOM component element */
  export let ref: HTMLHRElement | undefined = undefined;

  /** CSS class */
  let className: string | null = null;
  export { className as class };

  /** Inline styles */
  export let style: string | null = null;
</script>

<hr bind:this={ref} class={className} {style} />

<style>
  hr {
    border-color: var(--luna-border-color-soft);
    margin: 8px 0;
  }
</style>
