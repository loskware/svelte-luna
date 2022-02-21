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
/** Progress color */
export let color = 'plain';
/** Track color */
export let trackColor = 'var(--luna-bkg-color-alpha2)';
/** Progress stroke linecap */
export let linecap = 'round';
/** Hide default label */
export let hideLabel = false;
/** Label color */
export let labelColor = null;
const colors = {
    plain: 'var(--luna-plain-color)',
    accent: 'var(--luna-accent-color)',
    danger: 'var(--luna-danger-color)',
    warning: 'var(--luna-warning-color)',
    success: 'var(--luna-success-color)'
};
const labelColors = {
    plain: 'var(--luna-plain-text-color-inverse)',
    accent: 'var(--luna-accent-text-color-inverse)',
    danger: 'var(--luna-danger-text-color-inverse)',
    warning: 'var(--luna-warning-text-color-inverse)',
    success: 'var(--luna-success-text-color-inverse)'
};
$: trackStyle = mergeStyles(`background-color: ${trackColor};
    border-radius: ${linecap === 'round' ? 1000 : 0}px`, style);
$: progressStyle = `background-color: ${colors[color] || color}; border-radius: ${linecap === 'round' ? 1000 : 0}px; max-width: ${percentage}%`;
$: cn = classNames('LineProgress', className);
</script>

<div bind:this={ref} class={cn} {...$$restProps} style={trackStyle}>
	<div style={progressStyle}>
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
	.LineProgress {
		overflow: hidden;
	}
	.LineProgress > div {
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
