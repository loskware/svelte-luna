<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { classNames } from '../utils';
	import Card from './Card.svelte';

	type MenuShowOnEventType = 'click' | 'context-menu';
	type MenuAnchorEdge = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
	type MenuActionCallback = (action: string, event: MouseEvent) => void;

	/** Reference to the DOM component element */
	export let ref: HTMLDivElement | undefined = undefined;

	/** CSS class */
	let className: string | null = null;
	export { className as class };

	/** Inline styles */
	export let style: string | null = null;

	/** Show Menu on "click" or "context-menu" events */
	export let showOn: MenuShowOnEventType = 'click';

	/** Anchor Edge */
	export let anchor: MenuAnchorEdge = 'bottom-left';

	/** Horizontal Spacing */
	export let hSpacing: number = 0;

	/** Vertical Spacing */
	export let vSpacing: number = 8;

	/** Called when user click a menu option. */
	export let onAction: MenuActionCallback | null = null;

	let menu: HTMLDivElement | undefined;
	let show = false;
	let menuStyle = '';
	let actualTransitionParams: Object;

	$: cn = classNames('Menu', className);

	$: {
		const [v = 'bottom', h = 'right'] = anchor.split('-');

		let newStyle = '';

		switch (v) {
			case 'top':
				newStyle += `bottom: calc(100% + ${vSpacing}px);`;
				actualTransitionParams = { y: 16, duration: 250 };
				break;
			case 'bottom':
			default:
				newStyle += `top: calc(100% + ${vSpacing}px);`;
				actualTransitionParams = { y: -16, duration: 250 };
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

		menuStyle = newStyle;
	}

	$: {
		if (menu) {
			document.addEventListener('click', outsideClick);
			document.addEventListener('contextmenu', outsideClick);
		} else {
			document.removeEventListener('click', outsideClick);
			document.removeEventListener('contextmenu', outsideClick);
		}
	}

	function outsideClick(e: MouseEvent) {
		if (!ref?.contains(e.target as Node)) show = false;
	}

	function onClick(e: MouseEvent) {
		if (showOn === 'click' && !show) {
			show = true;
			return;
		}
		if (show) {
			const menuItem = (e.target as Element).closest(
				'[data-luna-menu-action]'
			) as HTMLElement | null;
			const action = menuItem?.dataset.lunaMenuAction;
			action && onAction?.(action, e);
			show = false;
		}
	}

	function onContextMenu(e: MouseEvent) {
		if (showOn === 'context-menu') {
			e.preventDefault();
			if (!show) show = true;
		}
	}

	onDestroy(() => {
		document.removeEventListener('click', outsideClick);
		document.removeEventListener('contextmenu', outsideClick);
	});
</script>

<div bind:this={ref} class={cn} {style} on:click={onClick} on:contextmenu={onContextMenu}>
	<slot name="target" />
	{#if show}
		<div class="content" style={menuStyle} bind:this={menu} in:fly={actualTransitionParams}>
			<Card elevation={4}>
				<ul>
					<slot />
				</ul>
			</Card>
		</div>
	{/if}
</div>

<style>
	.Menu {
		display: inline-block;
		position: relative;
	}
	.content {
		position: absolute;
		height: max-content;
		width: max-content;
		min-width: 150px;
		z-index: 999;
	}
	ul {
		padding: 8px 0;
	}
</style>
