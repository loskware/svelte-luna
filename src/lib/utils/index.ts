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
export function classNames(
  ...classes: Array<string | boolean | null | undefined>
) {
  return classes.filter(Boolean).join(" ");
}

export function getContrastYIQ(hexcolor: string) {
  hexcolor = hexcolor.replace("#", "");
  var r = parseInt(hexcolor.substring(0, 2), 16);
  var g = parseInt(hexcolor.substring(2, 4), 16);
  var b = parseInt(hexcolor.substring(4, 6), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

/**
 * Merge a list of inline styles.
 * Every non-string values or empty strings are discarded.
 * @example
 * const style = mergeStyles(
 *  "color: red",
 *  condition1 ? "background-color: blue" : "background-color: green",
 *  borderRadius && `border-radius: ${borderRadius}px`
 * );
 */
export function mergeStyles(
  ...styles: Array<string | boolean | null | undefined>
) {
  return styles.filter(Boolean).join(";");
}


/**
 * Toggle value inside an Array
 */
export function toggle<T>(array: Array<T>, value: T) {
  const index = array.indexOf(value);
  if (index < 0) array.push(value);
  else array.splice(index, 1);
}
