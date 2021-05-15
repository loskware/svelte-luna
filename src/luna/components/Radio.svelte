<script>
  import { classNames } from "../utils";
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
   * toogle radio
   * @type {boolean}
   */
  export let checked;

  /**
   * checkbox value
   * @type {string}
   */
  export let value = null;

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
   * Label position
   * @type {"left"|"right"}
   */
  export let labelPosition = "right";

  $: cn = classNames("Radio", theme, labelPosition, className);

  const dispatch = createEventDispatcher();

  function handleClick() {
    !disabled && dispatch("change", checked);
  }
</script>

<div class={cn} class:disabled on:click={handleClick}>
  <input
    type="radio"
    {checked}
    {value}
    {disabled}
    {...$$restProps}
  />
  <span class="mark" />
  {#if label}
    <span class="label">{label}</span>
  {/if}
</div>

<style lang="scss">
  div {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    cursor: pointer;
    &:hover > .mark {
      border-color: currentColor;
    }
  }

  input {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    visibility: hidden;
    &:checked + .mark {
      border-color: currentColor;
      &::after {
        transform: scale(1);
      }
    }
    &:disabled {
      + .mark {
        border-color: var(--luna-disabled-border-color);
        color: var(--luna-disabled-color);
      }
      ~ .label {
        color: var(--luna-disabled-text-color);
      }
    }
  }

  .mark {
    position: relative;
    display: block;
    box-sizing: content-box;
    height: 16px;
    width: 16px;
    border: 1px solid var(--luna-border-color);
    border-radius: 50%;
    &::after {
      position: absolute;
      top: 3px;
      bottom: 3px;
      left: 3px;
      right: 3px;
      content: "";
      background-color: currentColor;
      border-radius: 50%;
      transform: scale(0);
      transition: transform ease-out var(--luna-duration-fast);
      will-change: transform;
    }
  }

  .label {
    color: var(--luna-text-color-secondary);
    font-size: 0.875rem;
    user-select: none;
    white-space: nowrap;
  }

  .left {
    flex-direction: row-reverse;
    > .label {
      margin-right: 12px;
    }
  }
  .right {
    flex-direction: row;
    > .label {
      margin-left: 12px;
    }
  }

  // VARIANTS
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
