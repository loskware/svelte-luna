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
   * size variant
   * @type {"compact"|"normal"|"large"}
   */
  export let size = "normal";

  /**
   * toogle checkbox, set null for indeterminate state
   * @type {boolean}
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

  $: cn = classNames("Switch", theme, size, labelPosition, className);

  const dispatch = createEventDispatcher();
  function handleClick(e) {
    !disabled && dispatch("change", e);
  }
</script>

<div class={cn} class:disabled on:click={handleClick}>
  <input type="checkbox" {checked} {disabled} {...$$restProps} />
  <span class="track" />
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
    font-size: 24px;
    margin: 4px;
    cursor: pointer;
  }

  .accent {
    > input:checked + .track {
      &::before {
        background-color: var(--luna-accent-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-accent-bkg-color);
      }
    }
  }
  .danger {
    > input:checked + .track {
      &::before {
        background-color: var(--luna-danger-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-danger-bkg-color);
      }
    }
  }
  .warning {
    > input:checked + .track {
      &::before {
        background-color: var(--luna-warning-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-warning-bkg-color);
      }
    }
  }
  .success {
    > input:checked + .track {
      &::before {
        background-color: var(--luna-success-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-success-bkg-color);
      }
    }
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    visibility: hidden;
    &:checked + .track::after {
      transform: translate3d(100%, 0, 0);
    }
    &:disabled + .track {
      &::before {
        background-color: var(--luna-disabled-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-disabled-bkg-color);
      }
    }
    &:disabled:checked + .track {
      &::before {
        background-color: var(--luna-disabled-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-disabled-bkg-color);
        transform: translate3d(100%, 0, 0);
      }
    }
  }
  .track {
    position: relative;
    display: block;
    height: 1em;
    width: 2em;
    // Switch track
    &::before {
      position: absolute;
      content: "";
      top: 0.125em;
      bottom: 0.125em;
      left: 0.125em;
      right: 0.125em;
      background-color: var(--luna-plain-bkg-color-alpha2);
      border-radius: var(--luna-border-radius-m);
      transition: background-color var(--luna-duration-normal)
        var(--luna-timing-ease-in-out);
      will-change: background-color;
    }
    // Switch slider
    &::after {
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
      transition-duration: var(--luna-duration-normal);
      transition-timing-function: var(--luna-timing-ease-in-out);
      will-change: background-color, color, transform;
    }
  }

  .label {
    color: var(--luna-text-color-secondary);
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

  .compact {
    font-size: 20px;
    > .label {
      font-size: 0.75rem;
    }
  }
  .normal {
    font-size: 24px;
    > .label {
      font-size: 0.875rem;
    }
  }
  .large {
    font-size: 32px;
    > .label {
      font-size: 1.125rem;
    }
  }

  .disabled {
    cursor: default;
  }
</style>
