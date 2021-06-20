<script>
  import { classNames } from "../utils";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * color theme
   * @type {"plain"|"accent"|"danger"|"warning"|"success"|"soft"}
   */
  export let theme = "plain";

  /**
   * --> border-radius: 50%
   * @type {boolean}
   */
  export let rounded = false;

  /**
   * Select name
   * @type {string}
   */
  export let name = null;

  /**
   * Specifies that multiple options can be selected at once
   * @type {boolean}
   */
  export let multiple = false;

  /**
   * Defines the number of visible options in Select
   * @type {number}
   */
  export let size = 1;

  /**
   * disable Select
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * Inline styles
   * @type {string}
   */
  export let style = null;

  $: cn = classNames(theme, className);
</script>

<div class={cn} class:rounded class:disabled {style}>
  <select
    class:expanded={multiple || size > 1}
    {name}
    {multiple}
    {size}
    {disabled}
    on:change
    on:click
    on:blur
    on:focus
    {...$$restProps}
  >
    <option value="1">Andrea</option>
    <option value="2">Betta</option>
    <option value="3">Tommy</option>
    <option value="4">Ambra</option>
    <option value="5">Teo</option>
    <option value="6">Giacomo</option>
    <option value="7">Caio</option>
  </select>
  {#if size === 1}
    <svg height="24" width="24" viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  {/if}
</div>

<style>
  div {
    position: relative;
    display: inline-block;
    background: transparent;
    border-radius: var(--luna-border-radius-m);
    border: 2px solid var(--luna-border-color-soft);
    transition-property: border-color, background-color;
    transition-duration: var(--luna-duration-10);
    transition-timing-function: linear;
    will-change: border-color;
  }
  select {
    width: 100%;
    padding: 8px 16px 8px 8px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    color: var(--luna-text-color);
  }
  select:disabled {
    color: var(--luna-disabled-text-color);
    background-color: transparent;
    border-color: var(--luna-disabled-border-color);
  }
  svg {
    position: absolute;
    right: 0;
    top: calc(50% - 12px);
    pointer-events: none;
    user-select: none;
  }

  .expanded {
    padding: 8px;
  }

  /* ROUNDED */
  .rounded {
    border-radius: 1000px;
  }

  /* THEMES */
  .plain {
    color: var(--luna-plain-text-color);
  }
  .plain:hover,
  .plain:focus-within {
    background-color: var(--luna-plain-bkg-color-alpha1);
    border-color: var(--luna-plain-border-color);
  }
  .plain > svg {
    fill: var(--luna-plain-color);
  }
  .soft {
    border-color: var(--luna-soft-border-color);
  }
  .soft:hover,
  .soft:focus-within {
    background-color: var(--luna-soft-bkg-color-alpha1);
    border-color: var(--luna-soft-border-color);
  }
  .soft > select {
    color: var(--luna-soft-text-color);
  }
  .soft > svg {
    fill: var(--luna-soft-color);
  }
  .accent {
    color: var(--luna-accent-text-color);
  }
  .accent:hover,
  .accent:focus-within {
    background-color: var(--luna-accent-bkg-color-alpha1);
    border-color: var(--luna-accent-border-color);
  }
  .accent > svg {
    fill: var(--luna-accent-color);
  }
  .danger {
    color: var(--luna-danger-text-color);
  }
  .danger:hover,
  .danger:focus-within {
    background-color: var(--luna-danger-bkg-color-alpha1);
    border-color: var(--luna-danger-border-color);
  }
  .danger > svg {
    fill: var(--luna-danger-color);
  }
  .warning {
    color: var(--luna-warning-text-color);
  }
  .warning:hover,
  .warning:focus-within {
    background-color: var(--luna-warning-bkg-color-alpha1);
    border-color: var(--luna-warning-border-color);
  }
  .warning > svg {
    fill: var(--luna-warning-color);
  }
  .success {
    color: var(--luna-success-text-color);
  }
  .success:hover,
  .success:focus-within {
    background-color: var(--luna-success-bkg-color-alpha1);
    border-color: var(--luna-success-border-color);
  }
  .success > svg {
    fill: var(--luna-success-color);
  }

  /* DISABLED */
  .disabled,
  .disabled:hover {
    background-color: transparent;
    border-color: var(--luna-disabled-border-color);
  }
  .disabled > svg {
    fill: var(--luna-disabled-color);
  }
</style>
