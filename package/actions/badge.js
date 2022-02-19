import { classNames } from "../utils";
/**
 * Display a badge attached to node
 */
export function badge(node, options) {
    function setupBadge(options) {
        const { text = "", anchor = "top-right", color = "accent", badgeClass = null, badgeStyle = null, } = options || {};
        if (badgeStyle)
            badge.style.cssText = badgeStyle;
        badge.className = classNames("luna-badge", anchor, color, badgeClass);
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
