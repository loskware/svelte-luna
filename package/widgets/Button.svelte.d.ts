import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLButtonElement | HTMLAnchorElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        theme?: ("plain" | "soft" | "accent" | "danger" | "warning" | "success") | undefined;
        outlined?: boolean | undefined;
        solid?: boolean | undefined;
        rounded?: boolean | undefined;
        size?: ("normal" | "compact" | "large") | undefined;
        href?: string | null | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
