<script lang="ts">
  import { classNames, mergeStyles } from "../utils";

  /** Reference to the DOM component element */
  export let ref: HTMLImageElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline styles */
  export let style: string | undefined = undefined;

  /** Avatar size (=height=width) */
  export let size: string | number;

  /** Image src URL */
  export let src: string;

  /** Image alt attribute */
  export let alt: string;

  /** Toggle shadow */
  export let hasShadow: boolean = false;

  /** Avatar border color */
  export let borderColor: string | undefined = undefined;

  /** Avatar border size */
  export let borderSize: string | number | undefined = undefined;

  $: cn = classNames("Avatar", className);
  $: styles = mergeStyles(
    style,
    borderSize && borderColor
      ? `border: ${
          typeof borderSize === "number" ? `${borderSize}px` : borderSize
        } solid ${borderColor}`
      : undefined
  );
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
