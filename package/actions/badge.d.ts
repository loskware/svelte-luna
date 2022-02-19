interface BadgeOptions {
    text?: string;
    anchor?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
    color?: "plain" | "accent" | "danger" | "warning" | "success";
    badgeClass?: string;
    badgeStyle?: string;
}
/**
 * Display a badge attached to node
 */
export declare function badge(node: HTMLElement, options?: BadgeOptions): {
    update(options: BadgeOptions): void;
};
export {};
