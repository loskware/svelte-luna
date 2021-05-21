/** @param {HTMLElement} node */
export function pannable(node) {
  let x = 0;
  let y = 0;

  /** @param {MouseEvent} e */
  function mouseDown(e) {
    x = e.clientX;
    y = e.clientY;

    node.dispatchEvent(
      new CustomEvent("panstart", {
        detail: { x, y },
      })
    );

    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("mousemove", mouseMove);
  }

  /** @param {MouseEvent} e */
  function mouseMove(e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;
    x = e.clientX;
    y = e.clientY;

    node.dispatchEvent(
      new CustomEvent("panmove", {
        detail: { x, dx, y, dy },
      })
    );
  }

  /** @param {MouseEvent} e */
  function mouseUp(e) {
    const x = e.clientX;
    const y = e.clientY;

    node.dispatchEvent(
      new CustomEvent("panend", {
        detail: { x, y },
      })
    );

    document.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mousemove", mouseMove);
  }

  node.addEventListener("mousedown", mouseDown);

  return {
    destroy: () => node.removeEventListener("mousedown", mouseDown),
  };
}
