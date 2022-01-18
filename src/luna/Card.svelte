<script>
  import { classNames, mergeStyles } from "./utils";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * shortcut for setting background color
   * @type {string}
   */
  export let backgroundColor = null;

  /**
   * render default border
   * @type {boolean}
   */
  export let outline = false;

  /**
   * render default shadow
   * @type {boolean}
   */
  export let hasShadow = false;

  /**
   * @type {boolean}
   */
  export let hideOverflow = false;

  /**
   * shortcut for setting padding
   * @type {string|number}
   */
  export let padding = null;

  /**
   * color variant
   * @type {"default"|"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "default";

  /**
   * inline styles
   * @type {string}
   */
  export let style = null;

  $: cn = classNames("Card", theme, className);
  $: styles = mergeStyles(
    `
    background-color: ${backgroundColor};
    padding: ${typeof padding === "number" ? `${padding}px` : padding}
    `,
    style
  );
</script>

<div
  class={cn}
  class:outline
  class:hideOverflow
  class:hasShadow
  style={styles}
  {...$$restProps}
>
  <slot />
</div>

<style>
  div {
    border-radius: var(--luna-border-radius-l);
  }

  .outline {
    border-style: solid;
    border-width: 1px;
  }
  .hasShadow {
    box-shadow: var(--luna-elevation-2);
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
