import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Reference to the DOM component element */ ref?: HTMLHRElement | undefined;
        /** CSS class */ class?: string | null | undefined;
        /** Inline styles */ style?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DividerProps = typeof __propDef.props;
export declare type DividerEvents = typeof __propDef.events;
export declare type DividerSlots = typeof __propDef.slots;
export default class Divider extends SvelteComponentTyped<DividerProps, DividerEvents, DividerSlots> {
}
export {};
