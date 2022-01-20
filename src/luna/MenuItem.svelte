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
   * Action id
   * @type {string}
   */
  export let action;

  $: cn = classNames("MenuItem", className);
</script>

<div class={cn} {style} data-luna-menu-action={action}>
  <slot />
</div>

<style>
  .MenuItem {
    display: inline-flex;
    align-items: center;
    font-size: 0.875rem;
    min-height: 2.5em;
    user-select: none;
    padding: 0 16px;
  }
  .MenuItem:hover {
    background-color: var(--luna-bkg-color-alpha1);
  }
</style>
