<script context="module" lang="ts">
  export type ChipTheme =
    | "plain"
    | "soft"
    | "accent"
    | "danger"
    | "warning"
    | "success";
  export type OnChipClickCallback = (event: MouseEvent, id?: string) => void;
  export type OnChipDeleteCallback = (event: MouseEvent, id?: string) => void;
</script>

<script lang="ts">
  import { classNames, getContrastYIQ } from "../utils";

  /** Reference to the DOM component element */
  export let ref: HTMLDivElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline styles */
  export let style: string | undefined = undefined;

  /**
   * Chip background color
   * Only hex value is supported (for now)
   */
  export let color: string = "#bdbdbd";

  /** Label optional ID */
  export let id: string | undefined = undefined;

  /** Called on click */
  export let onClick: OnChipClickCallback | undefined = undefined;

  /** Called on delete (enable delete mark) */
  export let onDelete: OnChipDeleteCallback | undefined = undefined;

  $: cn = classNames("Chip", className);
	$: textColor = getContrastYIQ(color);
</script>

<div
  bind:this={ref}
  class={cn}
	class:dark={textColor === "white"}
  style:background-color={color}
	style:color={textColor}
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
    border-radius: 1000px;
    overflow: hidden;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    user-select: none;
  }
  span {
    padding: 0 4px 0 8px;
  }
  span:only-child {
    padding: 0 8px;
  }
  .clickable {
    cursor: pointer;
  }
  svg {
    cursor: pointer;
    border-radius: 50%;
  }
	.clickable:hover, svg:hover {
		background-color: hsla(0, 0%, 0%, 15%);
	}
	.dark > .clickable:hover, .dark > svg:hover {
		background-color: hsla(0, 0%, 100%, 20%);
	}
	
</style>
