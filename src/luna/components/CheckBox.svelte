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
   * toogle checkbox, set null for indeterminate state
   * @type {boolean|null}
   */
  export let checked;

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
   * Label position
   * @type {"left"|"right"}
   */
  export let labelPosition = "right";

  $: cn = classNames("CheckBox", theme, labelPosition, className);

  const dispatch = createEventDispatcher();
  function handleClick(e) {
    !disabled && dispatch("change", e);
  }
</script>

<div class={cn} class:disabled on:click={handleClick}>
  <input
    type="checkbox"
    checked={checked === true}
    indeterminate={checked === null}
    {disabled}
    {...$$restProps}
  />
  <span class="mark" />
  {#if label}
    <span class="label" style={labelStyle}>{label}</span>
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
      &::before {
        transform: scale(1);
      }
      &::after {
        transform: rotate(-45deg) scale(1);
      }
    }
    &:indeterminate + .mark {
      border-color: currentColor;
      &::before {
        transform: scale(0.5);
      }
    }
    &:disabled {
      + .mark {
        border-color: var(--luna-disabled-border-color);
        color: var(--luna-disabled-color);
        &::after {
          border-color: var(--luna-disabled-text-color-inverse);
        }
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
    border-radius: var(--luna-border-radius-m);
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: "";
      background-color: currentColor;
      border-radius: var(--luna-border-radius-s);
      transform: scale(0);
      transition: transform ease-out var(--luna-duration-fast);
      will-change: transform;
    }
    &::after {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 9px;
      height: 5px;
      content: "";
      border-bottom: 2px solid white;
      border-left: 2px solid white;
      transform: rotate(-45deg) scale(0);
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
