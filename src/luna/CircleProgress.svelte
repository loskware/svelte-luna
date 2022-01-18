<script>
  import { classNames, mergeStyles } from "./utils";

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
  export let trackColor = "var(--luna-bkg-color-alpha2)";

  /**
   * circle background color
   * @type {string}
   */
  export let backgroundColor = null;

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

  $: cn = classNames("progress", className);
</script>

<div class={cn} style={`height:${size}px;width:${size}px`} {...$$restProps}>
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    stroke-linecap={linecap}
    stroke-width={strokeWidth}
  >
    <circle
      cx={size / 2}
      cy={size / 2}
      r={radius}
      stroke={trackColor}
      fill={backgroundColor || "none"}
    />
    <circle
      class="stroke"
      cx={size / 2}
      cy={size / 2}
      r={radius}
      opacity={percentage === 0 ? 0 : 1}
      stroke={colors[color] || color}
      stroke-dasharray={`${(2 * Math.PI * radius * percentage) / 100} ${
        2 * Math.PI * radius
      }`}
      stroke-dashoffset="0"
    />
  </svg>
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
  .progress {
    position: relative;
  }
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  svg {
    display: block;
    fill: none;
    transform: rotateZ(-90deg);
  }
  circle:nth-child(2) {
    transition: opacity var(--luna-duration-30) var(--luna-timing-ease-in-out),
      stroke-dasharray var(--luna-duration-30) var(--luna-timing-ease-in-out);
    will-change: opacity, stroke-dasharray;
  }
</style>
