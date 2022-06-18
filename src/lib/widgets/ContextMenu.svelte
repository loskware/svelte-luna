<script context="module" lang="ts">
  const MIN_PADDING = 8;
  export type MenuPosition = { x: number; y: number };
  export type MenuActionCallback = (action: string, event: MouseEvent) => void;
</script>

<script lang="ts">
  import { afterUpdate, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { classNames } from "../utils";
  import { portal } from "../actions";

  /** Reference to the DOM component element */
  export let ref: HTMLDivElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline styles */
  export let style: string | undefined = undefined;

  /**
   * Dropdown z-index
   * @default 999
   */
  export let zIndex: number = 999;

  /** Called when user click a menu option. */
  export let onAction: MenuActionCallback | undefined = undefined;

  let menu: HTMLDivElement | undefined;
  let open: boolean = false;

  let position: MenuPosition = { x: 0, y: 0 };
  // actualTransitionParams = { y: 16, duration: 250 }; >> SLIDE UP
  // actualTransitionParams = { y: -16, duration: 250 }; >> SLIDE DOWN

  $: cn = classNames("ContextMenu", className);

  $: {
    if (menu) {
      document.addEventListener("click", outsideClick);
    } else {
      document.removeEventListener("click", outsideClick);
    }
  }

  function outsideClick(e: MouseEvent) {
    if (!menu?.contains(e.target as Node)) open = false;
  }

  function onClick(e: MouseEvent) {
    if (open) {
      const menuItem = (e.target as Element).closest(
        "[data-luna-menu-action]"
      ) as HTMLElement | undefined;
      const action = menuItem?.dataset.lunaMenuAction;
      action && onAction?.(action, e);
      open = false;
    }
  }

  function onContextMenu(e: MouseEvent) {
    e.preventDefault();
    position = { x: e.clientX, y: e.clientY };
    if (!open) {
      open = true;
    } else {
      open = false;
      setTimeout(() => (open = true), 50);
    }
  }

  /* LIFE CYCLE */
  afterUpdate(() => {
    if (menu) {
      const menuRect = menu.getBoundingClientRect();
      const overflowY = menuRect.bottom + MIN_PADDING - window.innerHeight;
      const overflowX = menuRect.right + MIN_PADDING - window.innerWidth;
      if (overflowX > 0) {
        position.x -= menu.clientWidth;
      }
      if (overflowY > 0) {
        position.y -= overflowY;
      }
    }
  });

  onDestroy(() => {
    document.removeEventListener("click", outsideClick);
  });
</script>

<div bind:this={ref} class={cn} {style} on:contextmenu={onContextMenu}>
  <slot {open} />
  {#if open}
    <div
      class="content mica-material"
      style:z-index={zIndex}
      style={`top: ${position.y}px; left: ${position.x}px`}
      bind:this={menu}
      use:portal
      in:fade={{ duration: 150, easing: backOut }}
      on:click={onClick}
    >
      <ul>
        <slot name="menu" />
      </ul>
    </div>
  {/if}
</div>

<style>
  .ContextMenu {
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
