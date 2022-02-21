import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLDivElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        theme?: ("plain" | "soft" | "accent" | "danger" | "warning" | "success") | undefined;
        id?: string | null | undefined;
        onClick?: ((id: string | null, event: MouseEvent) => void) | null | undefined;
        onDelete?: ((id: string | null, event: MouseEvent) => void) | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ChipProps = typeof __propDef.props;
export declare type ChipEvents = typeof __propDef.events;
export declare type ChipSlots = typeof __propDef.slots;
export default class Chip extends SvelteComponentTyped<ChipProps, ChipEvents, ChipSlots> {
}
export {};
