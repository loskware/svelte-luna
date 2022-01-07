<script>
  import { classNames } from "../utils";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * Avatar size (=height=width)
   * @type {string|number}
   */
  export let size;

  /**
   * Image src URL
   * @type {string}
   */
  export let src;

  /**
   * Image alt attribute
   * @type {string}
   */
  export let alt;

  /**
   * Toggle shadow
   * @type {boolean}
   */
  export let hasShadow = false;

  /**
   * Avatar border color
   * @type {string}
   */
  export let borderColor = "white";

  /**
   * Avatar border size
   * @type {string|number}
   */
  export let borderSize = null;

  /**
   * Inline styles
   * @type {string}
   */
  export let style = null;

  $: cn = classNames("Avatar", className);
  $: styles = `
    border: ${
      typeof borderSize === "number" ? `${borderSize}px` : borderSize
    } solid ${borderColor};
    ${style}
  `;
</script>

<img
  class={cn}
  class:hasShadow
  width={size}
  height={size}
  style={styles}
  {src}
  {alt}
  {...$$restProps}
/>

<style>
  img {
    border-radius: 50%;
  }
  .hasShadow {
    box-shadow: var(--luna-elevation-4);
  }
</style>
