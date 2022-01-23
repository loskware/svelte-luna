<script>
  import { onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import { classNames } from "./utils";
  import Card from "./Card.svelte";

  /**
   * CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * Inline styles
   * @type {string}
   */
  export let style = null;

  /**
   * Show Menu on "click" or "context-menu" events
   * @type {"click" | "context-menu"}
   */
  export let showOn = "click";

  /**
   * Anchor Edge
   * @type {"bottom-left" | "bottom-right" | "top-left" | "top-right"}
   */
  export let anchor = "bottom-left";

  /**
   * Horizontal Spacing
   * @type {number}
   */
  export let hSpacing = 0;

  /**
   * Vertical Spacing
   * @type {number}
   */
  export let vSpacing = 8;

  /**
   * @callback ActionCallback
   * @param {MouseEvent} event
   * @param {string} action
   */

  /**
   * Called when user click a menu option.
   * @type {ActionCallback}
   */
  export let onAction = null;

  let menu;
  let wrapper;
  let show = false;
  let menuStyle = "";
  let actualTransitionParams;

  $: cn = classNames("Menu", className);

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
      document.addEventListener("contextmenu", outsideClick);
    } else {
      document.removeEventListener("click", outsideClick);
      document.removeEventListener("contextmenu", outsideClick);
    }
  }

  function outsideClick(e) {
    if (!wrapper.contains(e.target)) show = false;
  }

  function onClick(e) {
    if (showOn === "click" && !show) {
      show = true;
      return;
    }
    if (show) {
      const menuItem = e.target.closest("[data-luna-menu-action]");
      const action = menuItem?.dataset.lunaMenuAction;
      action && onAction?.(e, action);
      show = false;
    }
  }

  function onContextMenu(e) {
    if (showOn === "context-menu") {
      e.preventDefault();
      if (!show) show = true;
    }
  }

  onDestroy(() => {
    document.removeEventListener("click", outsideClick);
    document.removeEventListener("contextmenu", outsideClick);
  });
</script>

<div
  class={cn}
  {style}
  bind:this={wrapper}
  on:click={onClick}
  on:contextmenu={onContextMenu}
>
  <slot name="target" />
  {#if show}
    <div
      class="content"
      style={menuStyle}
      bind:this={menu}
      in:fly={actualTransitionParams}
    >
      <Card elevation={4}>
        <slot />
      </Card>
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
  }
  .content > :global(.Card) {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
  }
</style>
