<script>
  /**
   * circle progress color
   * @type {"plain"|"accent"|"danger"|"warning"|"success"|string}
   */
  export let color = "plain";

  /**
   * 0 <= percentage <= 100 (you don't say!)
   * @type {number}
   */
  export let percentage;

  /**
   * size of the progress indicator (=width=height)
   * @type {number}
   */
  export let size = 100;

  /**
   * circle stroke width
   * @type {number}
   */
  export let strokeWidth = 8;

  /**
   * progress stroke linecap
   * @type {"round"|"square"}
   */
  export let linecap = "round";

  const colors = {
    plain: "var(--luna-plain-color)",
    accent: "var(--luna-accent-color)",
    danger: "var(--luna-danger-color)",
    warning: "var(--luna-warning-color)",
    success: "var(--luna-success-color)",
  };

  $: radius = Math.floor((size - strokeWidth) / 2);
</script>

<div class="progress">
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    stroke-linecap={linecap}
    stroke-width={strokeWidth}
  >
    <circle cx={size / 2} cy={size / 2} r={radius} />
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
    {#if !$$slots.default}
      <span style={`font-size: ${Math.floor(size / 5)}px`}>
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
    fill: none;
    stroke: var(--luna-bkg-color-alpha1);
    transform: rotateZ(-90deg);
  }
  circle:nth-child(2) {
    transition: opacity var(--luna-duration-30) var(--luna-timing-ease-in-out),
      stroke-dasharray var(--luna-duration-30) var(--luna-timing-ease-in-out);
    will-change: opacity, stroke-dasharray;
  }
</style>
