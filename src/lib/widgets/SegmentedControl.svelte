<script lang="ts">
  import { classNames } from "../utils";

  /** Reference to the DOM component element */
  export let ref: HTMLDivElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline style */
  export let style: string | undefined = undefined;

  $: cn = classNames("SegmentedControl", className);
</script>

<div bind:this={ref} {style} class={cn} {...$$restProps}>
  <slot />
</div>

<style>
  div {
    display: flex;
    line-height: 1rem;
    background-color: var(--luna-bkg-color-alpha2);
    border-radius: var(--luna-border-radius-m);
  }
</style>
