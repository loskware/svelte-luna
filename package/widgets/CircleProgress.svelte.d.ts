import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLDivElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        percentage: number;
        size?: number | undefined;
        color?: string | undefined;
        trackColor?: string | undefined;
        backgroundColor?: string | null | undefined;
        strokeWidth?: number | undefined;
        linecap?: ("round" | "square") | undefined;
        showLabel?: boolean | undefined;
        labelStyle?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CircleProgressProps = typeof __propDef.props;
export declare type CircleProgressEvents = typeof __propDef.events;
export declare type CircleProgressSlots = typeof __propDef.slots;
export default class CircleProgress extends SvelteComponentTyped<CircleProgressProps, CircleProgressEvents, CircleProgressSlots> {
}
export {};
