<script>
  import { onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import { classNames } from "./utils";

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
  export let anchor = "bottom-right";

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
   * Show or hide Popover
   * @type {boolean}
   */
  export let show = false;

  /**
   * Dismiss popover clicking outside
   * @type {boolean}
   */
  export let dismissOnClickOutside = true;

  /**
   * @callback ClickOutsideCallback
   * @param {MouseEvent} event
   * @returns {boolean | void}
   */

  /**
   * Called when user click outside Popover.
   * If return false prevent the Popover from being closed (in case dismissOnClickOutside is true, as per default).
   * @type {ClickOutsideCallback}
   */
  export let onClickOutside = null;

  /**
   * Popover transition function
   * @type {Function}
   */
  export let transition = fly;

  /**
   * Popover transition parameters
   * @type {Object}
   */
  export let transitionParams = null;

  let popover;
  let wrapper;
  let style = "";
  let actualTransitionParams;
  
  $: cn = classNames("Popover", className);

  $: {
    const [v = "bottom", h = "right"] = anchor.split("-");

    let newStyle = "";

    switch (v) {
      case "top":
        newStyle += `bottom: calc(100% + ${vSpacing}px);`;
        actualTransitionParams = transitionParams ?? { y: 16, duration: 250 };
        break;
      case "bottom":
      default:
        newStyle += `top: calc(100% + ${vSpacing}px);`;
        actualTransitionParams = transitionParams ?? { y: -16, duration: 250 };
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
    if (!wrapper.contains(e.target)) {
      const dismiss = onClickOutside ? onClickOutside(e) ?? true : true;
      if (dismiss && dismissOnClickOutside) show = false;
    }
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
      in:transition={actualTransitionParams}
    >
      <slot />
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
