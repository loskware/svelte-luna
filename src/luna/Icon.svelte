<script>
  import { classNames } from "./utils";

  /** @type {string} CSS class */
  export let classes = null;

  /** @type {string} hover tooltip */
  export let tooltip = null;

  /** @type {number} icon height */
  export let height = 24;

  /** @type {number} icon width */
  export let width = 24;

  /** @type {string} stroke color */
  export let stroke = "currentColor";

  /** @type {string} fill color */
  export let fill = "none";

  $: cn = classNames("Icon", classes);
</script>

<svg
  class={cn}
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  {stroke}
  {fill}
  {height}
  {width}
  {...$$restProps}
>
  <slot />
  {#if tooltip}
    <title>{tooltip}</title>
  {/if}
</svg>
