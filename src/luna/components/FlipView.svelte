<script>
  import { classNames } from "../utils";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * Rotation Axis
   * @type {"x"|"y"}
   */
  export let axis = "x";

  /**
   * Change visible face
   * @type {boolean}
   */
  export let flipped = false;

  $: cn = classNames(
    "FlipView",
    `flip-${axis}`,
    flipped && "flipped",
    className
  );
</script>

<div class={cn} {...$$restProps}>
  <div class="wrapper">
    <div class="front"><slot name="front" /></div>
    <div class="back"><slot name="back" /></div>
  </div>
</div>

<style>
  .FlipView {
    perspective: 600px;
  }

  .wrapper {
    position: relative;
    transform-style: preserve-3d;
    transition: transform var(--luna-duration-slow)
      var(--luna-timing-ease-in-out);
    will-change: transform;
  }

  .front {
    backface-visibility: hidden;
    z-index: 2;
  }
  .back {
    position: absolute;
    backface-visibility: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .flip-x .back {
    transform: rotateX(-180deg);
  }
  .flip-x.flipped .wrapper {
    transform: rotateX(-180deg);
  }

  .flip-y .back {
    transform: rotateY(-180deg);
  }
  .flip-y.flipped .wrapper {
    transform: rotateY(-180deg);
  }

</style>
