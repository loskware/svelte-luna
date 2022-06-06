<script lang="ts">
	import { classNames } from '../utils';

	type ChipTheme = 'plain' | 'soft' | 'accent' | 'danger' | 'warning' | 'success';
  type OnClickCallback = (event: MouseEvent, id?: string) => void;
  type OnDeleteCallback = (event: MouseEvent, id?: string) => void;

	/** Reference to the DOM component element */
	export let ref: HTMLDivElement | undefined = undefined;

	/** CSS class */
	let className: string | undefined = undefined;
	export { className as class };

	/** Inline styles */
	export let style: string | undefined = undefined;

	/** Color theme */
	export let theme: ChipTheme = 'accent';

	/** Label optional ID */
	export let id: string | undefined = undefined;

	/** Called on click */
	export let onClick: OnClickCallback | undefined = undefined;

	/** Called on delete (enable delete mark) */
	export let onDelete: OnDeleteCallback | undefined = undefined;

	$: cn = classNames('Chip', theme, className);
</script>

<div
	bind:this={ref}
	class={cn}
	{style}
	on:click={(e) => {
		onClick?.(e, id);
	}}
	{...$$restProps}
>
	<span class:clickable={onClick} role="button"><slot /></span>
	{#if onDelete}
		<svg
			height={18}
			width={18}
			viewBox="0 0 18 18"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			on:click={(e) => {
				e.stopPropagation();
				onDelete?.(e, id);
			}}
		>
			<line x1="6" y1="6" x2="12" y2="12" />
			<line x1="12" y1="6" x2="6" y2="12" />
		</svg>
	{/if}
</div>

<style>
	div {
		display: inline-flex;
		align-items: stretch;
		border-radius: var(--luna-border-radius-m);
		overflow: hidden;
		font-size: 12px;
		font-weight: 500;
		line-height: 18px;
		user-select: none;
	}
	span {
		padding: 0 2px 0 6px;
	}
	span:only-child {
		padding: 0 6px;
	}
	span.clickable {
		cursor: pointer;
	}
	svg {
		cursor: pointer;
	}

	div.accent {
		background-color: var(--luna-accent-bkg-color);
		color: var(--luna-accent-text-color-inverse);
	}
	div.accent > span.clickable:hover {
		background-color: var(--luna-accent-bkg-color-sec);
	}
	div.accent > svg:hover {
		background-color: var(--luna-accent-bkg-color-sec);
	}

	div.plain {
		background-color: var(--luna-plain-bkg-color);
		color: var(--luna-plain-text-color-inverse);
	}
	div.plain > span.clickable:hover {
		background-color: var(--luna-plain-bkg-color-sec);
	}
	div.plain > svg:hover {
		background-color: var(--luna-plain-bkg-color-sec);
	}

	div.soft {
		background-color: var(--luna-soft-bkg-color);
		color: var(--luna-soft-text-color-inverse);
	}
	div.soft > span.clickable:hover {
		background-color: var(--luna-soft-bkg-color-sec);
	}
	div.soft > svg:hover {
		background-color: var(--luna-soft-bkg-color-sec);
	}

	div.danger {
		background-color: var(--luna-danger-bkg-color);
		color: var(--luna-danger-text-color-inverse);
	}
	div.danger > span.clickable:hover {
		background-color: var(--luna-danger-bkg-color-sec);
	}
	div.danger > svg:hover {
		background-color: var(--luna-danger-bkg-color-sec);
	}

	div.warning {
		background-color: var(--luna-warning-bkg-color);
		color: var(--luna-warning-text-color-inverse);
	}
	div.warning > span.clickable:hover {
		background-color: var(--luna-warning-bkg-color-sec);
	}
	div.warning > svg:hover {
		background-color: var(--luna-warning-bkg-color-sec);
	}

	div.success {
		background-color: var(--luna-success-bkg-color);
		color: var(--luna-success-text-color-inverse);
	}
	div.success > span.clickable:hover {
		background-color: var(--luna-success-bkg-color-sec);
	}
	div.success > svg:hover {
		background-color: var(--luna-success-bkg-color-sec);
	}
</style>
