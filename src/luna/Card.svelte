<script>
  import { classNames } from "./utils";

  /**
   * Reference to the DOM component element
   * @type {HTMLDivElement}
   */
  export let ref = null;

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * inline styles
   * @type {string}
   */
  export let style = null;

  /**
   * color variant
   * @type {"default"|"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "default";

  /**
   * shortcut for setting background color
   * @type {string}
   */
  export let backgroundColor = null;

  /**
   * render default border
   * @type {boolean}
   */
  export let outlined = false;

  /**
   * set elevation shadow.
   * from 0 (= no shadow) to 9.
   * @type {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}
   */
  export let elevation = 0;

  /**
   * @type {boolean}
   */
  export let hideOverflow = false;

  /**
   * shortcut for setting padding
   * @type {string|number}
   */
  export let padding = null;

  const elevations = [
    "none",
    "var(--luna-elevation-1)",
    "var(--luna-elevation-2)",
    "var(--luna-elevation-4)",
    "var(--luna-elevation-6)",
    "var(--luna-elevation-8)",
    "var(--luna-elevation-12)",
    "var(--luna-elevation-16)",
    "var(--luna-elevation-20)",
    "var(--luna-elevation-24)",
  ];

  $: cn = classNames("Card", theme, className);
</script>

<div
  bind:this={ref}
  class={cn}
  class:outlined
  class:hideOverflow
  style:background-color={backgroundColor}
  style:padding={typeof padding === "number" ? `${padding}px` : padding}
  style:box-shadow={elevations[elevation] ?? "none"}
  {style}
  {...$$restProps}
>
  <slot />
</div>

<style>
  div {
    border-radius: var(--luna-border-radius-l);
  }

  .outlined {
    border-style: solid;
    border-width: 1px;
  }
  .hideOverflow {
    overflow: hidden;
  }

  /* THEMES */
  .default {
    background-color: var(--luna-card-bkg-color);
    border-color: var(--luna-border-color);
  }
  .accent {
    background-color: var(--luna-accent-bkg-color-alpha2);
    border-color: var(--luna-accent-border-color);
  }
  .danger {
    background-color: var(--luna-danger-bkg-color-alpha2);
    border-color: var(--luna-danger-border-color);
  }
  .warning {
    background-color: var(--luna-warning-bkg-color-alpha2);
    border-color: var(--luna-warning-border-color);
  }
  .success {
    background-color: var(--luna-success-bkg-color-alpha2);
    border-color: var(--luna-success-border-color);
  }
</style>
