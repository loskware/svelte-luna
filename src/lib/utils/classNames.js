/**
 * Filter class name and join them separated by spaces creating a valid CSS class name.
 * Every non-string values or empty strings are discarded.
 * @example
 * const cn = classNames(
 *  "class1",
 *  condition1 ? "class2" : "class3",
 *  condition2 && "class4"
 * );
 * @param  {...any} classes a list of class names
 * @returns {string} space separated list of class names
 */
export function classNames(...classes) {
  return classes
    .filter((val) => typeof val === "string" && val.trim())
    .join(" ");
}
