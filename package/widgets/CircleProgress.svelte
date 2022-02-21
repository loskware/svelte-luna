<script >import { classNames, mergeStyles } from '../utils';
/** Reference to the DOM component element */
export let ref = undefined;
/** CSS class */
let className = null;
export { className as class };
/** Root div style */
export let style = null;
/** 0 <= percentage <= 100 (you don't say!) */
export let percentage;
/** Size of the progress indicator (=width=height) */
export let size = 120;
/** Circle progress color */
export let color = 'plain';
/** Circle track color */
export let trackColor = 'var(--luna-bkg-color-alpha2)';
/** Circle background color */
export let backgroundColor = null;
/** Circle stroke width */
export let strokeWidth = 10;
/** Progress stroke linecap */
export let linecap = 'round';
/** Show default label */
export let showLabel = true;
/** Label style */
export let labelStyle = null;
const colors = {
    plain: 'var(--luna-plain-color)',
    accent: 'var(--luna-accent-color)',
    danger: 'var(--luna-danger-color)',
    warning: 'var(--luna-warning-color)',
    success: 'var(--luna-success-color)'
};
$: radius = Math.floor((size - strokeWidth) / 2);
$: mergedRootStyle = mergeStyles(`height:${size}px;width:${size}px`, style);
$: mergedLabelStyle = mergeStyles(`font-size: ${Math.floor(size / 5)}px`, labelStyle);
$: cn = classNames('CircleProgress', className);
</script>

<div bind:this={ref} class={cn} style={mergedRootStyle} {...$$restProps}>
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
			fill={backgroundColor || 'none'}
		/>
		<circle
			class="stroke"
			cx={size / 2}
			cy={size / 2}
			r={radius}
			opacity={percentage === 0 ? 0 : 1}
			stroke={colors[color] || color}
			stroke-dasharray={`${(2 * Math.PI * radius * percentage) / 100} ${2 * Math.PI * radius}`}
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
	.CircleProgress {
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
