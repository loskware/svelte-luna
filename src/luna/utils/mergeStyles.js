/**
 * Merge a list of inline styles.
 * Every non-string values or empty strings are discarded.
 * @example
 * const style = mergeStyles(
 *  "color: red",
 *  condition1 ? "background-color: blue" : "background-color: green",
 *  borderRadius && `border-radius: ${borderRadius}px`
 * );
 * @param  {...any} styles a list of class names
 * @returns {string} merged styles
 */
export function mergeStyles(...styles) {
  return styles
    .filter((val) => typeof val === "string" && val.trim())
    .join(";");
}
