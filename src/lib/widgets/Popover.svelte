<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { classNames } from '../utils';

	type PopoverAnchor = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  type PopoverClickOutsideCallback = (e: MouseEvent) => boolean | void;

	/** Reference to the DOM component element */
	export let ref: HTMLDivElement | undefined = undefined;

	/** Popover CSS class */
	let className: string | undefined = undefined;
	export { className as class };

	/** Inline styles */
	export let style: string | undefined = undefined;

	/** Popover Anchor Position */
	export let anchor: PopoverAnchor = 'bottom-right';

	/** Horizontal Spacing */
	export let hSpacing: number = 0;

	/** Vertical Spacing */
	export let vSpacing: number = 8;

	/** Show or hide Popover */
	export let show: boolean = false;

	/** Dismiss popover clicking outside */
	export let dismissOnClickOutside: boolean = true;

	/**
	 * Called when user click outside Popover.
	 * If return false prevent the Popover from being closed (in case dismissOnClickOutside is true, as per default).
	 */
	export let onClickOutside: PopoverClickOutsideCallback | undefined = undefined;

	/** Popover transition function */
	export let transition: Function = fly;

	/** Popover transition parameters */
	export let transitionParams: Object | undefined = undefined;

	let popover: HTMLElement;
	let popoverStyle = '';
	let actualTransitionParams: Object;

	$: cn = classNames('Popover', className);

	$: {
		const [v = 'bottom', h = 'right'] = anchor.split('-');

		let newStyle = '';

		switch (v) {
			case 'top':
				newStyle += `bottom: calc(100% + ${vSpacing}px);`;
				actualTransitionParams = transitionParams ?? { y: 16, duration: 250 };
				break;
			case 'bottom':
			default:
				newStyle += `top: calc(100% + ${vSpacing}px);`;
				actualTransitionParams = transitionParams ?? { y: -16, duration: 250 };
				break;
		}

		switch (h) {
			case 'left':
				newStyle += `left: ${hSpacing}px;`;
				break;
			case 'right':
			default:
				newStyle += `right: ${hSpacing}px;`;
				break;
		}

		popoverStyle = newStyle;
	}

	$: {
		if (popover) {
			document.addEventListener('click', outsideClick);
		} else {
			document.removeEventListener('click', outsideClick);
		}
	}

	const outsideClick = (e: MouseEvent) => {
		if (!ref?.contains(e.target as Element)) {
			const dismiss = onClickOutside ? onClickOutside(e) ?? true : true;
			if (dismiss && dismissOnClickOutside) show = false;
		}
	};

	onDestroy(() => document.removeEventListener('click', outsideClick));
</script>

<div class={cn} {style} bind:this={ref}>
	<slot name="target" />
	{#if show}
		<div
			class="content"
			style={popoverStyle}
			bind:this={popover}
			in:transition={actualTransitionParams}
		>
			<slot />
		</div>
	{/if}
</div>

<style>
	.Popover {
		display: inline-block;
		position: relative;
	}
	.content {
		position: absolute;
		height: max-content;
		width: max-content;
		z-index: 999;
	}
</style>
