import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Reference to the DOM component element */ ref?: HTMLDivElement | undefined;
        /** Popover CSS class */ class?: string | null | undefined;
        /** Inline styles */ style?: string | null | undefined;
        /** Popover Anchor Position */ anchor?: ("bottom-left" | "bottom-right" | "top-left" | "top-right") | undefined;
        /** Horizontal Spacing */ hSpacing?: number | undefined;
        /** Vertical Spacing */ vSpacing?: number | undefined;
        /** Show or hide Popover */ show?: boolean | undefined;
        /** Dismiss popover clicking outside */ dismissOnClickOutside?: boolean | undefined;
        /**
             * Called when user click outside Popover.
             * If return false prevent the Popover from being closed (in case dismissOnClickOutside is true, as per default).
             */ onClickOutside?: ((e: MouseEvent) => boolean | void) | null | undefined;
        /** Popover transition function */ transition?: Function | undefined;
        /** Popover transition parameters */ transitionParams?: Object | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        target: {};
        default: {};
    };
};
export declare type PopoverProps = typeof __propDef.props;
export declare type PopoverEvents = typeof __propDef.events;
export declare type PopoverSlots = typeof __propDef.slots;
export default class Popover extends SvelteComponentTyped<PopoverProps, PopoverEvents, PopoverSlots> {
}
export {};
