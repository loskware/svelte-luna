import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Reference to the DOM component element */ ref?: HTMLDivElement | undefined;
        /** CSS class */ class?: string | null | undefined;
        /** Inline styles */ style?: string | null | undefined;
        /** Show Menu on "click" or "context-menu" events */ showOn?: ("click" | "context-menu") | undefined;
        /** Anchor Edge */ anchor?: ("bottom-left" | "bottom-right" | "top-left" | "top-right") | undefined;
        /** Horizontal Spacing */ hSpacing?: number | undefined;
        /** Vertical Spacing */ vSpacing?: number | undefined;
        /** Called when user click a menu option. */ onAction?: ((action: string, event: MouseEvent) => void) | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        target: {};
        default: {};
    };
};
export declare type MenuProps = typeof __propDef.props;
export declare type MenuEvents = typeof __propDef.events;
export declare type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponentTyped<MenuProps, MenuEvents, MenuSlots> {
}
export {};
