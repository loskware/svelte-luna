<script>
  import { classNames, toggle } from "./utils";
  import { createEventDispatcher } from "svelte";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * color theme
   * @type {"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "accent";

  /**
   * size variant
   * @type {"compact"|"normal"|"large"}
   */
  export let size = "normal";

  /**
   * toggle switch, take precedence over group
   * @type {boolean}
   */
  export let checked = null;

  /**
   * switch value
   * @type {string|number}
   */
  export let value = null;

  /**
   * switch group selected values
   * @type {Array<string|number>}
   */
  export let group = null;

  /**
   * disable checkbox
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * Label text
   * @type {string}
   */
  export let label = "";

  /**
   * Label inline style
   * @type {string}
   */
  export let labelStyle = null;

  /**
   * Label CSS class
   * @type {string}
   */
  export let labelClass = null;

  /**
   * Label position
   * @type {"left"|"right"}
   */
  export let labelPosition = "right";

  $: state =
    checked ??
    (Array.isArray(group) && value !== null && group.includes(value));

  $: cn = classNames("Switch", theme, size, labelPosition, className);
  $: lcn = classNames("label", labelClass);

  const dispatch = createEventDispatcher();

  function handleClick() {
    if (disabled) return;
    if (Array.isArray(group) && value !== null && checked === null) {
      toggle(group, value);
      group = group;
    }
    dispatch("change", value);
  }
</script>

<div class={cn} class:disabled on:click={handleClick}>
  <input type="checkbox" checked={state} {disabled} {...$$restProps} />
  <span class="track" />
  {#if label}
    <span class={lcn} style={labelStyle}>{label}</span>
  {/if}
</div>

<style>
  div {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    margin: 4px;
    cursor: pointer;
  }

  .accent > input:checked + .track::before {
    background-color: var(--luna-accent-bkg-color-alpha2);
  }
  .accent > input:checked + .track::after {
    background-color: var(--luna-accent-bkg-color);
  }
  .danger > input:checked + .track::before {
    background-color: var(--luna-danger-bkg-color-alpha2);
  }
  .danger > input:checked + .track::after {
    background-color: var(--luna-danger-bkg-color);
  }
  .warning > input:checked + .track::before {
    background-color: var(--luna-warning-bkg-color-alpha2);
  }
  .warning > input:checked + .track::after {
    background-color: var(--luna-warning-bkg-color);
  }
  .success > input:checked + .track::before {
    background-color: var(--luna-success-bkg-color-alpha2);
  }
  .success > input:checked + .track::after {
    background-color: var(--luna-success-bkg-color);
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    visibility: hidden;
  }
  
  input:checked + .track::after {
    transform: translate3d(100%, 0, 0);
  }
  input:disabled + .track::before {
    background-color: var(--luna-disabled-bkg-color-alpha2);
  }
  input:disabled + .track::after {
    background-color: var(--luna-disabled-bkg-color);
  }
  input:disabled:checked + .track::before {
    background-color: var(--luna-disabled-bkg-color-alpha2);
  }
  input:disabled:checked + .track::after {
    background-color: var(--luna-disabled-bkg-color);
  }
  input:disabled ~ .label {
    color: var(--luna-disabled-text-color);
  }

  .track {
    position: relative;
    display: block;
    height: 1em;
    width: 2em;
  }
  .track::before {
    /* track */
    position: absolute;
    content: "";
    top: 0.125em;
    bottom: 0.125em;
    left: 0.125em;
    right: 0.125em;
    background-color: var(--luna-plain-bkg-color-alpha2);
    border-radius: var(--luna-border-radius-m);
    transition: background-color var(--luna-duration-20)
      var(--luna-timing-ease-in-out);
    will-change: background-color;
  }
  .track::after {
    /* slider */
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 1em;
    width: 1em;
    background-color: var(--luna-plain-bkg-color-sec);
    border-radius: var(--luna-border-radius-m);
    box-shadow: var(--luna-elevation-2);
    transition-property: background-color, transform;
    transition-duration: var(--luna-duration-20);
    transition-timing-function: var(--luna-timing-ease-in-out);
    will-change: background-color, color, transform;
  }

  .label {
    color: var(--luna-text-color);
    user-select: none;
    white-space: nowrap;
  }

  .left {
    flex-direction: row-reverse;
  }
  .left > .label {
    margin-right: 12px;
  }

  .right {
    flex-direction: row;
  }
  .right > .label {
    margin-left: 12px;
  }

  .compact {
    font-size: 20px;
  }
  .compact > .label {
    font-size: 0.75rem;
  }

  .normal {
    font-size: 24px;
  }
  .normal > .label {
    font-size: 0.875rem;
  }

  .large {
    font-size: 32px;
  }
  .large > .label {
    font-size: 1.125rem;
  }

  .disabled {
    cursor: default;
  }
</style>
