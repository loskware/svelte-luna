<script>
  import { onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import { classNames } from "./utils";
  import Card from "./Card.svelte";

  /**
   * Popover CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * Popover Position
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
  export let onActionCallback = null;

  let popover;
  let wrapper;
  let show = false;
  let style = "";
  let actualTransitionParams;

  $: cn = classNames("Popover", className);

  $: {
    const [v = "bottom", h = "right"] = anchor.split("-");

    let newStyle = "";

    switch (v) {
      case "top":
        newStyle += `bottom: calc(100% + ${vSpacing}px);`;
        actualTransitionParams = { y: 16, duration: 300 };
        break;
      case "bottom":
      default:
        newStyle += `top: calc(100% + ${vSpacing}px);`;
        actualTransitionParams = { y: -16, duration: 300 };
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

    style = newStyle;
  }

  $: {
    if (popover) {
      document.addEventListener("click", outsideClick);
    } else {
      document.removeEventListener("click", outsideClick);
    }
  }

  const outsideClick = (e) => {
    if (!wrapper.contains(e.target)) show = false;
  };

  onDestroy(() => document.removeEventListener("click", outsideClick));
</script>

<div class={cn} bind:this={wrapper}>
  <slot name="target" />
  {#if show}
    <div
      class="content"
      {style}
      bind:this={popover}
      in:fly={actualTransitionParams}
    >
      <Card hasShadow>
        <slot />
      </Card>
    </div>
  {/if}
</div>

<style>
  .Popover {
    display: inline-block;
    position: relative;
  }
  .content {
    position: absolute;
    height: max-content;
    width: max-content;
  }
</style>
