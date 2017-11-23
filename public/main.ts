/**
 * @description - preview algorithm
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
/* tslint:disable:no-console */

import analyzeMinimumCoins from '../src/analyze-minumum-coins';
import analyzeMinimumCoinsCombination from '../src/analyze-minumum-coins-combination';

const Coins = [1, 5, 10, 25];
const Amounts = [12, 24, 36, 42];

Amounts.forEach((amount) => {
  console.log(`The minimum coins for ${amount} --> ${analyzeMinimumCoins(Coins, amount)}`);
});

Amounts.forEach((amount) => {
  console.log(`The minimum coin combination for ${amount} --> ${analyzeMinimumCoinsCombination(Coins, amount)}`);
});
