<script context="module">
  const MIN_PADDING = 8;
</script>

<script lang="ts">
  import { afterUpdate, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { classNames } from "../utils";

  type MenuTrigger = "click" | "context-menu";
  type MenuPosition = { x: number; y: number };
  type MenuActionCallback = (action: string, event: MouseEvent) => void;

  /** Reference to the DOM component element */
  export let ref: HTMLDivElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline styles */
  export let style: string | undefined = undefined;

  /** Show Menu on "click" or "context-menu" events */
  export let showOn: MenuTrigger = "click";

  /** Called when user click a menu option. */
  export let onAction: MenuActionCallback | undefined = undefined;

  let menu: HTMLDivElement | undefined;
  let open: boolean = false;

  let position: MenuPosition = { x: 0, y: 0 };
  // actualTransitionParams = { y: 16, duration: 250 }; >> SLIDE UP
  // actualTransitionParams = { y: -16, duration: 250 }; >> SLIDE DOWN

  $: cn = classNames("Menu", className);

  $: {
    if (menu) {
      document.addEventListener("click", outsideClick);
      document.addEventListener("contextmenu", outsideClick);
    } else {
      document.removeEventListener("click", outsideClick);
      document.removeEventListener("contextmenu", outsideClick);
    }
  }

  function outsideClick(e: MouseEvent) {
    if (!ref?.contains(e.target as Node)) open = false;
  }

  function onClick(e: MouseEvent) {
    if (!open) {
      position = { x: e.offsetX, y: e.offsetY };
      open = true;
      return;
    } else {
      const menuItem = (e.target as Element).closest(
        "[data-luna-menu-action]"
      ) as HTMLElement | undefined;
      const action = menuItem?.dataset.lunaMenuAction;
      action && onAction?.(action, e);
      open = false;
    }
  }

  function onContextMenu(e: MouseEvent) {
    if (showOn === "context-menu") {
      e.preventDefault();
      if (!open) open = true;
    }
  }

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
    document.removeEventListener("contextmenu", outsideClick);
  });
</script>

<div
  bind:this={ref}
  class={cn}
  {style}
  on:click={onClick}
  on:contextmenu={onContextMenu}
>
  <slot {open} />
  {#if open}
    <div
      class="content mica-material"
      style={`top: ${position.y}px; left: ${position.x}px`}
      bind:this={menu}
      in:fade={{ duration: 150, easing: backOut }}
    >
      <ul>
        <slot name="menu" />
      </ul>
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
    border-radius: var(--luna-border-radius-l);
    box-shadow: var(--luna-elevation-4);
  }
</style>
