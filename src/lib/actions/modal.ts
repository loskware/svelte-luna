type ClickOutsideCallback = (ev: MouseEvent) => void;

interface ModalOptions {
  rootID?: string;
  modalClass?: string;
  onClickOutside?: ClickOutsideCallback;
}

/**
 * Action to display node as a modal view
 */
export function modal(node: HTMLElement, options?: ModalOptions) {
  let { rootID, modalClass, onClickOutside } = options || {};

  const clickOutside = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClickOutside?.(e);
  };

  let modalRoot;
  if (rootID) {
    modalRoot = document.getElementById(rootID);
    if (modalRoot) document.body.append(modalRoot);
    else throw new Error(`No existing node with id "${rootID}"`);
  } else {
    modalRoot = document.body;
  }

  const modal = document.createElement("div");
  modal.classList.add("luna-modal", "acrylic-material");
  modalClass && modal.classList.add(modalClass);
  modal.addEventListener("click", clickOutside);
  modal.append(node);

  modalRoot.append(modal);

  return {
    destroy() {
      modal.removeEventListener("click", clickOutside);
      modal.remove();
    },
  };
}
