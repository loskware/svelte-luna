<script>
  import { classNames } from "./utils";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

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
  export let trackColor = "var(--luna-bkg-color-alpha2)";

  /**
   * progress stroke linecap
   * @type {"round"|"square"}
   */
  export let linecap = "round";

  /**
   * hide default label
   * @type {boolean}
   */
  export let hideLabel = false;

  /**
   * label color
   * @type {string}
   */
  export let labelColor = null;

  const colors = {
    plain: "var(--luna-plain-color)",
    accent: "var(--luna-accent-color)",
    danger: "var(--luna-danger-color)",
    warning: "var(--luna-warning-color)",
    success: "var(--luna-success-color)",
  };
  const labelColors = {
    plain: "var(--luna-plain-text-color-inverse)",
    accent: "var(--luna-accent-text-color-inverse)",
    danger: "var(--luna-danger-text-color-inverse)",
    warning: "var(--luna-warning-text-color-inverse)",
    success: "var(--luna-success-text-color-inverse)",
  };

  $: trackStyle = `background-color: ${trackColor}; border-radius: ${
    linecap === "round" ? 1000 : 0
  }px`;

  $: progressStyle = `background-color: ${
    colors[color] || color
  }; border-radius: ${
    linecap === "round" ? 1000 : 0
  }px; max-width: ${percentage}%`;

  $: cn = classNames("track", className);
</script>

<div class={cn} {...$$restProps} style={trackStyle}>
  <div class="progress" style={progressStyle}>
    {#if !hideLabel}
      <span style={`color: ${labelColor || labelColors[color]}`}>
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
  .track {
    overflow: hidden;
  }
  .progress {
    box-sizing: border-box;
    min-height: 10px;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    white-space: nowrap;
    transition: max-width var(--luna-duration-30) var(--luna-timing-ease-in-out),
      opacity var(--luna-duration-30) var(--luna-timing-ease-in-out);
    will-change: width, opacity;
  }
  span {
    display: inline-block;
    padding: 0 8px;
    user-select: none;
  }
</style>
