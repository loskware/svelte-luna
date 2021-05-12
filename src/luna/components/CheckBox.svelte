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
   * @type {"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "accent";

  /**
   * toogle checkbox
   * @type {boolean}
   */
  export let checked = null;

  /**
   * input disabled state
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

  $: cn = classNames("CheckBox", theme, labelPosition, className);
</script>

<label class={cn} class:disabled>
  <input type="checkbox" {checked} {disabled} on:change {...$$restProps} />
  <span class="mark" />
  {#if label}
    <span class="label">{label}</span>
  {/if}
</label>

<style lang="scss">
  .CheckBox {
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
    height: 0;
    width: 0;
    opacity: 0;
    &:checked + .mark {
      border-color: currentColor;
      &::after {
        transform: scale(1);
      }
    }
    &:disabled {
      cursor: default;
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
    border-radius: var(--luna-border-radius-m);
    transition: border-color ease-in-out var(--luna-duration-fast);
    will-change: border-color;
    &::after {
      position: absolute;
      top: 4px;
      bottom: 4px;
      left: 4px;
      right: 4px;
      content: "";
      background-color: currentColor;
      border-radius: var(--luna-border-radius-s);
      transform: scale(0);
      transition-property: transform, background-color;
      transition-timing-function: ease-out;
      transition-duration: 2s;// var(--luna-duration-fast);
      will-change: background-color, transform;
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
      margin-right: 8px;
    }
  }
  .right {
    flex-direction: row;
    > .label {
      margin-left: 8px;
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
