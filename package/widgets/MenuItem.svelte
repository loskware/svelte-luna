<script >import { classNames } from "../utils";
/** Reference to the DOM component element */
export let ref = undefined;
/** CSS class */
let className = null;
export { className as class };
/** Inline styles */
export let style = null;
/** Make MenuItem more compact */
export let compact = false;
/** Action id */
export let action;
$: cn = classNames("MenuItem", className);
</script>

<li bind:this={ref} class={cn} class:compact {style} data-luna-menu-action={action}>
  <slot />
</li>

<style>
  .MenuItem {
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 0.875rem;
    min-height: 2.375rem;
    cursor: pointer;
    user-select: none;
  }
  .MenuItem.compact {
    font-size: 0.8125rem;
    min-height: 1.8125rem;
  }
  .MenuItem:hover {
    background-color: var(--luna-bkg-color-alpha1);
  }
</style>
