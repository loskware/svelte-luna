<script lang="ts">
  import { classNames } from "../utils";

  type TextFieldTextAlignment = "start" | "end" | "center";
  type TextFieldTheme = "accent" | "danger" | "warning" | "soft" | "success";

  /** Reference to the DOM component element */
  export let ref: HTMLDivElement | undefined = undefined;

  /** Reference to the inner input element */
  export let input: HTMLInputElement | undefined = undefined;

  /** Root div CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Root div inline styles */
  export let style: string | undefined = undefined;

  /** Textfield value */
  export let value: string | undefined = undefined;

  /** Placeholder text */
  export let placeholder: string | undefined = undefined;

  /** Message (errors or other states) */
  export let message: string | undefined = undefined;

  /** Text alignment */
  export let textAlign: TextFieldTextAlignment = "start";

  /** Color theme */
  export let theme: TextFieldTheme = "accent";

  /** Compact variant */
  export let compact: boolean = false;

  /** Draw a border around textfield */
  export let outline: boolean = false;

  /** Make textfield transparent */
  export let transparent: boolean = false;

  /** Container CSS class */
  export let containerClass: string | undefined = undefined;

  /** Container inline styles */
  export let containerStyle: string | undefined = undefined;

  /** Input CSS class */
  export let inputClass: string | undefined = undefined;

  /** Input inline styles */
  export let inputStyle: string | undefined = undefined;

  /** Message CSS class */
  export let messageClass: string | undefined = undefined;

  /** Message inline styles */
  export let messageStyle: string | undefined = undefined;

  $: cn = classNames("TextField", theme, `text-${textAlign}`, className);
</script>

<div bind:this={ref} class={cn} {style}>
  <label
    class={containerClass}
    class:compact
    class:outline
    class:transparent
    style={containerStyle}
  >
    <slot name="left" />
    <input
      bind:this={input}
      type="text"
      class={inputClass}
      style={inputStyle}
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
    <slot name="right" />
  </label>
  {#if message}
    <span class={messageClass} style={messageStyle}>{message}</span>
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
    border: 1px solid transparent;
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
    transition: transform var(--luna-duration-20) var(--luna-timing-ease-in-out);
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
    outline: none;
    line-height: 2.5em;
    padding: 0;
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
    border-color: var(--luna-accent-border-color);
  }
  .danger label::after {
    background-color: var(--luna-danger-color);
  }
  .danger span {
    color: var(--luna-danger-text-color);
  }
  .danger label.outline:focus-within {
    border-color: var(--luna-danger-border-color);
  }
  .warning label::after {
    background-color: var(--luna-warning-color);
  }
  .warning span {
    color: var(--luna-warning-text-color);
  }
  .warning label.outline:focus-within {
    border-color: var(--luna-warning-border-color);
  }
	.soft label {
		background-color: var(--luna-soft-bkg-color);
    color: var(--luna-soft-text-color-inverse);
	}
	.soft label.transparent {
		background-color: transparent;
	}
	.soft label::after {
		background-color: var(--luna-soft-color);
	}
	.soft span {
		color: var(--luna-soft-text-color);
	}
	.soft label.outline {
		border-color: var(--luna-soft-border-color);
	}
	.soft label.outline:focus-within {
		border-color: var(--luna-soft-color);
	}
  .success label::after {
    background-color: var(--luna-success-color);
  }
  .success span {
    color: var(--luna-success-text-color);
  }
  .success label.outline:focus-within {
    border-color: var(--luna-success-border-color);
  }

  .transparent {
    background-color: transparent;
  }

  .outline {
    border-color: var(--luna-border-color);
    transition: border-color var(--luna-duration-20) linear;
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
    padding: 2px 0;
    line-height: 2em;
  }
</style>
