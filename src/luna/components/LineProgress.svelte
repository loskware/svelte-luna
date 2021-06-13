<script>
  import { mergeStyles } from "../utils";

  /**
   * 0 <= percentage <= 100 (you don't say!)
   * @type {number}
   */
  export let percentage;

  /**
   * size of the progress indicator (=width=height)
   * @type {number}
   */
  export let size = 120;

  /**
   * circle progress color
   * @type {"plain"|"accent"|"danger"|"warning"|"success"|string}
   */
  export let color = "plain";

  /**
   * circle track color
   * @type {string}
   */
  export let trackColor = null;

  /**
   * circle stroke width
   * @type {number}
   */
  export let strokeWidth = 10;

  /**
   * progress stroke linecap
   * @type {"round"|"square"}
   */
  export let linecap = "round";

  /**
   * show default label
   * @type {boolean}
   */
  export let showLabel = true;

  /**
   * label style
   * @type {string}
   */
  export let labelStyle = null;

  const colors = {
    plain: "var(--luna-plain-color)",
    accent: "var(--luna-accent-color)",
    danger: "var(--luna-danger-color)",
    warning: "var(--luna-warning-color)",
    success: "var(--luna-success-color)",
  };

  $: radius = Math.floor((size - strokeWidth) / 2);
  $: mergedLabelStyle = mergeStyles(
    `font-size: ${Math.floor(size / 5)}px`,
    labelStyle
  );
</script>

<div class="progress" style={`height:${size}px;width:${size}px`}>
  
  <div class="content">
    <slot />
    {#if !$$slots.default && showLabel}
      <span style={mergedLabelStyle}>
        {percentage}%
      </span>
    {/if}
  </div>
</div>

<style>
</style>
