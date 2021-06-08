/**
 * @typedef ModalOptions 
 * @property {string} rootID 
 * @property {string} modalClass 
 * @property {(ev: MouseEvent) => any} onClickOutside 
 */

/**
 * Action to display node as a modal view
 * @param {HTMLElement} node
 * @param {ModalOptions} options
 */
export function modal(node, options) {
  let {rootID = DEF_ID, modalClass, onClickOutside} = options || {};
  
  const clickOutside = (e) => {
    if (e.target === e.currentTarget) onClickOutside?.(e);
  };

  let modalRoot = document.getElementById(rootID);
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.id = DEF_ID;
    document.body.append(modalRoot);
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

const DEF_ID = "modal-root";
