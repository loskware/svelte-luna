<script lang="ts">
	import { classNames, toggle } from '../utils';
	import { createEventDispatcher } from 'svelte';

	type CheckBoxTheme = 'accent' | 'danger' | 'warning' | 'success';
	type CheckBoxLabelPosition = 'left' | 'right';

	/** Reference to the DOM component element */
	export let ref: HTMLDivElement | undefined = undefined;

	/** Reference to the inner input element */
	export let input: HTMLInputElement | null = null;

	/** CSS class of the root div element */
	let className: string | null = null;
	export { className as class };

	/** Root div element inline style */
	export let style: string | null = null;

	/** Color theme */
	export let theme: CheckBoxTheme = 'accent';

	/** Toggle checkbox, take precedence over group */
	export let checked: boolean | null = null;

	/** Set indeterminate checkbox state */
	export let indeterminate: boolean | null = null;

	/** Checkbox value */
	export let value: string | number | null = null;

	/** Checkbox group selected values */
	export let group: Array<string | number> | null = null;

	/** Disable checkbox */
	export let disabled: boolean = false;

	/** Label text */
	export let label: string = '';

	/** Label inline style */
	export let labelStyle: string | null = null;

	/** Label CSS class */
	export let labelClass: string | null = null;

	/** Label position */
	export let labelPosition: CheckBoxLabelPosition = 'right';

	$: state = checked ?? (Array.isArray(group) && value !== null && group.includes(value));

	$: cn = classNames('CheckBox', theme, labelPosition, className);
	$: lcn = classNames('label', labelClass);

	const dispatch = createEventDispatcher();

	function handleClick() {
		if (disabled) return;
		if (Array.isArray(group) && value !== null && checked === null) {
			toggle(group, value);
			group = group;
		}
		dispatch('change', value);
	}
</script>

<div bind:this={ref} class={cn} {style} class:disabled on:click={handleClick}>
	<input
		bind:this={input}
		type="checkbox"
		checked={state}
		{indeterminate}
		{disabled}
		{...$$restProps}
	/>
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
	input:checked + .mark::before {
		transform: scale(1);
	}
	input:checked + .mark::after {
		transform: rotate(-45deg) scale(1);
	}

	input:indeterminate + .mark {
		border-color: currentColor;
	}
	input:indeterminate + .mark::before {
		transform: scale(0.5);
	}

	input:disabled + .mark {
		border-color: var(--luna-disabled-border-color);
		color: var(--luna-disabled-color);
	}
	input:disabled + .mark::after {
		border-color: var(--luna-disabled-text-color-inverse);
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
		border-radius: var(--luna-border-radius-m);
	}
	.mark::before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		content: '';
		background-color: currentColor;
		border-radius: var(--luna-border-radius-s);
		transform: scale(0);
		transition: transform ease-out var(--luna-duration-10);
		will-change: transform;
	}
	.mark::after {
		position: absolute;
		top: 3px;
		left: 3px;
		width: 9px;
		height: 5px;
		content: '';
		border-bottom: 2px solid white;
		border-left: 2px solid white;
		transform: rotate(-45deg) scale(0);
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
