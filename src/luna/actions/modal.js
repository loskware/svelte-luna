/**
 * Action to display node as a modal view
 * @param {HTMLElement} node
 * @param {string} rootID
 * @param {string} modalClass
 */
export function modal(node, rootID = DEF_ID, modalClass) {
  let modalRoot = document.getElementById(rootID);
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.id = DEF_ID;
    document.body.append(modalRoot);
  }

  const modal = document.createElement("div");
  modal.classList.add("luna-modal", "luna-acrylic");
  modalClass && modal.classList.add(modalClass);
  modal.append(node);

  modalRoot.append(modal);

  return {
    update() {},
    destroy() {
      modal.remove();
    },
  };
}

const DEF_ID = "modal-root";
