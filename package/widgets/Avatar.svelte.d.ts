import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ref?: HTMLImageElement | undefined;
        class?: string | null | undefined;
        style?: string | null | undefined;
        size: string | number;
        src: string;
        alt: string;
        hasShadow?: boolean | null | undefined;
        borderColor?: string | null | undefined;
        borderSize?: string | number | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AvatarProps = typeof __propDef.props;
export declare type AvatarEvents = typeof __propDef.events;
export declare type AvatarSlots = typeof __propDef.slots;
export default class Avatar extends SvelteComponentTyped<AvatarProps, AvatarEvents, AvatarSlots> {
}
export {};
