<script>
  /**
   * 0 <= percentage <= 100 (you don't say!)
   * @type {number}
   */
  export let percentage;

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
</script>

<div class="progress" style={``}>
  <div
    class="content"
    style={`background-color: ${colors[color] || color}; max-width: ${percentage}%`}
  >
    <slot />
    {#if !$$slots.default && showLabel}
      <span style={labelStyle}>
        {percentage}%
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
    
    border-radius: 1000px;
    font-size: 12px;
    line-height: 12px;
    text-align: right;
    transition: max-width var(--luna-duration-30) var(--luna-timing-ease-in-out),
      opacity var(--luna-duration-30) var(--luna-timing-ease-in-out);
    will-change: width, opacity;
  }
  span {
    margin: 4px 8px;
  }
</style>
