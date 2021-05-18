import { writable } from "svelte/store";

const themeStore = () => {
  const { subscribe, set: setter } = writable(localStorage.getItem("theme"));
  
  return {
    subscribe,
    set(value) { 
      setter(value);
      localStorage.setItem("theme", value);
    }
  }
}

export const theme = themeStore();