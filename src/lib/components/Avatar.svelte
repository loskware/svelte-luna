<script>
  /** @type {string} css classes */
  export let classes = null;

  /** @type {string|number} avatar size (=height=width) */
  export let size;

  /** @type {string} img src */
  export let src;

  /** @type {string} img alt */
  export let alt;

  /** @type {string} inline styles*/
  export let style = null;
</script>

<img
  class={classes}
  width={size}
  height={size}
  {src}
  {alt}
  {style}
  {...$$restProps}
/>

<style>
  img {
    border-radius: 50%;
    box-shadow: var(--luna-elevation-4);
  }
</style>
