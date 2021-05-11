<script>
import { classNames } from "../utils";


  /** @type {string} css classes */
  export let classes = null;

  /** @type {string|number} avatar size (=height=width) */
  export let size;

  /** @type {string} img src */
  export let src;

  /** @type {string} img alt */
  export let alt;

  /** @type {boolean} draw border */
  export let hasBorder = false;

  /** @type {string} inline styles*/
  export let style = null;

  $: cn = classNames("Avatar", classes);
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
