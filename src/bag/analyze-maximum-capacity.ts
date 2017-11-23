/**
 * @description - analyze minimum coin cost
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

import Material from './material';
import omit from './omit';

/**
 * @description - analyze minimum coin
 *
 * @param {Array<Material>} materials
 * @param {number} capacity
 *
 * @return {number}
 */
export default function analyzeMaximumCapacity(materials: Material[], capacity: number): number {
  // Boundary condition
  if (capacity === 0) {
    return 0;
  }

  const availableMaterials = materials.filter((material) => material.weight <= capacity);

  if (availableMaterials.length === 0) {
    return 0;
  }

  const solutions = availableMaterials.map((material, index) => {
    const restMaterials = omit<Material>(availableMaterials, index);

    return analyzeMaximumCapacity(restMaterials, capacity - material.weight) + material.value;
  });

  return Math.max(...solutions);
}
