declare type ClickOutsideCallback = (ev: MouseEvent) => void;
interface ModalOptions {
    rootID?: string;
    modalClass?: string;
    onClickOutside?: ClickOutsideCallback;
}
/**
 * Action to display node as a modal view
 */
export declare function modal(node: HTMLElement, options?: ModalOptions): {
    destroy(): void;
};
export {};
