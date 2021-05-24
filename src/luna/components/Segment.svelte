<script>
  import { classNames } from "../utils";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * segment selection state
   * @type {boolean}
   */
  export let selected = false;

  /**
   * color theme
   * @type {"plain"|"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "accent";

  /**
   * inline style
   * @type {string}
   */
  export let style = null;

  /**
   * inline style for selected state (merged with style prop)
   * @type {string}
   */
  export let selectedStyle = null;

  $: cn = classNames("Segment", theme, className);
  $: currentStyle = [style, selected ? selectedStyle : ""].join(";");
</script>

<div class={cn} class:selected style={currentStyle} on:click {...$$restProps}>
  <slot />
</div>

<style>
  div {
    position: relative;
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 6px 18px;
    border-radius: var(--luna-border-radius-m);
    background-color: transparent;
    color: var(--luna-text-color-secondary);
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition-duration: var(--luna-duration-fast);
    transition-property: background-color, color;
    transition-timing-function: linear;
    will-change: background-color, color;
  }
  div:hover {
    background-color: var(--luna-bkg-color-alpha2);
  }
  .selected.plain {
    background-color: var(--luna-plain-bkg-color);
    color: var(--luna-plain-text-color-inverse);
  }
  .selected.accent {
    background-color: var(--luna-accent-bkg-color);
    color: var(--luna-accent-text-color-inverse);
  }
  .selected.danger {
    background-color: var(--luna-danger-bkg-color);
    color: var(--luna-danger-text-color-inverse);
  }
  .selected.warning {
    background-color: var(--luna-warning-bkg-color);
    color: var(--luna-warning-text-color-inverse);
  }
  .selected.success {
    background-color: var(--luna-success-bkg-color);
    color: var(--luna-success-text-color-inverse);
  }
</style>
