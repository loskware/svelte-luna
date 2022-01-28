<script>

  /**
   * Reference to the DOM component element
   * @type {HTMLHRElement}
   */
  export let ref = null;

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * Inline styles
   * @type {string}
   */
  export let style = null;
</script>

<hr bind:this={ref} class={className} {style} />

<style>
  hr {
    border-color: var(--luna-border-color-soft);
    margin: 8px 0;
  }
</style>
