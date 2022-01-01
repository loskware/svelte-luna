<script>
  import { afterUpdate } from "svelte";
  import { fly } from "svelte/transition";
  import { classNames } from "../utils";

  /**
   * Popover CSS class
   * @type {string}
   */
  let className = null;
  export { className as class };

  /**
   * Show or hide Popover
   * @type {boolean}
   */
  export let showPopover = false;

  /**
   * Dismiss popover clicking outside
   * @type {boolean}
   */
  export let dismissOnClickOutside = true;

  /**
   * Popover transition function
   * @type {Function}
   * @default fly
   */
  export let popoverTransition = fly;

  /**
   * Popover transition parameters
   * @type {Object}
   * @default { y: -16, duration: 300 }
   */
  export let popoverTransitionParams = { y: -16, duration: 300 };

  /** @type {HTMLDivElement}*/
  let popover;

  $: cn = classNames("Popover", className);

  const onClickOutside = (e) => {
    if (e.target !== popover && !popover.contains(e.target)) {
      showPopover = false;
      document.removeEventListener("click", onClickOutside, true);
    }
  };

  afterUpdate(() => {
    if (popover) {
      if (dismissOnClickOutside)
        document.addEventListener("click", onClickOutside, true);
    }
  });
</script>

<div class={cn}>
  <slot name="target" />
  {#if showPopover}
    <div
      class="content"
      bind:this={popover}
      in:popoverTransition={popoverTransitionParams}
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
    top: calc(100% + 8px);
    left: 0;
    height: fit-content;
    width: fit-content;
  }
</style>
