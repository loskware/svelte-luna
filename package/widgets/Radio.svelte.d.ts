import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLDivElement | undefined;
        input?: HTMLInputElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        theme?: ("accent" | "danger" | "warning" | "success") | undefined;
        checked?: boolean | null | undefined;
        value?: string | number | null | undefined;
        group?: string | number | null | undefined;
        disabled?: boolean | undefined;
        label?: string | undefined;
        labelStyle?: string | null | undefined;
        labelClass?: string | null | undefined;
        labelPosition?: ("left" | "right") | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RadioProps = typeof __propDef.props;
export declare type RadioEvents = typeof __propDef.events;
export declare type RadioSlots = typeof __propDef.slots;
export default class Radio extends SvelteComponentTyped<RadioProps, RadioEvents, RadioSlots> {
}
export {};
