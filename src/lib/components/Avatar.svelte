<script>
import App from "../../App.svelte";
import LunaIcon from "../../assets/LunaIcon.svelte";
import Button from "./Button.svelte";

  /** @type {string} */
  export let className;

  /** @type {string|number} */
  export let height;

  /** @type {string|number} */
  export let width;

  /** @type {string|number} */
  export let size;

  /** @type {string} */
  export let src;

  /** @type {string} */
  export let alt;
</script>

<img
  class={className}
  width={width || size}
  height={height || size}
  {src}
  {alt}
  {...$$restProps}
/>

<style>
  img {
    border-radius: 50%;
    box-shadow: var(--luna-elevation-4);
  }
</style>
