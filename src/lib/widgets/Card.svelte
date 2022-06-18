<script context="module" lang="ts">
  const elevations = [
    "none",
    "var(--luna-elevation-1)",
    "var(--luna-elevation-2)",
    "var(--luna-elevation-4)",
    "var(--luna-elevation-6)",
    "var(--luna-elevation-8)",
    "var(--luna-elevation-12)",
    "var(--luna-elevation-16)",
    "var(--luna-elevation-20)",
    "var(--luna-elevation-24)",
  ];

  export type CardTheme =
    | "default"
    | "accent"
    | "danger"
    | "warning"
    | "success";
    
  export type CardElevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
</script>

<script lang="ts">
  import { classNames, mergeStyles } from "../utils";

  /** Reference to the DOM component element */
  export let ref: HTMLDivElement | undefined = undefined;

  /** CSS class */
  let className: string | undefined = undefined;
  export { className as class };

  /** Inline styles */
  export let style: string | undefined = undefined;

  /** Color theme */
  export let theme: CardTheme = "default";

  /** Shortcut for setting background color */
  export let backgroundColor: string | undefined = undefined;

  /** Render default border */
  export let outlined: boolean = false;

  /**
   * set elevation shadow.
   * from 0 (= no shadow) to 9.
   */
  export let elevation: CardElevation = 0;

  /** Hide Card hoverflow */
  export let hideOverflow: boolean = false;

  /** Shortcut for setting padding */
  export let padding: string | number | undefined = undefined;

  $: cn = classNames("Card", theme, className);
  $: actualStyle = mergeStyles(
    style,
    backgroundColor && `background-color:${backgroundColor}`,
    padding !== undefined &&
      `padding:${padding}${typeof padding === "number" ? `px` : ""}`,
    `box-shadow:${elevations[elevation] ?? "none"}`
  );
</script>

<div
  bind:this={ref}
  class={cn}
  class:outlined
  class:hideOverflow
  style={actualStyle}
  {...$$restProps}
>
  <slot />
</div>

<style>
  div {
    border-radius: var(--luna-border-radius-l);
  }

  .outlined {
    border-style: solid;
    border-width: 1px;
  }
  .hideOverflow {
    overflow: hidden;
  }

  /* THEMES */
  .default {
    background-color: var(--luna-card-bkg-color);
    border-color: var(--luna-border-color);
  }
  .accent {
    background-color: var(--luna-accent-bkg-color-alpha2);
    border-color: var(--luna-accent-border-color);
  }
  .danger {
    background-color: var(--luna-danger-bkg-color-alpha2);
    border-color: var(--luna-danger-border-color);
  }
  .warning {
    background-color: var(--luna-warning-bkg-color-alpha2);
    border-color: var(--luna-warning-border-color);
  }
  .success {
    background-color: var(--luna-success-bkg-color-alpha2);
    border-color: var(--luna-success-border-color);
  }
</style>
