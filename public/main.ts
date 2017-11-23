/**
 * @description - preview algorithm
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
/* tslint:disable:no-console */
// coin changes
import analyzeMinimumCoins from '../src/analyze-minumum-coins';
import analyzeMinimumCoinsCombination from '../src/analyze-minumum-coins-combination';
// bag
import analyzeMaximumCapacity from '../src/bag/analyze-maximum-capacity';
import analyzeMaximumCapacityCombination from '../src/bag/analyze-maximum-capacity-combination';
import Material from '../src/bag/material';

// coin changes
const Coins = [1, 5, 10, 25];
const Amounts = [12, 24, 36, 42];

Amounts.forEach((amount) => {
  console.log(`The minimum coins for ${amount} --> ${analyzeMinimumCoins(Coins, amount)}`);
});

Amounts.forEach((amount) => {
  console.log(`The minimum coin combination for ${amount} --> ${analyzeMinimumCoinsCombination(Coins, amount)}`);
});

// bag
const Materials: Material[] = [
  { value: 3, weight: 2 },
  { value: 4, weight: 3 },
  { value: 5, weight: 4 }
];
const Capacities = [5, 7, 12];

Capacities.forEach((capacity) => {
  console.log(`The maximum value for ${capacity} --> ${analyzeMaximumCapacity(Materials, capacity)}`);
});

Capacities.forEach((capacity) => {
  console.log(`The maximum value for ${capacity} combination: `);
  console.log(JSON.stringify(analyzeMaximumCapacityCombination(Materials, capacity), null, 2));
});
