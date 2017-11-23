/**
 * @description - analyze minimum coin cost
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
const QuantityCache: { [key: number]: number } = {};

/**
 * @description - analyze minimum coin
 *
 * @param {Array<number>} coins
 * @param {number} amount
 *
 * @return {number}
 */
export default function analyzeMinimumCoins(coins: number[], amount: number): number {
  // Boundary condition
  if (amount === 0) {
    return 0;
  }

  // Match cache optimal solution
  if (Reflect.has(QuantityCache, amount)) {
    return Reflect.get(QuantityCache, amount);
  }

  const available = coins.filter((currency) => currency <= amount);

  if (available.length === 0) {
    return Infinity;
  }

  const solutions = available.map((currency) => analyzeMinimumCoins(available, amount - currency) + 1);
  const minimum = Math.min(...solutions);

  return QuantityCache[amount] = minimum;
}
