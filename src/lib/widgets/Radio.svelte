<script lang="ts">
	import { classNames } from '../utils';
	import { createEventDispatcher } from 'svelte';

	type RadioTheme = 'accent' | 'danger' | 'warning' | 'success';
	type RadioLabelPosition = 'left' | 'right';

	/** Reference to the DOM component element */
	export let ref: HTMLDivElement | undefined = undefined;

	/** Reference to the inner input element */
	export let input: HTMLInputElement | undefined = undefined;

	/** CSS class */
	let className: string | null = null;
	export { className as class };

	/** Root div element inline style */
	export let style: string | null = null;

	/** Color theme */
	export let theme: RadioTheme = 'accent';

	/** Select radio, take precedence over group */
	export let checked: boolean | null = null;

	/** Radio value */
	export let value: string | number | null = null;

	/** Radio group selected value */
	export let group: string | number | null = null;

	/** Disable checkbox */
	export let disabled: boolean = false;

	/** Label text */
	export let label: string = '';

	/** Label inline style */
	export let labelStyle: string | null = null;

	/** Label CSS class */
	export let labelClass: string | null = null;

	/** Label position */
	export let labelPosition: RadioLabelPosition = 'right';

	$: state = checked ?? (value !== null && value === group);
	$: cn = classNames('Radio', theme, labelPosition, className);
	$: lcn = classNames('label', labelClass);

	const dispatch = createEventDispatcher();

	function handleClick() {
		if (disabled) return;
		if (group !== null && value !== null && checked === null) group = value;
		dispatch('change', value);
	}
</script>

<div bind:this={ref} class={cn} {style} class:disabled on:click={handleClick}>
	<input bind:this={input} type="radio" checked={state} {value} {disabled} {...$$restProps} />
	<span class="mark" />
	{#if label}
		<span class={lcn} style={labelStyle}>{label}</span>
	{/if}
</div>

<style>
	div {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		padding: 4px;
		cursor: pointer;
	}
	div:hover > .mark {
		border-color: currentColor;
	}

	input {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		visibility: hidden;
	}
	input:checked + .mark {
		border-color: currentColor;
	}
	input:checked + .mark::after {
		transform: scale(1);
	}
	input:disabled + .mark {
		border-color: var(--luna-disabled-border-color);
		color: var(--luna-disabled-color);
	}
	input:disabled ~ .label {
		color: var(--luna-disabled-text-color);
	}

	.mark {
		position: relative;
		display: block;
		box-sizing: content-box;
		height: 16px;
		width: 16px;
		border: 1px solid var(--luna-border-color);
		border-radius: 50%;
	}
	.mark::after {
		position: absolute;
		top: 3px;
		bottom: 3px;
		left: 3px;
		right: 3px;
		content: '';
		background-color: currentColor;
		border-radius: 50%;
		transform: scale(0);
		transition: transform ease-out var(--luna-duration-10);
		will-change: transform;
	}

	.label {
		color: var(--luna-text-color);
		font-size: 0.875rem;
		line-height: 1rem;
		user-select: none;
		white-space: nowrap;
	}

	/* LABEL POSITIONS */
	.left {
		flex-direction: row-reverse;
	}
	.left > .label {
		margin-right: 12px;
	}
	.right {
		flex-direction: row;
	}
	.right > .label {
		margin-left: 12px;
	}

	/* THEMES */
	.accent {
		color: var(--luna-accent-color);
	}
	.danger {
		color: var(--luna-danger-color);
	}
	.warning {
		color: var(--luna-warning-color);
	}
	.success {
		color: var(--luna-success-color);
	}
	.disabled {
		cursor: default;
	}
</style>
