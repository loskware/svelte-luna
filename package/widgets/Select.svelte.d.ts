import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Reference to the DOM component element */ ref?: HTMLDivElement | undefined;
        /** Reference to the inner input element */ select?: HTMLSelectElement | undefined;
        /** CSS class */ class?: string | null | undefined;
        /** Inline styles */ style?: string | null | undefined;
        /** Color theme */ theme?: ("accent" | "danger" | "warning" | "success") | undefined;
        /** Compact variant */ compact?: boolean | undefined;
        /** Draw a border around Select */ outline?: boolean | undefined;
        /** Make Select transparent */ transparent?: boolean | undefined;
        /** Select name */ name?: string | null | undefined;
        /** Select value or values (for multiple select) */ value?: string | string[] | null | undefined;
        /** Defines the number of visible options in Select */ size?: number | undefined;
        /** Disable Select */ disabled?: boolean | undefined;
    };
    events: {
        change: Event;
        click: MouseEvent;
        blur: FocusEvent;
        focus: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SelectProps = typeof __propDef.props;
export declare type SelectEvents = typeof __propDef.events;
export declare type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
}
export {};
