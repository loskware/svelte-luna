<script>
  import { classNames } from "../utils";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * FlipView height
   * @type {number|string}
   */
  export let height;

  /**
   * FlipView width
   * @type {number|string}
   */
  export let width;

  /**
   * Rotation Axis
   * @type {"x"|"y"}
   */
  export let axis = "x";

  /**
   * Rotate clockwise or counter-clockwise
   * @type {boolean}
   */
  export let clockwise = false;

  /**
   * Change visible face
   * @type {boolean}
   */
  export let flipped = false;

  $: cn = classNames("FlipView", `flip-${axis}`, className);
</script>

<div
  class={cn}
  class:clockwise
  class:flipped
  style={`height: ${
    typeof height === "number" ? `${height}px` : height
  }; width: ${typeof width === "number" ? `${width}px` : width}`}
  {...$$restProps}
>
  <div class="wrapper">
    <div class="back"><slot name="back" /></div>
    <div class="front"><slot name="front" /></div>
  </div>
</div>

<style>
  .FlipView {
    perspective: 600px;
  }

  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    transition: transform var(--luna-duration-40) var(--luna-timing-ease-in-out);
    will-change: transform;
  }

  .back,
  .front {
    position: absolute;
    backface-visibility: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .flip-x .front {
    transform: rotateX(0);
  }
  .flip-x .back {
    transform: rotateX(180deg);
  }
  .flip-x.flipped .wrapper {
    transform: rotateX(-180deg);
  }
  .flip-x.clockwise.flipped .wrapper {
    transform: rotateX(180deg);
  }

  .flip-y .front {
    transform: rotateY(0);
  }
  .flip-y .back {
    transform: rotateY(180deg);
  }
  .flip-y.flipped .wrapper {
    transform: rotateY(-180deg);
  }
  .flip-y.clockwise.flipped .wrapper {
    transform: rotateY(180deg);
  }
</style>
