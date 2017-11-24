/**
 * @description - analyze minimum coin cost
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// External
import minBy from 'lodash-es/minBy';
// Internal
import InfinitySet from './infinity-set';

// Coin combination cache
const CombinationCache: { [key: number]: number[] | InfinitySet } = {};

/**
 * @description - analyze minimum coin
 *
 * @param {Array<number>} coins
 * @param {number} amount
 *
 * @return {number}
 */
export default function analyzeMinimumCoinsCombination(coins: number[], amount: number): number[] | InfinitySet {
  // Boundary condition
  if (amount === 0) {
    return [];
  }

  // Match cache optimal solution
  if (Reflect.has(CombinationCache, amount)) {
    return Reflect.get(CombinationCache, amount);
  }

  const available = coins.filter((currency) => currency <= amount);

  if (available.length === 0) {
    return Reflect.construct(InfinitySet, []);
  }

  const solutions = available.map((currency) => {
    const nestSolution = analyzeMinimumCoinsCombination(available, amount - currency);

    return nestSolution === InfinitySet ? nestSolution : [...(nestSolution as number[]), currency];
  });
  const optimalSolution = minBy(solutions, (solution) => solution.length);

  return CombinationCache[amount] = optimalSolution;
}
