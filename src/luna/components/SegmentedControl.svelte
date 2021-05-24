<script>
  import { classNames } from "../utils";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  $: cn = classNames("SegmentedControl", className);
</script>

<div class={cn} {...$$restProps}>
  <slot />
</div>

<style>
  div {
    display: flex;
    gap: 2px;
    padding: 4px;
    overflow: hidden;
    line-height: 1rem;
    background-color: var(--luna-bkg-color-alpha2);
    border-radius: var(--luna-border-radius-l);
  }
</style>
