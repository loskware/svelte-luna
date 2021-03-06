<script context="module" lang="ts">
  export type MenuAnchorEdge =
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right";

  export type OnMenuActionCallback = (action: string, event: MouseEvent) => void;
</script>

<script lang="ts">
  import { onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import { classNames } from "../utils";

  /** Reference to the DOM component element */
  export let ref: HTMLDivElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline styles */
  export let style: string | undefined = undefined;

  /** Anchor Edge */
  export let anchor: MenuAnchorEdge = "bottom-left";

  /** Horizontal Spacing */
  export let hSpacing: number = 0;

  /** Vertical Spacing */
  export let vSpacing: number = 8;

  /**
   * Dropdown z-index
   * @default 999
   */
  export let zIndex: number = 999;

  /** Called when user click a menu option. */
  export let onAction: OnMenuActionCallback | undefined = undefined;

  let menu: HTMLDivElement | undefined;
  let open: boolean = false;
  let menuStyle: string = "";
  let actualTransitionParams: Object;

  $: cn = classNames("DropdownMenu", className);

  $: {
    const [v = "bottom", h = "right"] = anchor.split("-");

    let newStyle = "";

    switch (v) {
      case "top":
        newStyle += `bottom: calc(100% + ${vSpacing}px);`;
        actualTransitionParams = { y: 16, duration: 250 };
        break;
      case "bottom":
      default:
        newStyle += `top: calc(100% + ${vSpacing}px);`;
        actualTransitionParams = { y: -16, duration: 250 };
        break;
    }

    switch (h) {
      case "left":
        newStyle += `left: ${hSpacing}px;`;
        break;
      case "right":
      default:
        newStyle += `right: ${hSpacing}px;`;
        break;
    }

    menuStyle = newStyle;
  }

  $: {
    if (menu) {
      document.addEventListener("click", outsideClick);
    } else {
      document.removeEventListener("click", outsideClick);
    }
  }

  function outsideClick(e: MouseEvent) {
    if (!ref?.contains(e.target as Node)) open = false;
  }

  function onClick(e: MouseEvent) {
    if (!open) {
      open = true;
      return;
    }
    if (open) {
      const menuItem = (e.target as Element).closest(
        "[data-luna-menu-action]"
      ) as HTMLElement | undefined;
      const action = menuItem?.dataset.lunaMenuAction;
      action && onAction?.(action, e);
      open = false;
    }
  }

  onDestroy(() => {
    document.removeEventListener("click", outsideClick);
  });
</script>

<div bind:this={ref} class={cn} {style} on:click={onClick}>
  <slot {open} />
  {#if open}
    <div
      class="content mica-material"
      style:z-index={zIndex}
      style={menuStyle}
      bind:this={menu}
      in:fly={actualTransitionParams}
    >
      <ul>
        <slot name="menu" />
      </ul>
    </div>
  {/if}
</div>

<style>
  .DropdownMenu {
    display: inline-block;
    position: relative;
  }
  .content {
    position: absolute;
    height: max-content;
    width: max-content;
    min-width: 150px;
    border-radius: var(--luna-border-radius-l);
    box-shadow: var(--luna-elevation-4);
  }
</style>
