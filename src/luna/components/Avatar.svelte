<script>
  import { classNames } from "../utils";

  /**
   * css class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * avatar size (=height=width)
   * @type {string|number}
   */
  export let size;

  /** @type {string} img src */
  export let src;

  /** @type {string} img alt */
  export let alt;

  /** @type {boolean} draw border */
  export let hasBorder = false;

  /** @type {string} inline styles*/
  export let style = null;

  $: cn = classNames("Avatar", className);
</script>

<img
  class={cn}
  class:border={hasBorder}
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
  .border {
    border: 2px solid white;
  }
</style>
