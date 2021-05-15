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


  $: cn = classNames("Switch", theme, size, className);

  const dispatch = createEventDispatcher();
  function handleClick(e) {
    !disabled && dispatch("change", e);
  }
</script>

<div class={cn} class:disabled on:click={handleClick}>
  <input
    type="checkbox"
    {checked}
    {disabled}
    {...$$restProps}
  />
  <span />
</div>

<style lang="scss">
  div {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    font-size: 24px;
    margin: 4px;
  }

  .accent {
    > input:checked + span {
      &::before {
        background-color: var(--luna-accent-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-accent-bkg-color);
        transform: translate3d(100%, 0, 0);
      }
    }
  }
  .danger {
    > input:checked + span {
      &::before {
        background-color: var(--luna-danger-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-danger-bkg-color);
        transform: translate3d(100%, 0, 0);
      }
    }
  }
  .warning {
    > input:checked + span {
      &::before {
        background-color: var(--luna-warning-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-warning-bkg-color);
        transform: translate3d(100%, 0, 0);
      }
    }
  }
  .success {
    > input:checked + span {
      &::before {
        background-color: var(--luna-success-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-success-bkg-color);
        transform: translate3d(100%, 0, 0);
      }
    }
  }
  
  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    &:disabled + span {
      cursor: default;
      &::before {
        background-color: var(--luna-disabled-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-disabled-bkg-color);
      }
    }
    &:disabled:checked + span {
      &::before {
        background-color: var(--luna-disabled-bkg-color-alpha2);
      }
      &::after {
        background-color: var(--luna-disabled-bkg-color);
        transform: translate3d(100%, 0, 0);
      }
    }
  }
  span {
    display: block;
    height: 1em;
    width: 2em;
    cursor: pointer;
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

  .compact {
    font-size: 20px;
  }
  .normal {
    font-size: 24px;
  }
  .large {
    font-size: 32px;
  }
</style>
