let index = 0

/**
 * Append node to the target element
 */
export function portal(node: HTMLElement, target: HTMLElement = document.body) {
  node.setAttribute("data-index", String(index++));
  target.appendChild(node);
  return {
    destroy() { node.remove() }
  };
}
