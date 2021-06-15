<script>
  import { mergeStyles } from "../utils";

  /**
   * 0 <= percentage <= 100 (you don't say!)
   * @type {number}
   */
  export let percentage;

  /**
   * progress color
   * @type {"plain"|"accent"|"danger"|"warning"|"success"|string}
   */
  export let color = "plain";

  /**
   * track color
   * @type {string}
   */
  export let trackColor = null;

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
  const labelColors = {
    plain: "color: var(--luna-plain-text-color-inverse)",
    accent: "color: var(--luna-accent-text-color-inverse)",
    danger: "color: var(--luna-danger-text-color-inverse)",
    warning: "color: var(--luna-warning-text-color-inverse)",
    success: "color: var(--luna-success-text-color-inverse)",
  };

  $: mergedLabelStyle = mergeStyles(labelColors[color], labelStyle);
</script>

<div class="progress">
  <div
    class="content"
    style={`background-color: ${
      colors[color] || color
    }; max-width: ${percentage}%`}
  >
    {#if showLabel}
      <span style={mergedLabelStyle}>
        {#if $$slots.default}
          <slot />
        {:else}
          {percentage}%
        {/if}
      </span>
    {/if}
  </div>
</div>

<style>
  .progress {
    background-color: var(--luna-bkg-color-alpha2);
    border-radius: 1000px;
  }
  .content {
    box-sizing: border-box;
    min-height: 10px;
    border-radius: 10px;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    transition: max-width var(--luna-duration-30) var(--luna-timing-ease-in-out),
      opacity var(--luna-duration-30) var(--luna-timing-ease-in-out);
    will-change: width, opacity;
  }
  span {
    display: inline-block;
    padding: 0 8px;
  }
</style>
