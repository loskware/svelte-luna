<script >import { classNames } from '../utils';
/** Reference to the DOM component element */
export let ref = undefined;
/** CSS class */
let className = null;
export { className as class };
/** Inline styles */
export let style = null;
/** Avatar size (=height=width) */
export let size;
/** Image src URL */
export let src;
/** Image alt attribute */
export let alt;
/** Toggle shadow */
export let hasShadow = false;
/** Avatar border color */
export let borderColor = 'white';
/**
 * Avatar border size
 * @type {string|number}
 */
export let borderSize = null;
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
