import { writable } from "svelte/store";

type Theme = "dark-theme" | "light-theme";

const themeStore = () => {
  const key = "theme";
  const { subscribe, set } = writable<Theme>(
      localStorage.getItem(key) as Theme | null || "dark-theme"
  );

  return {
    subscribe,
    set(value: Theme) {
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
