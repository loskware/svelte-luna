<script>
  import { classNames } from "./utils";

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

  /**
   * Make MenuItem more compact
   * @type {boolean}
   */
  export let compact = false;

  /**
   * Action id
   * @type {string}
   */
  export let action;

  $: cn = classNames("MenuItem", className);
</script>

<div class={cn} class:compact {style} data-luna-menu-action={action}>
  <slot />
</div>

<style>
  .MenuItem {
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
    font-size: 0.875rem;
    min-height: 2.375rem;
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
