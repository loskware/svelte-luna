/**
 * Toggle value inside an Array
 * @param {any[]} array
 * @param {any} value
 */
export function toggle(array, value) {
  const index = array.indexOf(value);
  if (index < 0) array.push(value);
  else array.splice(index, 1);
}
