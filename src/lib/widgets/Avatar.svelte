<script lang="ts">
	import { classNames } from '../utils';

	/** Reference to the DOM component element */
	export let ref: HTMLImageElement | undefined = undefined;

	/** CSS class */
	let className: string | null = null;
	export { className as class };

	/** Inline styles */
	export let style: string | null = null;

	/** Avatar size (=height=width) */
	export let size: string | number;

	/** Image src URL */
	export let src: string;

	/** Image alt attribute */
	export let alt: string;

	/** Toggle shadow */
	export let hasShadow: boolean | null = false;

	/** Avatar border color */
	export let borderColor: string | null = 'white';

	/**
	 * Avatar border size
	 * @type {string|number}
	 */
	export let borderSize: string | number | null = null;

	$: cn = classNames('Avatar', className);
	$: styles = `
    border: ${typeof borderSize === 'number' ? `${borderSize}px` : borderSize} solid ${borderColor};
    ${style}
  `;
</script>

<img
	bind:this={ref}
	class={cn}
	class:hasShadow
	width={size}
	height={size}
	style={styles}
	{src}
	{alt}
	{...$$restProps}
/>

<style>
	img {
		display: block;
		border-radius: 50%;
	}
	.hasShadow {
		box-shadow: var(--luna-elevation-4);
	}
</style>
