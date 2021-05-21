<script>
import { classNames } from "../utils";

  /**
   * Segmented Control Option
   * @typedef Segment
   * @property {any} [icon]
   * @property {string} [title]
   * @property {string|number} [value] if value is not provided the option index is used instead
   */

   /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * color theme
   * @type {"plain"|"accent"|"danger"|"warning"|"success"}
   */
  export let theme = "accent";

  $: cn = classNames(
    "SegmentedControl",
    theme,
    className
  );
</script>

<div class={cn} {...$$restProps}>
  <slot />
</div>

<style>
  div {
    display: flex;
    gap: 2px;
    padding: 4px;
    overflow: hidden;
    line-height: 1rem;
    background-color: var(--luna-bkg-color-alpha1);
    border-radius: var(--luna-border-radius-l);
  }
</style>
