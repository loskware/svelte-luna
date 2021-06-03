import { classNames } from "../utils";

/**
 * @typedef BadgeOptions
 * @property {string} text
 * @property {"top-left"|"top-right"|"bottom-right"|"bottom-left"} anchor
 * @property {"plain"|"accent"|"danger"|"warning"|"success"} color
 * @property {string} badgeClass
 * @property {string} badgeStyle
 */

/**
 * Display a badge attached to node
 * @param {HTMLElement} node
 * @param {BadgeOptions} options
 */
export function badge(node, options) {
  function setupBadge(options) {
    const {
      text = "",
      anchor = "top-right",
      color = "accent",
      badgeClass = null,
      badgeStyle = null,
    } = options || {};
    badge.className = classNames("luna-badge", anchor, color, badgeClass);
    badge.style.cssText = badgeStyle;
    badge.textContent = text;
  }

  const badge = document.createElement("span");
  setupBadge(options);
  node.append(badge);

  return {
    update(options) {
      setupBadge(options);
    },
  };
}
