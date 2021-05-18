import { readable } from "svelte/store";

/**
 * @type {readable<{x: number, y; number}>}
 */
export const mouseCoords = readable({x: 0, y: 0}, (set) => {
  /** @param {MouseEvent} event*/
  function listener(event) {
    set({ x: event.clientX, y: event.clientY });
  }

  document.addEventListener("mousemove", listener);

  return () => document.removeEventListener("mousemove", listener);
});
