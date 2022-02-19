import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLButtonElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        selectedStyle?: string | null | undefined;
        value?: string | number | null | undefined;
        group?: string | number | null | undefined;
        selected?: boolean | null | undefined;
        theme?: ("plain" | "accent" | "danger" | "warning" | "success") | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SegmentProps = typeof __propDef.props;
export declare type SegmentEvents = typeof __propDef.events;
export declare type SegmentSlots = typeof __propDef.slots;
export default class Segment extends SvelteComponentTyped<SegmentProps, SegmentEvents, SegmentSlots> {
}
export {};
