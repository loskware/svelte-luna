/**
 * Action to display node as a modal view
 * @param {HTMLElement} node 
 * @param {string} rootID 
 * @param {string} modalClass
 */
export function modal(node, rootID = defID, modalClass) {
  let modalRoot = document.getElementById(rootID);
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.id = defID;
    document.body.append(modalRoot);
  }
  
  const modal = document.createElement("div");  
  modal.classList.add("luna-modal", "luna-acrylic");
  modalClass && modal.classList.add(modalClass);
  modal.append(node);
  
  modalRoot.append(modal);

  return {
    update(rootID, modalClass) {
      console.log(rootID, modalClass);
    },
    destroy() {
      modal.remove();
    }
  }

}

const defID = "modal-root";