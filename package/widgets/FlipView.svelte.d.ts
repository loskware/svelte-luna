import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLDivElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        height: number | string;
        width: number | string;
        axis?: ("x" | "y") | undefined;
        clockwise?: boolean | undefined;
        flipped?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        back: {};
        front: {};
    };
};
export declare type FlipViewProps = typeof __propDef.props;
export declare type FlipViewEvents = typeof __propDef.events;
export declare type FlipViewSlots = typeof __propDef.slots;
export default class FlipView extends SvelteComponentTyped<FlipViewProps, FlipViewEvents, FlipViewSlots> {
}
export {};
