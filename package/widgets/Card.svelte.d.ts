import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLDivElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        theme?: ("accent" | "danger" | "warning" | "success" | "default") | undefined;
        backgroundColor?: string | null | undefined;
        outlined?: boolean | undefined;
        elevation?: (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) | undefined;
        hideOverflow?: boolean | undefined;
        padding?: string | number | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CardProps = typeof __propDef.props;
export declare type CardEvents = typeof __propDef.events;
export declare type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponentTyped<CardProps, CardEvents, CardSlots> {
}
export {};
