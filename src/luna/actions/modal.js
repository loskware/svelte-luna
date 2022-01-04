/**
 * @callback ClickOutsideCallback
 * @param {MouseEvent} ev
 * @returns {void}
 */

/**
 * @typedef ModalOptions 
 * @property {string?} rootID 
 * @property {string?} modalClass 
 * @property {ClickOutsideCallback?} onClickOutside 
 */

/**
 * Action to display node as a modal view
 * @param {HTMLElement} node
 * @param {ModalOptions} options
 */
export function modal(node, options) {
  let {rootID, modalClass, onClickOutside} = options || {};
  
  const clickOutside = (e) => {
    if (e.target === e.currentTarget) onClickOutside?.(e);
  };

  let modalRoot;
  if (rootID) {
    modalRoot = document.getElementById(rootID);
    if (modalRoot) document.body.append(modalRoot);
    else throw new Error(`No existing node with id "${rootID}"`)
  }
  else {
    modalRoot = document.body;
  }

  const modal = document.createElement("div");
  modal.classList.add("luna-modal", "luna-acrylic");
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