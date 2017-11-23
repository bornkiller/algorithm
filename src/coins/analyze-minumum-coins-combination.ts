/**
 * @description - analyze minimum coin cost
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

import minBy from 'lodash-es/minBy';

// Coin combination cache
const CombinationCache: { [key: number]: number[] | IInfinitySet } = {};

// Mock Infinity set
interface IInfinitySet {
  length: number;
}

const InfinitySet: IInfinitySet = {
  get length() {
    return Infinity;
  }
};

/**
 * @description - analyze minimum coin
 *
 * @param {Array<number>} coins
 * @param {number} amount
 *
 * @return {number}
 */
export default function analyzeMinimumCoinsCombination(coins: number[], amount: number): number[] | IInfinitySet {
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
    return InfinitySet;
  }

  const solutions = available.map((currency) => {
    const nestSolution = analyzeMinimumCoinsCombination(available, amount - currency);

    return nestSolution === InfinitySet ? nestSolution : [...(nestSolution as number[]), currency];
  });
  const optimalSolution = minBy(solutions, (solution) => solution.length);

  return CombinationCache[amount] = optimalSolution;
}
