/**
 * @description - analyze minimum coin cost
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
// External
import maxBy from 'lodash-es/maxBy';
// Internal
import Material from './material';
import omit from './omit';
import sum from './sum';

/**
 * @description - analyze minimum coin
 *
 * @param {Array<Material>} materials
 * @param {number} capacity
 *
 * @return {number}
 */
export default function analyzeMaximumCapacityCombination(materials: Material[], capacity: number): Material[] {
  // Boundary condition
  if (capacity === 0) {
    return [];
  }

  const availableMaterials = materials.filter((material) => material.weight <= capacity);

  if (availableMaterials.length === 0) {
    return [];
  }

  const solutions = availableMaterials.map((material, index) => {
    const restMaterials = omit<Material>(availableMaterials, index);

    return [material, ...analyzeMaximumCapacityCombination(restMaterials, capacity - material.weight)];
  });

  return maxBy(solutions, (solution) => sum(solution, 'value'));
}
