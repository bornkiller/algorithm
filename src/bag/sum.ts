/**
 * @description - sum materials value
 *
 * @param {Array<Material>} source
 * @param {string} key
 *
 * @return {Array<*>}
 */
export default function sum<T>(source: T[], key: string): number {
  return source.reduce((acc, curr) => acc + curr[key], 0);
}
