<script>
  import { classNames } from "./utils";

  /**
   * Reference to the DOM component element
   * @type {HTMLDivElement}
   */
  export let ref = null;

  /**
   * Reference to the inner input element
   * @type {HTMLSelectElement}
   */
  export let select = null;

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
   * @type {"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "accent";

  /**
   * compact variant
   * @type {boolean}
   */
  export let compact = false;

  /**
   * draw a border around Select
   * @type {boolean}
   */
  export let outline = false;

  /**
   * make Select transparent
   * @type {boolean}
   */
  export let transparent = false;

  /**
   * Select name
   * @type {string}
   */
  export let name = null;

  /**
   * Select value or values (for multiple select)
   * @type {string | string[]}
   */
  export let value = undefined;

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

  $: cn = classNames("Select", theme, className);
  $: multiple = Array.isArray(value);
</script>

<div
  bind:this={ref}
  class={cn}
  class:compact
  class:outline
  class:transparent
  class:disabled
  {style}
>
  {#if multiple}
    <select
      bind:this={select}
      class:multiple={true}
      multiple
      {name}
      {size}
      {disabled}
      bind:value
      on:change
      on:click
      on:blur
      on:focus
    >
      <slot />
    </select>
  {:else}
    <select
      bind:this={select}
      {name}
      {size}
      {disabled}
      bind:value
      on:change
      on:click
      on:blur
      on:focus
    >
      <slot />
    </select>
  {/if}
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
    background-color: var(--luna-plain-bkg-color-alpha1);
    border-radius: var(--luna-border-radius-m);
    transition-property: border-color, background-color;
    transition-duration: var(--luna-duration-10);
    transition-timing-function: linear;
    will-change: border-color;
  }
  select {
    width: 100%;
    padding: 0 40px 0 16px;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    outline: none;
    background: none;
    color: var(--luna-text-color);
    font-size: 1rem;
    line-height: 2.5em;
    cursor: pointer;
  }
  select:disabled {
    color: var(--luna-disabled-text-color);
    background-color: transparent;
    border-color: var(--luna-disabled-border-color);
  }
  select :global(option) {
    color: initial;
  }
  svg {
    position: absolute;
    height: 32px;
    width: 32px;
    right: 8px;
    top: calc(50% - 16px);
    pointer-events: none;
    user-select: none;
  }

  .multiple {
    padding: 8px;
  }

  /* SIZES */
  .compact > select {
    font-size: 0.875rem;
    padding: 2px 32px 2px 14px;
    line-height: 2em;
  }
  .compact > svg {
    right: 6px;
  }

  /* VARIANTS */
  .transparent {
    background-color: transparent;
  }

  .outline {
    border: 2px solid var(--luna-border-color);
    transition: border-color var(--luna-duration-20) linear;
    will-change: border-color;
  }

  /* THEMES */
  .accent:focus-within {
    background-color: var(--luna-accent-bkg-color-alpha1);
    border-color: var(--luna-accent-border-color);
  }
  .accent > svg {
    fill: var(--luna-accent-color);
  }
  .danger:focus-within {
    background-color: var(--luna-danger-bkg-color-alpha1);
    border-color: var(--luna-danger-border-color);
  }
  .danger > svg {
    fill: var(--luna-danger-color);
  }
  .warning:focus-within {
    background-color: var(--luna-warning-bkg-color-alpha1);
    border-color: var(--luna-warning-border-color);
  }
  .warning > svg {
    fill: var(--luna-warning-color);
  }
  .success:focus-within {
    background-color: var(--luna-success-bkg-color-alpha1);
    border-color: var(--luna-success-border-color);
  }
  .success > svg {
    fill: var(--luna-success-color);
  }

  /* DISABLED */
  .disabled {
    background-color: var(--luna-disabled-bkg-color-alpha1);
    border-color: var(--luna-disabled-border-color);
  }
  .disabled > select {
    cursor: initial;
  }
  .disabled > svg {
    fill: var(--luna-disabled-color);
  }
</style>
