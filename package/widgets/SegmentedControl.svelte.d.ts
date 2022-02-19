import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLDivElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SegmentedControlProps = typeof __propDef.props;
export declare type SegmentedControlEvents = typeof __propDef.events;
export declare type SegmentedControlSlots = typeof __propDef.slots;
export default class SegmentedControl extends SvelteComponentTyped<SegmentedControlProps, SegmentedControlEvents, SegmentedControlSlots> {
}
export {};
