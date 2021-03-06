<script context="module" lang="ts">
  export type SegmentTheme = "plain" | "accent" | "danger" | "warning" | "success";
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { classNames, mergeStyles } from "../utils";

  /** Reference to the DOM component element */
  export let ref: HTMLButtonElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline style */
  export let style: string | undefined = undefined;

  /** Inline style for selected state (merged with style prop) */
  export let selectedStyle: string | undefined = undefined;

  /** Segment value */
  export let value: string | number | undefined = undefined;

  /** Segmented control group value */
  export let group: string | number | undefined = undefined;

  /** Segment selection state (takes precedence over value+group) */
  export let selected: boolean | undefined = undefined;

  /** Color theme */
  export let theme: SegmentTheme = "accent";

  $: isSelected = selected ?? (value !== undefined && value === group);
  $: cn = classNames("Segment", theme, className);
  $: currentStyle = mergeStyles(style, isSelected ? selectedStyle : undefined);

  const dispatch = createEventDispatcher();

  function handleClick() {
    if (group !== undefined && value !== undefined && selected === undefined) {
      group = value;
    }
    dispatch("change", value);
  }
</script>

<button
  bind:this={ref}
  class={cn}
  class:selected={isSelected}
  style={currentStyle}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</button>

<style>
  button {
    position: relative;
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 6px 18px;
    border: none;
    outline: none;
    border-radius: var(--luna-border-radius-m);
    background-color: transparent;
    color: var(--luna-text-color-secondary);
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition-duration: var(--luna-duration-10);
    transition-property: background-color, color;
    transition-timing-function: linear;
    will-change: background-color, color;
  }
  button:hover {
    background-color: var(--luna-bkg-color-alpha1);
  }
  button:focus-visible {
    box-shadow: var(--luna-focur-ring);
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
