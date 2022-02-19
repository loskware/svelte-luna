import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLDivElement | undefined;
        input?: HTMLInputElement | null | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        theme?: ("accent" | "danger" | "warning" | "success") | undefined;
        checked?: boolean | null | undefined;
        indeterminate?: boolean | null | undefined;
        value?: string | number | null | undefined;
        group?: (string | number)[] | null | undefined;
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
export declare type CheckBoxProps = typeof __propDef.props;
export declare type CheckBoxEvents = typeof __propDef.events;
export declare type CheckBoxSlots = typeof __propDef.slots;
export default class CheckBox extends SvelteComponentTyped<CheckBoxProps, CheckBoxEvents, CheckBoxSlots> {
}
export {};
