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
   * Inline styles
   * @type {string}
   */
  export let style = null;

  /**
   * color theme
   * @type {"plain"|"soft"|"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "accent";

  /**
   * Label optional ID
   * @type {string}
   */
  export let id = null;

  /**
   * @callback OnClickCallback
   * @param {string} id
   * @param {MouseEvent} e
   */

  /**
   * Called on select (enable selection mark)
   * @type {OnClickCallback}
   */
  export let onClick = null;

  /**
   * @callback OnDeleteCallback
   * @param {string} id
   * @param {MouseEvent} e
   */

  /**
   * Called on select (enable selection mark)
   * @type {OnDeleteCallback}
   */
  export let onDelete = null;

  $: cn = classNames("Chip", theme, className);
</script>

<div
  bind:this={ref}
  class={cn}
  {style}
  on:click={(e) => {
    onClick?.(id, e);
  }}
  {...$$restProps}
>
  <span class:clickable={onClick} role="button"><slot /></span>
  {#if onDelete}
    <svg
      height={18}
      width={18}
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      on:click={(e) => {
        e.stopPropagation();
        onDelete(id, e);
      }}
    >
      <line x1="6" y1="6" x2="12" y2="12" />
      <line x1="12" y1="6" x2="6" y2="12" />
    </svg>
  {/if}
</div>

<style>
  div {
    display: inline-flex;
    align-items: stretch;
    border-radius: var(--luna-border-radius-m);
    overflow: hidden;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    user-select: none;
  }
  span {
    padding: 0 2px 0 6px;
  }
  span:only-child {
    padding: 0 6px;
  }
  span.clickable {
    cursor: pointer;
  }
  svg {
    cursor: pointer;
  }

  div.accent {
    background-color: var(--luna-accent-bkg-color);
    color: var(--luna-accent-text-color-inverse);
  }
  div.accent > span.clickable:hover {
    background-color: var(--luna-accent-bkg-color-sec);
  }
  div.accent > svg:hover {
    background-color: var(--luna-accent-bkg-color-sec);
  }

  div.plain {
    background-color: var(--luna-plain-bkg-color);
    color: var(--luna-plain-text-color-inverse);
  }
  div.plain > span.clickable:hover {
    background-color: var(--luna-plain-bkg-color-sec);
  }
  div.plain > svg:hover {
    background-color: var(--luna-plain-bkg-color-sec);
  }

  div.soft {
    background-color: var(--luna-soft-bkg-color);
    color: var(--luna-soft-text-color-inverse);
  }
  div.soft > span.clickable:hover {
    background-color: var(--luna-soft-bkg-color-sec);
  }
  div.soft > svg:hover {
    background-color: var(--luna-soft-bkg-color-sec);
  }

  div.danger {
    background-color: var(--luna-danger-bkg-color);
    color: var(--luna-danger-text-color-inverse);
  }
  div.danger > span.clickable:hover {
    background-color: var(--luna-danger-bkg-color-sec);
  }
  div.danger > svg:hover {
    background-color: var(--luna-danger-bkg-color-sec);
  }

  div.warning {
    background-color: var(--luna-warning-bkg-color);
    color: var(--luna-warning-text-color-inverse);
  }
  div.warning > span.clickable:hover {
    background-color: var(--luna-warning-bkg-color-sec);
  }
  div.warning > svg:hover {
    background-color: var(--luna-warning-bkg-color-sec);
  }

  div.success {
    background-color: var(--luna-success-bkg-color);
    color: var(--luna-success-text-color-inverse);
  }
  div.success > span.clickable:hover {
    background-color: var(--luna-success-bkg-color-sec);
  }
  div.success > svg:hover {
    background-color: var(--luna-success-bkg-color-sec);
  }
</style>
