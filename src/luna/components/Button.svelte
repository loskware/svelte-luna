<script>
  import { classNames } from "../utils/classNames";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * draw button border
   * @type {boolean}
   */
  export let outlined = false;

  /**
   * --> border-radius: 50%
   * @type {boolean}
   */
  export let rounded = false;

  /**
   * button size
   * @type {"normal"|"compact"|"large"}
   */
  export let size = "normal";

  /**
   * solid style
   * @type {boolean}
   */
  export let solid = false;

  /**
   * link url
   * @type {string}
   */
  export let href = null;

  /**
   * inline styles
   * @type {string}
   */
  export let style = null;

  /**
   * color theme
   * @type {"plain"|"soft"|"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "accent";

  $: cn = classNames("Button", size, theme, className);
</script>

{#if href}
  <a
    class={cn}
    class:outlined
    class:rounded
    class:solid
    class:flat={!solid}
    {href}
    {style}
    on:click
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:focus
    {...$$restProps}
  >
    <slot />
  </a>
{:else}
  <button
    class={cn}
    class:outlined
    class:rounded
    class:solid
    class:flat={!solid}
    {style}
    on:click
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:focus
    {...$$restProps}
  >
    <slot />
  </button>
{/if}

<style>
  a,
  button {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: var(--luna-border-radius-m);
    outline: none;
    font-family: inherit;
    font-weight: 500;
    letter-spacing: 0.25px;
    white-space: nowrap;
    transition: opacity linear var(--luna-duration-10);
    will-change: opacity;
    user-select: none;
    cursor: pointer;
  }
  a:active,
  button:active {
    opacity: 0.7;
  }

  a:focus-visible,
  button:focus-visible {
    border-color: transparent;
    box-shadow: var(--luna-focus-ring);
  }

  /* SIZES */
  .compact {
    padding: 6px 10px;
    gap: 4px;
    font-size: 12px;
  }
  .normal {
    padding: 8px 14px;
    gap: 6px;
    font-size: 14px;
  }
  .large {
    padding: 10px 18px;
    gap: 8px;
    font-size: 16px;
  }

  /* OUTLINED */
  .outlined {
    border-color: var(--luna-border-color-soft);
  }

  /* ROUNDED */
  .rounded {
    border-radius: 1000px;
  }
  .rounded.compact {
    padding: 6px;
  }
  .rounded.normal {
    padding: 8px;
  }
  .rounded.large {
    padding: 12px;
  }

  /* THEMES */
  .plain.solid {
    color: var(--luna-plain-text-color-inverse);
    background-color: var(--luna-plain-bkg-color);
  }
  .plain.solid:hover {
    background-color: var(--luna-plain-bkg-color-sec);
  }
  .plain.flat {
    color: var(--luna-plain-text-color);
  }
  .plain.flat:hover {
    background-color: var(--luna-plain-bkg-color-alpha1);
  }
  .plain.flat.outlined:hover {
    border-color: var(--luna-plain-border-color);
  }

  .soft.solid {
    color: var(--luna-soft-text-color-inverse);
    background-color: var(--luna-soft-bkg-color);
  }
  .soft.solid:hover {
    background-color: var(--luna-soft-bkg-color-sec);
  }
  .soft.flat {
    color: var(--luna-soft-text-color);
  }
  .soft.flat:hover {
    background-color: var(--luna-soft-bkg-color-alpha1);
  }
  .soft.flat.outlined {
    border-color: var(--luna-soft-border-color);
  }

  .accent.solid {
    color: var(--luna-accent-text-color-inverse);
    background-color: var(--luna-accent-bkg-color);
  }
  .accent.solid:hover {
    background-color: var(--luna-accent-bkg-color-sec);
  }
  .accent.flat {
    color: var(--luna-accent-text-color);
  }
  .accent.flat:hover {
    background-color: var(--luna-accent-bkg-color-alpha1);
  }
  .accent.flat.outlined:hover {
    border-color: var(--luna-accent-border-color);
  }

  .danger.solid {
    color: var(--luna-danger-text-color-inverse);
    background-color: var(--luna-danger-bkg-color);
  }
  .danger.solid:hover {
    background-color: var(--luna-danger-bkg-color-sec);
  }
  .danger.flat {
    color: var(--luna-danger-text-color);
  }
  .danger.flat:hover {
    background-color: var(--luna-danger-bkg-color-alpha1);
  }
  .danger.flat.outlined:hover {
    border-color: var(--luna-danger-border-color);
  }

  .warning.solid {
    color: var(--luna-warning-text-color-inverse);
    background-color: var(--luna-warning-bkg-color);
  }
  .warning.solid:hover {
    background-color: var(--luna-warning-bkg-color-sec);
  }
  .warning.flat {
    color: var(--luna-warning-text-color);
  }
  .warning.flat:hover {
    background-color: var(--luna-warning-bkg-color-alpha1);
  }
  .warning.flat.outlined:hover {
    border-color: var(--luna-warning-border-color);
  }

  .success.solid {
    color: var(--luna-success-text-color-inverse);
    background-color: var(--luna-success-bkg-color);
  }
  .success.solid:hover {
    background-color: var(--luna-success-bkg-color-sec);
  }
  .success.flat {
    color: var(--luna-success-text-color);
  }
  .success.flat:hover {
    background-color: var(--luna-success-bkg-color-alpha1);
  }
  .success.flat.outlined:hover {
    border-color: var(--luna-success-border-color);
  }

  /* DISABLED */
  .Button:disabled {
    cursor: default;
  }
  .Button.solid:disabled {
    background-color: var(--luna-disabled-bkg-color);
    color: var(--luna-disabled-text-color-inverse);
  }
  .Button.flat:disabled {
    color: var(--luna-disabled-text-color);
    background-color: transparent;
  }
  .Button.flat.outlined:disabled {
    border-color: var(--luna-disabled-border-color);
  }
</style>
