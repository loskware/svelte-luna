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
   * textfield value
   * @type {string}
   */
  export let value = null;

  /**
   * placeholder text
   * @type {string}
   */
  export let placeholder = null;

  /**
   * message (errors or other states)
   * @type {string}
   */
  export let message = null;

  /**
   * compact variant
   * @type {boolean}
   */
  export let compact = false;

  /**
   * make textfield transparent
   * @type {boolean}
   */
  export let transparent = false;

  /**
   * inline styles
   * @type {string}
   */
  export let style = null;

  $: cn = classNames("TextField", theme, className);
</script>

<div class={cn} {style}>
  <label class:compact class:transparent>
    <slot name="leading" />
    <input
      type="text"
      {placeholder}
      bind:value
      on:input
      on:change
      on:keydown
      on:keyup
      on:focus
      on:blur
      {...$$restProps}
    />
    <slot name="trailing" />
  </label>
  {#if message}
    <span>{message}</span>
  {/if}

</div>

<style>
  div {
    text-align: right;
  }
  label {
    position: relative;
    display: flex;
    padding: 0 16px;
    align-items: center;
    gap: 12px;
    overflow: hidden;
    background-color: var(--luna-plain-bkg-color-alpha1);
    border-radius: var(--luna-border-radius-m);
    color: var(--luna-text-color);
    font-size: 1rem;
  }

  label::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 2px;
    transition: transform var(--luna-duration-normal)
      var(--luna-timing-ease-in-out);
    transform: scale(0, 1);
    width: 100%;
    will-change: transform;
  }

  label:focus-within::after {
    transform: scale(1);
  }

  label > input {
    background: none;
    border: none;
    color: inherit;
    flex: 1;
    font-size: inherit;
    text-align: inherit;
    line-height: 1;
    outline: none;
    padding: 0.75rem 0;
  }

  span {
    font-size: 0.75rem;
  }

  .accent label::after {
    background-color: var(--luna-accent-border-color);
  }
  .accent span {
    color: var(--luna-accent-text-color);
  }
  .danger label::after {
    background-color: var(--luna-danger-border-color);
  }
  .danger span {
    color: var(--luna-danger-text-color);
  }
  .warning label::after {
    background-color: var(--luna-warning-border-color);
  }
  .warning span {
    color: var(--luna-warning-text-color);
  } 
  .success label::after {
    background-color: var(--luna-success-border-color);
  }
  .success span {
    color: var(--luna-success-text-color);
  }

  label.compact {
    padding: 0 14px;
    gap: 8px;
    font-size: 0.875rem;
  }
  label.compact > input {
    padding: 8px 0;
  }

  .transparent {
    background-color: transparent;
  }
</style>
