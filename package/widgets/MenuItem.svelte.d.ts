import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Reference to the DOM component element */ ref?: HTMLLIElement | undefined;
        /** CSS class */ class?: string | null | undefined;
        /** Inline styles */ style?: string | null | undefined;
        /** Make MenuItem more compact */ compact?: boolean | undefined;
        /** Action id */ action: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type MenuItemProps = typeof __propDef.props;
export declare type MenuItemEvents = typeof __propDef.events;
export declare type MenuItemSlots = typeof __propDef.slots;
export default class MenuItem extends SvelteComponentTyped<MenuItemProps, MenuItemEvents, MenuItemSlots> {
}
export {};
