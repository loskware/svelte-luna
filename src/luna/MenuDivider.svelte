<script>
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

<hr class={className} {style} />

<style>
  hr {
    border-color: var(--luna-border-color-soft);
    margin: 8px 0;
  }
</style>
