import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLDivElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        percentage: number;
        color?: string | undefined;
        trackColor?: string | undefined;
        linecap?: ("round" | "square") | undefined;
        hideLabel?: boolean | undefined;
        labelColor?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type LineProgressProps = typeof __propDef.props;
export declare type LineProgressEvents = typeof __propDef.events;
export declare type LineProgressSlots = typeof __propDef.slots;
export default class LineProgress extends SvelteComponentTyped<LineProgressProps, LineProgressEvents, LineProgressSlots> {
}
export {};
