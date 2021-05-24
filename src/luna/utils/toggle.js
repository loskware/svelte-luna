/**
 * Toggle value inside an Array or Set container
 * @param {any[] | Set} arrayOrSet
 * @param {any} value
 */
export function toggle(arrayOrSet, value) {
  if (arrayOrSet instanceof Set) {
    if (arrayOrSet.has(value)) arrayOrSet.delete(value);
    else arrayOrSet.add(value);
  } else if (Array.isArray(arrayOrSet)) {
    const index = arrayOrSet.indexOf(value);
    if (index < 0) arrayOrSet.push(value);
    else arrayOrSet.splice(index, 1);
  }
}
