<script context="module">
  const MIN_PADDING = 8;
</script>

<script lang="ts">
  import { afterUpdate } from "svelte";
  import { fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { classNames } from "../utils";
  import { portal } from "../actions";

  type MenuPosition = { x: number; y: number };
  type MenuActionCallback = (action: string, event: MouseEvent) => void;

  /** Reference to the DOM component element */
  export let ref: HTMLDivElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline styles */
  export let style: string | undefined = undefined;

  /** Called when user click a menu option. */
  export let onAction: MenuActionCallback | undefined = undefined;

  let menu: HTMLDivElement | undefined;
  let open: boolean = false;
  let position: MenuPosition = { x: 0, y: 0 };

  $: cn = classNames("ContextMenu", className);

  function onContextMenu(e: MouseEvent) {
    if (ref && ref.contains(e.target as Node)) {
      e.preventDefault();
      position = { x: e.clientX, y: e.clientY };
      if (!open) {
        open = true;
      } else {
        open = false;
        setTimeout(() => (open = true), 50);
      }
    } else {
      open = false;
      return;
    }
  }

  function onClick(e: MouseEvent) {
    if (menu && menu.contains(e.target as Element)) {
      const menuItem = (e.target as Element).closest(
        "[data-luna-menu-action]"
      ) as HTMLElement | undefined;
      const action = menuItem?.dataset.lunaMenuAction;
      action && onAction?.(action, e);
    }
    open = false;
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
</script>

<svelte:window on:click={onClick} on:contextmenu={onContextMenu} />

<div bind:this={ref} class={cn} {style}>
  <slot {open} />
  {#if open}
    <div
      class="content mica-material"
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
    z-index: 999;
    border-radius: var(--luna-border-radius-l);
    box-shadow: var(--luna-elevation-4);
  }
</style>
