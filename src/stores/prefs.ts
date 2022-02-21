import { writable } from "svelte/store";

const themeStore = () => {
  const key = "theme";
  const { subscribe, set } = writable(localStorage.getItem(key) || "dark");

  return {
    subscribe,
    set(value: string) {
      set(value);
      localStorage.setItem(key, value);
    },
  };
};

const currentPageStore = () => {
  const key = "currentPage";
  const { subscribe, set } = writable(+(localStorage.getItem(key) ?? 0));

  return {
    subscribe,
    set(value: number) {
      set(value);
      localStorage.setItem(key, String(value));
    },
  };
};

export const theme = themeStore();
export const currentPage = currentPageStore();
