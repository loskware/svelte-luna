<script>
  import { classNames } from "../utils";

  /** @type {string} */
  export let classes = null;

  /** @type {string} shortcut for setting background color */
  export let backgroundColor = null;

  /** @type {boolean} render default border */
  export let hasBorder = false;

  /** @type {boolean} render default shadow  */
  export let hasShadow = false;

  /** @type {string|number} shortcut for setting padding  */
  export let padding = null;

  /** @type {"default"|"accent"|"danger"|"warning"|"success"} color variant */
  export let theme = "default";

  /** @type {string} inline styles*/
  export let style = null;

  $: cn = classNames("Card", theme, classes);

  $: styles = [
    `background-color: ${backgroundColor}`,
    `padding: ${typeof padding === "number" ? `${padding}px` : {padding}}`,
    style,
  ].join(";");
</script>

<div
  class={cn}
  class:border={hasBorder}
  class:shadow={hasShadow}
  style={styles}
  {...$$restProps}
>
  <slot />
</div>

<style lang="scss">
  div {
    border-radius: var(--luna-border-radius-l);
    overflow: hidden;
    padding: 1rem;
  }
  .border {
    border-style: solid;
    border-width: 1px;
  }
  .shadow {
    box-shadow: var(--luna-elevation-2);
  }

  // VARIANTS
  .default {
    background-color: var(--luna-bkg-color-alpha1);
    border-color: var(--luna-border-color);
  }
  .accent {
    background-color: var(--luna-accent-bkg-color-alpha1);
    border-color: var(--luna-accent-border-color);
  }
  .danger {
    background-color: var(--luna-danger-bkg-color-alpha1);
    border-color: var(--luna-danger-border-color);
  }
  .warning {
    background-color: var(--luna-warning-bkg-color-alpha1);
    border-color: var(--luna-warning-border-color);
  }
  .success {
    background-color: var(--luna-success-bkg-color-alpha1);
    border-color: var(--luna-success-border-color);
  }
</style>
