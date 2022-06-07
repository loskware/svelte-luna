<script lang="ts">
  import { classNames } from "../utils";

  type ButtonTheme =
    | "plain"
    | "soft"
    | "accent"
    | "danger"
    | "warning"
    | "success";

  /** Reference to the DOM component element */
  export let ref: HTMLButtonElement | HTMLAnchorElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline styles */
  export let style: string | undefined = undefined;

  /** Color theme */
  export let theme: ButtonTheme = "accent";

  /** Compact variant */
  export let compact: boolean = false;

  /** Large variant */
  export let large: boolean = false;

  /** Draw button border */
  export let outlined: boolean = false;

  /** Solid style */
  export let solid: boolean = false;

  /** --> border-radius: 50% */
  export let rounded: boolean = false;

  export let icon: boolean = false;

  /** Link url */
  export let href: string | undefined = undefined;

  $: cn = classNames("Button", theme, className);
</script>

{#if href}
  <a
    bind:this={ref}
    class={cn}
    class:compact
    class:large
    class:outlined
    class:rounded
    class:solid
    class:icon
    class:flat={!solid}
    {href}
    {style}
    on:click
    {...$$restProps}
  >
    <slot />
  </a>
{:else}
  <button
    bind:this={ref}
    class={cn}
    class:compact
    class:large
    class:outlined
    class:rounded
    class:solid
    class:icon
    class:flat={!solid}
    {style}
    on:click
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
    padding: 0 14px;
    min-height: 34px;
    gap: 6px;
    font-size: 0.875rem;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: var(--luna-border-radius-m);
    outline: none;
    font-family: inherit;
    font-weight: 500;
    line-height: 1em;
    letter-spacing: 0.25px;
    white-space: nowrap;
    transition: opacity linear var(--luna-duration-10);
    will-change: opacity;
    user-select: none;
    cursor: pointer;
  }
  a:active:not(:disabled),
  button:active:not(:disabled) {
    opacity: 0.7;
  }

  a:focus-visible,
  button:focus-visible {
    border-color: transparent;
    box-shadow: var(--luna-focus-ring);
  }

  /* SIZES */
  .compact {
    padding: 0 12px;
    min-height: 28px;
    gap: 4px;
    font-size: 12px;
  }
  .large {
    padding: 0 18px;
    min-height: 42px;
    gap: 8px;
    font-size: 1rem;
  }

  /* OUTLINED */
  .outlined {
    border-color: var(--luna-border-color-soft);
  }

  /* ROUNDED */
  .rounded {
    border-radius: 1000px;
    padding: 0 8px;
  }
  .rounded.compact {
    padding: 0 8px;
  }
  .rounded.large {
    padding: 0 12px;
  }

  /* ICON BUTTON */
  .icon {
    padding: 0 8px;
    min-width: 34px;
  }
  .icon.compact {
    padding: 0 8px;
    min-width: 28px;
  }
  .icon.large {
    padding: 0 10px;
    min-width: 42px;
  }

  /* ROUNDED ICON BUTTON */
  .rounded.icon {
    padding: 0;
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
