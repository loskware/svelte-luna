<script>
  import { classNames } from "./utils";

  /**
   * Reference to the DOM component element
   * @type {HTMLDivElement}
   */
  export let ref = null;

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * inline style
   * @type {string}
   */
  export let style = null;

  $: cn = classNames("SegmentedControl", className);
</script>

<div bind:this={ref} {style} class={cn} {...$$restProps}>
  <slot />
</div>

<style>
  div {
    display: flex;
    line-height: 1rem;
    background-color: var(--luna-bkg-color-alpha2);
    border-radius: var(--luna-border-radius-m);
  }
</style>
