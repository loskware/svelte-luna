<script >import { classNames } from "../utils";
/** Reference to the DOM component element */
export let ref = undefined;
/** CSS class */
let className = null;
export { className as class };
/** Inline style */
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
