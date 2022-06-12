<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { classNames } from '../utils';

	type DropdownAnchor = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  type DropdownClickOutsideCallback = (e: MouseEvent) => boolean | void;

	/** Reference to the DOM component element */
	export let ref: HTMLDivElement | undefined = undefined;

	/** Dropdown CSS class */
	let className: string | undefined = undefined;
	export { className as class };

	/** Inline styles */
	export let style: string | undefined = undefined;

	/** Dropdown Anchor Position */
	export let anchor: DropdownAnchor = 'bottom-right';

	/** Horizontal Spacing */
	export let hSpacing: number = 0;

	/** Vertical Spacing */
	export let vSpacing: number = 8;

	/** Show or hide Dropdown */
	export let show: boolean = false;

	/** Dismiss Dropdown clicking outside */
	export let dismissOnClickOutside: boolean = true;

	/**
	 * Called when user click outside Dropdown.
	 * If return false prevent the Dropdown from being closed (in case dismissOnClickOutside is true, as per default).
	 */
	export let onClickOutside: DropdownClickOutsideCallback | undefined = undefined;

	/** Dropdown transition function */
	export let transition: Function = fly;

	/** Dropdown transition parameters */
	export let transitionParams: Object | undefined = undefined;

	let dropdown: HTMLElement;
	let dropdownStyle = '';
	let actualTransitionParams: Object;

	$: cn = classNames('Dropdown', className);

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

		dropdownStyle = newStyle;
	}

	$: {
		if (dropdown) {
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
	<slot />
	{#if show}
		<div
			class="content"
			style={dropdownStyle}
			bind:this={dropdown}
			in:transition={actualTransitionParams}
		>
			<slot name="dropdown" />
		</div>
	{/if}
</div>

<style>
	.Dropdown {
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
