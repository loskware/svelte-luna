/**
 * Filter class name and join them separated by spaces creating a valid CSS class name.
 * Every non-string values or empty strings are discarded.
 * @example
 * const cn = classNames(
 *  "class1",
 *  condition1 ? "class2" : "class3",
 *  condition2 && "class4"
 * );
 */
export declare function classNames(...classes: Array<string | null | undefined>): string;
