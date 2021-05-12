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
    {...$$restProps}
  >
    <slot />
  </button>
{/if}

<style lang="scss">
  // BASE BUTTON CLASS
  .Button {
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
    transition-duration: var(--luna-duration-fast);
    transition-timing-function: linear;
    transition-property: background-color, border-color, opacity;
    will-change: background-color, border-color, opacity;
    user-select: none;
    cursor: pointer;
    &:active {
      opacity: 0.7;
    }
  }

  // SIZES
  .compact {
    padding: 6px 10px;
    gap: 4px;
    font-size: 12px;
    line-height: 14px;
  }
  .normal {
    padding: 8px 14px;
    gap: 6px;
    font-size: 14px;
    line-height: 16px;
  }
  .large {
    padding: 10px 18px;
    gap: 8px;
    font-size: 16px;
    line-height: 18px;
  }

  // OUTLINED
  .outlined {
    border-color: var(--luna-border-color-sec);
  }

  // ROUNDED
  .rounded {
    border-radius: 50vh;
    &.compact {
      padding: 6px;
    }
    &.normal {
      padding: 8px;
    }
    &.large {
      padding: 12px;
    }
  }

  // VARIANTS
  .plain {
    &.solid {
      color: var(--luna-plain-text-color-inverse);
      background-color: var(--luna-plain-bkg-color);
      &:hover {
        background-color: var(--luna-plain-bkg-color-sec);
      }
    }
    &.flat {
      color: var(--luna-plain-text-color);
      &:hover {
        background-color: var(--luna-plain-bkg-color-alpha1);
      }
      &:hover.outlined {
        border-color: var(--luna-plain-border-color);
      }
    }
  }
  .soft {
    &.outlined {
      border-color: var(--luna-soft-border-color);
    }
    &.solid {
      color: var(--luna-soft-text-color-inverse);
      background-color: var(--luna-soft-bkg-color);
      &:hover {
        background-color: var(--luna-soft-bkg-color-sec);
      }
    }
    &.flat {
      color: var(--luna-soft-text-color);
      &:hover {
        background-color: var(--luna-soft-bkg-color-alpha1);
      }
    }
  }
  .accent {
    &.solid {
      color: var(--luna-accent-text-color-inverse);
      background-color: var(--luna-accent-bkg-color);
      &:hover {
        background-color: var(--luna-accent-bkg-color-sec);
      }
    }
    &.flat {
      color: var(--luna-accent-text-color);
      &:hover {
        background-color: var(--luna-accent-bkg-color-alpha1);
      }
      &:hover.outlined {
        border-color: var(--luna-accent-border-color);
      }
    }
  }
  .danger {
    &.solid {
      color: var(--luna-danger-text-color-inverse);
      background-color: var(--luna-danger-bkg-color);
      &:hover {
        background-color: var(--luna-danger-bkg-color-sec);
      }
    }
    &.flat {
      color: var(--luna-danger-text-color);
      &:hover {
        background-color: var(--luna-danger-bkg-color-alpha1);
      }
      &:hover.outlined {
        border-color: var(--luna-danger-border-color);
      }
    }
  }
  .warning {
    &.solid {
      color: var(--luna-warning-text-color-inverse);
      background-color: var(--luna-warning-bkg-color);
      &:hover {
        background-color: var(--luna-warning-bkg-color-sec);
      }
    }
    &.flat {
      color: var(--luna-warning-text-color);
      &:hover {
        background-color: var(--luna-warning-bkg-color-alpha1);
      }
      &:hover.outlined {
        border-color: var(--luna-warning-border-color);
      }
    }
  }
  .success {
    &.solid {
      color: var(--luna-success-text-color-inverse);
      background-color: var(--luna-success-bkg-color);
      &:hover {
        background-color: var(--luna-success-bkg-color-sec);
      }
    }
    &.flat {
      color: var(--luna-success-text-color);
      &:hover {
        background-color: var(--luna-success-bkg-color-alpha1);
      }
      &:hover.outlined {
        border-color: var(--luna-success-border-color);
      }
    }
  }
  // DISABLED
  .Button:disabled {
      cursor: default;
      &.solid {
        background-color: var(--luna-disabled-bkg-color);
        color: var(--luna-disabled-text-color-inverse);
      }
      &.flat {
        color: var(--luna-disabled-text-color);
        background-color: transparent;
      }
      &.flat.outlined {
        border-color: var(--luna-disabled-border-color);
      }
    }
</style>
