<script>
  import { classNames } from "../utils";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

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
   * text alignment
   * @type {"start"|"end"|"center"}
   */
  export let textAlign = "start";

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
   * draw a border around textfield
   * @type {boolean}
   */
  export let outline = false;

  /**
   * make textfield transparent
   * @type {boolean}
   */
  export let transparent = false;

  /**
   * root div inline styles
   * @type {string}
   */
  export let style = null;

  /**
   * container inline styles
   * @type {string}
   */
  export let containerStyle = null;

  /**
   * input inline styles
   * @type {string}
   */
  export let inputStyle = null;

  /**
   * message inline styles
   * @type {string}
   */
  export let messageStyle = null;

  $: cn = classNames("TextField", theme, `text-${textAlign}`, className);
</script>

<div class={cn} {style}>
  <label class:compact class:outline class:transparent style={containerStyle}>
    <slot name="left" />
    <input
      type="text"
      {placeholder}
      style={inputStyle}
      bind:value
      on:input
      on:change
      on:keydown
      on:keyup
      on:focus
      on:blur
      {...$$restProps}
    />
    <slot name="right" />
  </label>
  {#if message}
    <span style={messageStyle}>{message}</span>
  {/if}
</div>

<style>
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

  label:not(.outline):focus-within::after {
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
    margin: 0 8px;
  }

  .accent label::after {
    background-color: var(--luna-accent-color);
  }
  .accent span {
    color: var(--luna-accent-text-color);
  }
  .accent label.outline:focus-within {
    border-color: var(--luna-accent-color);
  }
  .danger label::after {
    background-color: var(--luna-danger-color);
  }
  .danger span {
    color: var(--luna-danger-text-color);
  }
  .danger label.outline:focus-within {
    border-color: var(--luna-danger-color);
  }
  .warning label::after {
    background-color: var(--luna-warning-color);
  }
  .warning span {
    color: var(--luna-warning-text-color);
  }
  .warning label.outline:focus-within {
    border-color: var(--luna-warning-color);
  }
  .success label::after {
    background-color: var(--luna-success-color);
  }
  .success span {
    color: var(--luna-success-text-color);
  }
  .success label.outline:focus-within {
    border-color: var(--luna-success-color);
  }

  .transparent {
    background-color: transparent;
  }

  .outline {
    border: 2px solid var(--luna-border-color);
    transition: border-color var(--luna-duration-normal)
      linear;
    will-change: border-color;
  }

  .text-start {
    text-align: start;
  }
  .text-end {
    text-align: end;
  }
  .text-center {
    text-align: center;
  }

  .compact {
    padding: 0 14px;
    gap: 8px;
    font-size: 0.875rem;
  }
  .compact > input {
    padding: 8px 0;
  }
</style>
