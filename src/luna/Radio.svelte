<script>
  import { classNames } from "./utils";
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
   * select radio, take precedence over group
   * @type {boolean}
   */
  export let checked = null;

  /**
   * radio value
   * @type {string|number}
   */
  export let value = null;

  /**
   * radio group selected value
   * @type {string|number}
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

  $: state = checked ?? (value !== null && value === group);
  $: cn = classNames("Radio", theme, labelPosition, className);
  $: lcn = classNames("label", labelClass);

  const dispatch = createEventDispatcher();

  function handleClick() {
    if (disabled) return;
    if (group !== null && value !== null && checked === null) group = value;
    dispatch("change", value);
  }
</script>

<div class={cn} class:disabled on:click={handleClick}>
  <input type="radio" checked={state} {value} {disabled} {...$$restProps} />
  <span class="mark" />
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
    padding: 4px;
    cursor: pointer;
  }
  div:hover > .mark {
    border-color: currentColor;
  }

  input {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    visibility: hidden;
  }
  input:checked + .mark {
    border-color: currentColor;
  }
  input:checked + .mark::after {
    transform: scale(1);
  }
  input:disabled + .mark {
    border-color: var(--luna-disabled-border-color);
    color: var(--luna-disabled-color);
  }
  input:disabled ~ .label {
    color: var(--luna-disabled-text-color);
  }

  .mark {
    position: relative;
    display: block;
    box-sizing: content-box;
    height: 16px;
    width: 16px;
    border: 1px solid var(--luna-border-color);
    border-radius: 50%;
  }
  .mark::after {
    position: absolute;
    top: 3px;
    bottom: 3px;
    left: 3px;
    right: 3px;
    content: "";
    background-color: currentColor;
    border-radius: 50%;
    transform: scale(0);
    transition: transform ease-out var(--luna-duration-10);
    will-change: transform;
  }

  .label {
    color: var(--luna-text-color);
    font-size: 0.875rem;
    line-height: 1rem;
    user-select: none;
    white-space: nowrap;
  }

  /* LABEL POSITIONS */
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

  /* THEMES */
  .accent {
    color: var(--luna-accent-color);
  }
  .danger {
    color: var(--luna-danger-color);
  }
  .warning {
    color: var(--luna-warning-color);
  }
  .success {
    color: var(--luna-success-color);
  }
  .disabled {
    cursor: default;
  }
</style>
