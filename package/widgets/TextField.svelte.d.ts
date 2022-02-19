import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLDivElement | undefined;
        input?: HTMLInputElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        value?: string | null | undefined;
        placeholder?: string | null | undefined;
        message?: string | null | undefined;
        textAlign?: ("start" | "end" | "center") | undefined;
        theme?: ("accent" | "danger" | "warning" | "success") | undefined;
        compact?: boolean | undefined;
        outline?: boolean | undefined;
        transparent?: boolean | undefined;
        containerClass?: string | null | undefined;
        containerStyle?: string | null | undefined;
        inputClass?: string | null | undefined;
        inputStyle?: string | null | undefined;
        messageClass?: string | null | undefined;
        messageStyle?: string | null | undefined;
    };
    events: {
        input: Event;
        change: Event;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        focus: FocusEvent;
        blur: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        right: {};
    };
};
export declare type TextFieldProps = typeof __propDef.props;
export declare type TextFieldEvents = typeof __propDef.events;
export declare type TextFieldSlots = typeof __propDef.slots;
export default class TextField extends SvelteComponentTyped<TextFieldProps, TextFieldEvents, TextFieldSlots> {
}
export {};
