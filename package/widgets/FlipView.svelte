<script >import { classNames, mergeStyles } from '../utils';
/** Reference to the DOM component element */
export let ref = undefined;
/** CSS class */
let className = null;
export { className as class };
/** Inline styles */
export let style = null;
/** FlipView height */
export let height;
/** FlipView width */
export let width;
/** Rotation Axis */
export let axis = 'x';
/** Rotate clockwise or counter-clockwise */
export let clockwise = false;
/** Change visible face */
export let flipped = false;
$: cn = classNames('FlipView', `flip-${axis}`, className);
$: rootStyle = mergeStyles(`height: ${typeof height === 'number' ? `${height}px` : height}; 
    width: ${typeof width === 'number' ? `${width}px` : width}`, style);
</script>

<div bind:this={ref} class={cn} class:clockwise class:flipped style={rootStyle} {...$$restProps}>
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
