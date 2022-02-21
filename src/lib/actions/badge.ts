import { classNames } from "../utils";

interface BadgeOptions {
  text?: string;
  anchor?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
  color?: "plain" | "accent" | "danger" | "warning" | "success";
  badgeClass?: string;
  badgeStyle?: string;
}

/**
 * Display a badge attached to node
 */
export function badge(node: HTMLElement, options?: BadgeOptions) {
  function setupBadge(options?: BadgeOptions) {
    const {
      text = "",
      anchor = "top-right",
      color = "accent",
      badgeClass = null,
      badgeStyle = null,
    } = options || {};
    if (badgeStyle) badge.style.cssText = badgeStyle;
    badge.className = classNames("luna-badge", anchor, color, badgeClass);
    badge.textContent = text;
  }

  const badge = document.createElement("span");
  setupBadge(options);
  node.append(badge);

  return {
    update(options: BadgeOptions) {
      setupBadge(options);
    },
  };
}
