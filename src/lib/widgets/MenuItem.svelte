<script lang="ts">
  import { classNames } from "../utils";

  /** Reference to the DOM component element */
  export let ref: HTMLLIElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline styles */
  export let style: string | undefined = undefined;

  /** Make MenuItem more compact */
  export let compact: boolean = false;

  /** Action id */
  export let action: string;

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
  .MenuItem:first-child {
    margin-top: 8px;
  }
  .MenuItem:last-child {
    margin-bottom: 8px;
  }
  .MenuItem.compact {
    font-size: 0.8125rem;
    min-height: 1.8125rem;
  }
  .MenuItem:hover {
    background-color: var(--luna-bkg-color-alpha1);
  }
</style>
