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

  /**
   * @typedef SegmentedControlProps
   * @property {Array<Segment>} segments array of icon/label objects
   * @property {string|number} selected set the selected option value
   */
  $: cn = classNames(
    "SegmentedControl",
    theme,
    className
  );
</script>

<div class={cn} {...$$restProps}>
  <!-- {#each segment as { icon, title, value }, index}
    <label key={index}>
      <input
        type="radio"
        value={value || index}
        checked={selected == value || selected == index}
        {onChange}
      />
      <span>
        {icon}
        {#if title}
          <span>{title}</span>
        {/if}
      </span>
    </label>
  {/each} -->
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

  label {
    position: relative;
    flex: 1 1 0;
    user-select: none;
    white-space: nowrap;
  }

  input {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 6px 18px;
    border-radius: var(--luna-border-radius-m);
    background-color: transparent;
    color: var(--luna-text-color-secondary);
    font-weight: 500;
    transition-duration: var(--luna-duration-fast);
    transition-property: background-color, color;
    transition-timing-function: linear;
    will-change: background-color, color;
  }
  label > span:hover {
    background-color: var(--luna-bkg-color-alpha2);
  }

  .plain input:checked + span {
    background-color: var(--luna-plain-bkg-color);
    color: var(--luna-plain-text-color-inverse);
  }
  .accent input:checked + span {
    background-color: var(--luna-accent-bkg-color);
    color: var(--luna-accent-text-color-inverse);
  }
  .danger input:checked + span {
    background-color: var(--luna-danger-bkg-color);
    color: var(--luna-danger-text-color-inverse);
  }
  .warning input:checked + span {
    background-color: var(--luna-warning-bkg-color);
    color: var(--luna-warning-text-color-inverse);
  }
  .success input:checked + span {
    background-color: var(--luna-success-bkg-color);
    color: var(--luna-success-text-color-inverse);
  }
</style>
