import { writable } from "svelte/store";

/**
 * @returns {import("svelte/store").Writable<string>}
 */
const themeStore = () => {
  const key = "theme";
  const { subscribe, set } = writable(localStorage.getItem(key) || "dark");

  return {
    subscribe,
    set(value) {
      set(value);
      localStorage.setItem(key, value);
    },
  };
};

/**
 * @returns {import("svelte/store").Writable<number>}
 */
const currentPageStore = () => {
  const key = "currentPage";
  const { subscribe, set } = writable(+localStorage.getItem(key));

  return {
    subscribe,
    set(value) {
      set(value);
      localStorage.setItem(key, value);
    },
  };
};

export const theme = themeStore();
export const currentPage = currentPageStore();
