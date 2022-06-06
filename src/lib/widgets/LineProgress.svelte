<script lang="ts">
	import { classNames, mergeStyles } from '../utils';

	type ProgressColor = 'plain' | 'accent' | 'danger' | 'warning' | 'success' | string;
  type ProgressLinecap = 'round' | 'square';

	/** Reference to the DOM component element */
	export let ref: HTMLDivElement | undefined = undefined;

	/** CSS class */
	let className: string | undefined = undefined;
	export { className as class };

	/** Root div style */
	export let style: string | undefined = undefined;

	/** 0 <= percentage <= 100 (you don't say!) */
	export let percentage: number;

	/** Progress color */
	export let color: ProgressColor = 'plain';

	/** Track color */
	export let trackColor: string = 'var(--luna-bkg-color-alpha2)';

	/** Progress stroke linecap */
	export let linecap: ProgressLinecap = 'round';

	/** Hide default label */
	export let hideLabel: boolean = false;

	/** Label color */
	export let labelColor: string | undefined = undefined;

	const colors: { [key: string]: string | undefined} = {
		plain: 'var(--luna-plain-color)',
		accent: 'var(--luna-accent-color)',
		danger: 'var(--luna-danger-color)',
		warning: 'var(--luna-warning-color)',
		success: 'var(--luna-success-color)'
	};
	const labelColors: { [key: string]: string | undefined} = {
		plain: 'var(--luna-plain-text-color-inverse)',
		accent: 'var(--luna-accent-text-color-inverse)',
		danger: 'var(--luna-danger-text-color-inverse)',
		warning: 'var(--luna-warning-text-color-inverse)',
		success: 'var(--luna-success-text-color-inverse)'
	};

	$: trackStyle = mergeStyles(
		`background-color: ${trackColor};
    border-radius: ${linecap === 'round' ? 1000 : 0}px`,
		style
	);

	$: progressStyle = `background-color: ${colors[color] || color}; border-radius: ${
		linecap === 'round' ? 1000 : 0
	}px; max-width: ${percentage}%`;

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
