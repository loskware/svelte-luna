<script lang="ts">
  /** Reference to the DOM component element */
  export let ref: HTMLHRElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** divider thikness */
  export let thikness: number = 1;

  /** Inline styles */
  export let style: string | undefined = undefined;
</script>

<hr
  bind:this={ref}
  class={className}
  style:border-width={`${thikness}px 0 0 0`}
  {style}
/>

<style>
  hr {
    border-color: var(--luna-border-color);
    margin: 8px 0;
  }
</style>
