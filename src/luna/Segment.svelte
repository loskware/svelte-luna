<script>
  import { createEventDispatcher } from "svelte";
  import { classNames } from "./utils";

  /**
   * Reference to the DOM component element
   * @type {HTMLButtonElement}
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

  /**
   * inline style for selected state (merged with style prop)
   * @type {string}
   */
  export let selectedStyle = null;

  /**
   * segment value
   * @type {string|number}
   */
  export let value = null;

  /**
   * segmented control group value
   * @type {string|number}
   */
  export let group = null;

  /**
   * segment selection state
   * @type {boolean}
   */
  export let selected = null;

  /**
   * color theme
   * @type {"plain"|"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "accent";

  $: cn = classNames("Segment", theme, className);
  $: state = selected ?? (value !== null && value === group);
  $: currentStyle = [style, state ? selectedStyle : null].join(";");

  const dispatch = createEventDispatcher();

  function handleClick() {
    if (group !== null && value !== null && selected === null) {
      group = value;
    }
    dispatch("change", value);
  }
</script>

<button
  bind:this={ref}
  class={cn}
  class:selected={state}
  style={currentStyle}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</button>

<style>
  button {
    position: relative;
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 6px 18px;
    border: none;
    outline: none;
    border-radius: var(--luna-border-radius-m);
    background-color: transparent;
    color: var(--luna-text-color-secondary);
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition-duration: var(--luna-duration-10);
    transition-property: background-color, color;
    transition-timing-function: linear;
    will-change: background-color, color;
  }
  button:hover {
    background-color: var(--luna-bkg-color-alpha1);
  }
  button:focus-visible {
    box-shadow: var(--luna-focur-ring);
  }
  .selected.plain {
    background-color: var(--luna-plain-bkg-color);
    color: var(--luna-plain-text-color-inverse);
  }
  .selected.accent {
    background-color: var(--luna-accent-bkg-color);
    color: var(--luna-accent-text-color-inverse);
  }
  .selected.danger {
    background-color: var(--luna-danger-bkg-color);
    color: var(--luna-danger-text-color-inverse);
  }
  .selected.warning {
    background-color: var(--luna-warning-bkg-color);
    color: var(--luna-warning-text-color-inverse);
  }
  .selected.success {
    background-color: var(--luna-success-bkg-color);
    color: var(--luna-success-text-color-inverse);
  }
</style>
