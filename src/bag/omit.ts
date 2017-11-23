/**
 * @description - omit specific item from array
 *
 * @param {Array<*>} source
 * @param {number} index
 *
 * @return {Array<*>}
 */
export default function omit<T>(source: T[], index: number): T[] {
  return [...source.slice(0, index), ...source.slice(index + 1)];
}
